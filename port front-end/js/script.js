const listaTarefas = document.getElementById('lista-tarefas');
const tituloInput = document.getElementById('titulo');
const descricaoInput = document.getElementById('descricao');
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

  detalhes.innerHTML = `<strong>${tarefa.titulo}</strong><br>${tarefa.descricao}<br>Prioridade: ${tarefa.prioridade}`;

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
  descricaoInput.value = tarefa.descricao;
  prioridadeInput.value = tarefa.prioridade;
  document.getElementById('botao-adicionar').textContent = 'Salvar Alterações';
}

async function adicionarOuEditarTarefa() {
  const titulo = tituloInput.value;
  const descricao = descricaoInput.value;
  const prioridade = prioridadeInput.value;

  if (!titulo || !descricao) {
    alert('Preencha todos os campos!');
    return;
  }

  const tarefa = { titulo, descricao, prioridade };
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

async function deletarTarefa(id) {
  if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

  try {
    const response = await fetch(`http://localhost:8080/api/tarefas/deletarTarefa/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      carregarTarefas();
    } else {
      console.error('Erro ao deletar:', await response.text());
    }
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
  }
}

function limparFormulario() {
  tituloInput.value = '';
  descricaoInput.value = '';
  prioridadeInput.value = 'Média';
}

carregarTarefas();
