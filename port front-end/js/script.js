const listaTarefas = document.getElementById('lista-tarefas');

const tituloInput = document.getElementById('titulo');
const inicioInput = document.getElementById('inicio');
const entregaInput = document.getElementById('entrega');

const prioridadeInput = document.getElementById('prioridade');



function criarElementoTarefa(titulo, inicio, entrega, prioridade) {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  const detalhes = document.createElement('div');


  detalhes.className = 'task-details';



  detalhes.innerHTML = `<strong>${titulo}</strong><br>Início: ${inicio} | Entrega: ${entrega} | Prioridade: ${prioridade}`;
  const acoes = document.createElement('div');
  acoes.className = 'task-actions';

  const botaoEditar = document.createElement('button');
  botaoEditar.textContent = 'Alterar';
  botaoEditar.onclick = () => editarTarefa(taskItem, titulo, inicio, entrega, prioridade);

  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Deletar';


  botaoExcluir.classList.add('delete');
  botaoExcluir.onclick = () => listaTarefas.removeChild(taskItem);

  acoes.appendChild(botaoEditar);
  acoes.appendChild(botaoExcluir);



  taskItem.appendChild(detalhes);
  taskItem.appendChild(acoes);

  return taskItem;
}

function adicionarTarefa() {
  const titulo = tituloInput.value;


  const inicio = inicioInput.value;

  const entrega = entregaInput.value;



  const prioridade = prioridadeInput.value;





  if (!titulo || !inicio || !entrega) {
    alert('Preencher todos os campos!');
    return;
  }

  const novaTarefa = criarElementoTarefa(titulo, inicio, entrega, prioridade);
  listaTarefas.appendChild(novaTarefa);

  tituloInput.value = '';
  inicioInput.value = '';
  entregaInput.value = '';
  prioridadeInput.value = 'Média';
}

function editarTarefa(taskItem, titulo, inicio, entrega, prioridade) {
  tituloInput.value = titulo;
  inicioInput.value = inicio;
  entregaInput.value = entrega;
  prioridadeInput.value = prioridade;
  listaTarefas.removeChild(taskItem);
}
