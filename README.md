# 📌 Projeto Ágil com GitHub: Sistema de Gerenciamento de Tarefas

Este projeto simula o desenvolvimento de um sistema de gerenciamento de tarefas, com foco no aprendizado e prática de conceitos fundamentais de backend. O objetivo é permitir o cadastro, visualização, atualização e exclusão de tarefas, com integração ao banco de dados relacional MySQL. 

---

## Objetivo

Fazer a criação de um sistema completo de gerenciamento de tarefas utilizando Java com Spring Boot no backend e MySQL para persistência dos dados, oferecendo uma base sólida para controle e organização de tarefas de forma eficiente.

---

## Conceito do Projeto

O projeto está estruturado para simular uma aplicação real, com foco no backend. O desenvolvimento está baseado em boas práticas de engenharia de software, testes automatizados e organização por meio do GitHub Projects (Kanban).

---

## Tecnologias Utilizadas e suas Justificativa

### BACKEND

- **Java + Spring Boot**: Framework robusto, produtivo e amplamente utilizado no mercado para desenvolvimento de APIs REST.
- **MySQL**: Banco de dados relacional utilizado para armazenar as tarefas de forma estruturada.
- **Gradle**: Gerenciador de dependências e build do projeto.
- **GitHub Actions**: Utilizado para testes automatizados.

### FRONT-END

- **Html**: Utilizado para estruturar a pagina.
- **CSS**: Responsável pela aparência e layout da interface do projeto.
- **JavaScript**:  Usado para adicionar interatividade ao sistema, como capturar eventos do usuário, fazer requisições à API usando fetch.
  
---

## Como Iniciar o Projeto?

### BACKEND (Java + Spring Boot)

1. **Configure o Banco de Dados:**
   - Abra o **MySQL Workbench** ou outro cliente MySQL.
   - Crie um banco chamado `gestao`.

2. **Adicione as credenciais no arquivo `application.properties`:**
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/gestao
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha

3. **Clone o repositório e acesse o diretório:**
   `git clone https://github.com/garenks/portf-lio-softwareEngineer.git`


### FRONT-END

- **Abra o diretório do projeto no seu editor de código.**

- **Vá até a pasta "port frontend/" onde estão os arquivos .html, .css e .js**

- **Atualizar os dados de uma tarefa.**

- **Deletar uma tarefa.**

- **Execute o arquivo index.html diretamente no navegador.**

- **Certifique-se de que o backend esteja rodando para que o frontend consiga buscar os dados corretamente.**

---

### Funcionalidades CRUD Implementadas
- **Criar uma nova tarefa.**

- **Listar todas as tarefas existentes.**

- **Atualizar os dados de uma tarefa.**

- **Deletar uma tarefa.**

---

Gestão de Mudanças
1. Prover **tela de gerenciamento de tarefas**.
2. Prover **campo de tarefa**.
3. Prover **botão "Adicionar nova tarefa"**.
4. Prover **botão "Alterar tarefa"**.
5. Prover **botão "Deletar tarefa"**.
6. Prover **campo com o título da tarefa**.
7. Prover **campo de descrição**.
8. Prover **campo com a prioridade da tarefa**.

### Requisitos Não Funcionais:
1. Prover **usabilidade** para facilitar a interação do usuário com o sistema.
2. Prover **conexão estável com o banco de dados** para garantir o armazenamento e recuperação confiável das tarefas.


---

### Metodologia Utilizada
**Kanban:**
Foi utilizado um quadro **Kanban** na aba **Projects** do GitHub para visualizar o progresso das tarefas de forma clara e organizada. As tarefas foram separadas em colunas como:
- **A Fazer**
- **Em Progresso**
- **Concluído**
---

### Gestão de Mudanças
Foi realizado uma alteração no escopo do projeto, onde seria introduzido no painel de gerenciamento de tarefas um input para data inicial e outro input para prazo máximo.
