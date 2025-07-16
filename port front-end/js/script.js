const listaTarefas = document.getElementById('lista-tarefas');
const tituloInput = document.getElementById('titulo');
const inicioInput = document.getElementById('inicio');
const entregaInput = document.getElementById('entrega');
const prioridadeInput = document.getElementById('prioridade');

let tarefaEditandoId = null;

async function carregarTarefas() {
  try {
    const response = await fetch('http://localhost:8080/api/tarefas/listarTarefas');
    const tarefas = await response.json();
    listaTarefas.innerHTML = '';
    tarefas.forEach(tarefa => {
      const item = criarElementoTarefa(tarefa);
      listaTarefas.appendChild(item);
    });
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
  }
}

function criarElementoTarefa(tarefa) {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  const detalhes = document.createElement('div');
  detalhes.className = 'task-details';

  const inicioFormatado = formatarData(tarefa.dataCriacao);
  const fimFormatado = formatarData(tarefa.dataConclusao);

  detalhes.innerHTML = `<strong>${tarefa.titulo}</strong><br>Início: ${inicioFormatado} | Entrega: ${fimFormatado} | Prioridade: ${tarefa.prioridade}`;

  const acoes = document.createElement('div');
  acoes.className = 'task-actions';

  const botaoEditar = document.createElement('button');
  botaoEditar.textContent = 'Alterar';
  botaoEditar.onclick = () => carregarParaEdicao(tarefa);

  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Deletar';
  botaoExcluir.classList.add('delete');
  botaoExcluir.onclick = () => deletarTarefa(tarefa.id);

  acoes.appendChild(botaoEditar);
  acoes.appendChild(botaoExcluir);

  taskItem.appendChild(detalhes);
  taskItem.appendChild(acoes);

  return taskItem;
}

function carregarParaEdicao(tarefa) {
  tarefaEditandoId = tarefa.id;
  tituloInput.value = tarefa.titulo;
  inicioInput.value = formatarData(tarefa.dataCriacao);
  entregaInput.value = formatarData(tarefa.dataConclusao);
  prioridadeInput.value = tarefa.prioridade;
  document.getElementById('botao-adicionar').textContent = 'Salvar Alterações';
}

async function adicionarOuEditarTarefa() {
  const titulo = tituloInput.value;
  const dataCriacao = inicioInput.value;
  const dataConclusao = entregaInput.value;
  const prioridade = prioridadeInput.value;

  if (!titulo || !dataCriacao || !dataConclusao) {
    alert('Preencher todos os campos!');
    return;
  }

  const tarefa = {
    titulo,
    dataCriacao: formatarParaEnvioData(dataCriacao),
    dataConclusao: formatarParaEnvioData(dataConclusao),
    prioridade
  };

  console.log("Enviando tarefa:", JSON.stringify(tarefa)); // debug

  try {
    let url, method;
    if (tarefaEditandoId) {
      url = `http://localhost:8080/api/tarefas/atualizarTarefa/${tarefaEditandoId}`;
      method = 'PUT';
    } else {
      url = 'http://localhost:8080/api/tarefas/cadastrarTarefa';
      method = 'POST';
    }

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefa)
    });

    if (response.ok) {
      tarefaEditandoId = null;
      limparFormulario();
      carregarTarefas();
      document.getElementById('botao-adicionar').textContent = 'Adicionar Tarefa';
    } else {
      const erroTexto = await response.text();
      console.error('Erro ao salvar tarefa:', erroTexto);
      alert('Erro ao salvar tarefa: ' + erroTexto);
    }
  } catch (error) {
    console.error('Erro ao salvar tarefa:', error);
    alert('Erro ao salvar tarefa: ' + error.message);
  }
}



function formatarData(dataStr) {
  const data = new Date(dataStr);
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function formatarParaEnvioData(dataStr) {
  const data = new Date(dataStr);
  return data.toISOString().split('T')[0]; // força o formato yyyy-MM-dd
}


carregarTarefas();
