# Sistema de Gerenciamento de Notas e Frequência

## Introdução
Este projeto foi desenvolvido para oferecer ao professor Carlos uma ferramenta robusta e eficiente para a gestão acadêmica de seus alunos. O sistema permite o cadastro completo de alunos, a inserção e atualização dinâmica de notas e frequência, além do cálculo automatizado de médias e identificação de alunos que necessitam de atenção especial. Com uma interface intuitiva e moderna, o sistema proporciona uma experiência fluida e responsiva.

## Instruções para Executar o Sistema
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/matheusmelos/my-app-full-stack
   cd my-app-full-stack
   ```
2. **Instalar as dependências do backend:**
   ```bash
   cd server
   dotnet restore
   ```
3. **Executar o backend:**
   ```bash
   dotnet run
   ```
4. **Instalar as dependências do frontend:**
   ```bash
   cd client
   npm install
   ```
5. **Executar o frontend:**
   ```bash
   npm run dev
   ```
6. **Acessar o sistema:**
   - O sistema estará disponível em `http://localhost:5174/`

## Premissas Assumidas
- O professor pode inserir e atualizar as notas e a frequência dos alunos de maneira ágil.
- As notas variam entre 0 e 10.
- A frequência é registrada em percentual (0 a 100%).
- Um aluno está em risco acadêmico se sua frequência for inferior a 75%.
- A interface deve ser responsiva e acessível para diferentes dispositivos.

## Decisões de Projeto
- **Frontend:**
  - Desenvolvido utilizando React e Vite para proporcionar alto desempenho e modularização.
  - Utiliza componentes reutilizáveis para otimizar a entrada e exibição de dados.
- **Backend:**
  - Implementado em .NET 8 com C# para garantir escalabilidade e eficiência.
  - CRUD completo utilizando minimal APIs, permitindo operações rápidas e seguras no banco de dados.
  - Banco de dados SQLite para armazenamento otimizado e leve.
  - O cálculo das médias dos alunos ocorre dinamicamente em tempo de execução, eliminando a necessidade de múltiplas atualizações no banco de dados e garantindo sempre valores atualizados, mesmo após alterações nas notas.

## Funcionalidades Principais
- **CRUD completo:**
  - Cadastro, leitura, atualização e exclusão de alunos de forma eficiente.
  - Inserção e modificação de notas e frequência com impacto imediato nos cálculos.
- **Cálculo automatizado:**
  - Média individual de cada aluno e média geral da turma.
- **Monitoramento acadêmico:**
  - Identificação em tempo real de alunos com baixo desempenho acadêmico ou frequência insuficiente.


Com este sistema, a gestão de alunos torna-se muito mais eficiente, permitindo que o professor Carlos se concentre no que realmente importa: o ensino e o desenvolvimento acadêmico de seus alunos.

