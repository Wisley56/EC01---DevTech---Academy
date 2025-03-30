# README - DevTech Academy - Gerenciamento de Alunos

## 📝 Descrição do Projeto
Sistema simples para cadastrar, listar, editar e excluir alunos de uma escola de programação, com geração de relatórios básicos.

## ✅ Funcionalidades
- Cadastro de alunos (nome, idade, curso e nota final)
- Listagem em tabela com opções de edição e exclusão
- Relatórios:
  - Alunos aprovados/reprovados
  - Médias de notas e idades
  - Ordenação por nome
  - Contagem por curso

## 🛠️ Tecnologias Utilizadas
- HTML5
- JavaScript
- Docker (containerização)

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Docker instalado

### Passo a Passo
1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd devtech-academy
```

2. Construa a imagem Docker:
```bash
docker build -t devtech-academy .
```

3. Execute o container:
```bash
docker run -d -p 8080:80 --name devtech-app devtech-academy
```

4. Acesse no navegador:
```
http://localhost:8080
```

## 📂 Estrutura de Arquivos
```
devtech-academy/
├── index.html        # Página principal
├── style.css        # Arquivo de estilização
├── script.js        # Lógica da aplicação
├── Dockerfile       # Configuração do container
└── README.md        # Este arquivo
```

## 🛑 Comandos Docker Úteis
- Parar container: `docker stop devtech-app`
- Iniciar container: `docker start devtech-app`
- Ver containers: `docker ps -a`
- Remover container: `docker rm devtech-app`

## 📌 Observações
- Os dados são armazenados apenas em memória (atualizações são perdidas ao recarregar a página)
- Projeto desenvolvido para fins educacionais
- Arquivo gerado por IA e conferido pelo autor do projeto

## 📄 Licença
Este projeto é de uso livre para fins educacionais.