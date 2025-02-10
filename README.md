# Sistema de Gerenciamento de Notas e Frequência

## Introdução
Este projeto foi desenvolvido para oferecer ao professor Carlos uma ferramenta robusta e eficiente para a gestão acadêmica de seus alunos. O sistema permite o cadastro completo de alunos, a inserção e atualização dinâmica de notas e frequência, além do cálculo automatizado de médias e identificação de alunos que necessitam de atenção especial. Com uma interface intuitiva e moderna, o sistema proporciona uma experiência fluida e responsiva.

## Requisitos
- É necessário ter o **.NET 8** instalado no sistema.
- É necessário ter o **Node.js** instalado no sistema.

### Instalação do .NET 8

#### No Linux:
Execute os seguintes comandos para instalar o .NET 8 no Linux utilizando o gerenciador de pacotes da sua distribuição. Para Ubuntu/Debian:

```bash
sudo apt update
sudo apt install dotnet-sdk-8.0
```

#### No Windows:
Baixe o instalador oficial em: [https://dotnet.microsoft.com/en-us/download/dotnet/8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
E siga as instruções de instalação.

### Instalação do Node.js

#### No Linux:
```bash
sudo apt update
sudo apt install nodejs npm
```
Após a instalação, verifique se o Node.js foi adicionado ao PATH:
```bash
node -v
npm -v
```

#### No Windows:
Baixe o instalador oficial em: [https://nodejs.org/](https://nodejs.org/)
Durante a instalação, marque a opção para adicionar o Node.js ao PATH.
Após instalar, verifique a instalação executando no terminal:
```powershell
node -v
npm -v
```

## Instruções para Executar o Sistema
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/matheusmelos/my-app-full-stack
   cd my-app-full-stack
   ```
2. **Abrir o projeto no VS Code:**
   - **No Linux:**
     ```bash
     code .
     ```
   - **No Windows:**
     ```powershell
     code .
     ```

3. **Instalar as dependências do backend:**
   ```bash
   cd server
   dotnet restore
   ```
4. **Instalar as dependências do frontend:**
   ```bash
   cd ../client
   npm install
   ```
5. **Executar o frontend:**
   ```bash
   npm start
   ```

### Importante:
- O backend e o frontend devem estar rodando simultaneamente.
- O sistema normalmente estará disponível em `http://localhost:3000/`.

## Premissas Assumidas
- O professor pode inserir e atualizar as notas e a frequência dos alunos de maneira ágil.
- As notas variam entre 0 e 10.
- A frequência é registrada em percentual (0 a 100%).
- Um aluno está em risco acadêmico se sua frequência for inferior a 75%.
- A interface deve ser responsiva e acessível para diferentes dispositivos.
- O professor tem a permissão de apagar e/ou editar um aluno.

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

