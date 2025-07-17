# 📌 Projeto Ágil com GitHub: Sistema de Gerenciamento de Tarefas

Este projeto simula o desenvolvimento de um sistema de gerenciamento de tarefas, com foco no aprendizado e prática de conceitos fundamentais de backend. O objetivo é permitir o cadastro, visualização, atualização e exclusão de tarefas, com integração ao banco de dados relacional MySQL. A estrutura segue boas práticas de organização, versionamento com GitHub e metodologias ágeis.

---

## 🟪 Objetivo

Criar um sistema completo de gerenciamento de tarefas utilizando Java com Spring Boot no backend e MySQL para persistência dos dados, oferecendo uma base sólida para controle e organização de tarefas de forma eficiente.

---

## Conceito do Projeto

O projeto está estruturado para simular uma aplicação real, com foco no backend, podendo ser facilmente conectado a um frontend posteriormente. O desenvolvimento está baseado em boas práticas de engenharia de software, testes automatizados e organização por meio do GitHub Projects (Kanban).

---

## Tecnologias Utilizadas e Justificativa

### 🔙 BACKEND

- **Java + Spring Boot**: Framework robusto, produtivo e amplamente utilizado no mercado para desenvolvimento de APIs REST.
- **MySQL**: Banco de dados relacional utilizado para armazenar as tarefas de forma estruturada.
- **Spring Data JPA**: Facilita a integração com o banco de dados usando ORM.
- **Lombok**: Reduz a verbosidade do código com anotações simples.
- **Gradle**: Gerenciador de dependências e build do projeto.
- **GitHub Actions**: Utilizado para testes automatizados.

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
   
