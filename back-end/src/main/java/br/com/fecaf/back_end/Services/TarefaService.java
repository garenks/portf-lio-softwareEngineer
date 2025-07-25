package br.com.fecaf.back_end.Services;

import br.com.fecaf.back_end.Model.Tarefa;
import br.com.fecaf.back_end.Repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    public List<Tarefa> listarTarefas() {
        return tarefaRepository.findAll();
    }

    public Tarefa salvarTarefa(Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    public void deletarTarefa(int id) {
        tarefaRepository.deleteById(id);
    }

    public Tarefa atualizarTarefa(int id, Tarefa tarefaDetails) {
        Tarefa tarefa = tarefaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        tarefa.setTitulo(tarefaDetails.getTitulo());
        tarefa.setDescricao(tarefaDetails.getDescricao());
        tarefa.setPrioridade(tarefaDetails.getPrioridade());

        return tarefaRepository.save(tarefa);
    }
}
