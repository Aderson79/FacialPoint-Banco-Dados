# FacialPoint — API Backend

API REST do sistema FacialPoint, responsável por autenticação, gerenciamento de usuários e registro de ponto.

## Sobre o projeto

O FacialPoint é um sistema de registro de ponto por reconhecimento facial. Esta API é o núcleo do sistema, gerenciando usuários, autenticação JWT, registros de frequência e configurações do quiosque.

## Tecnologias

- **Node.js** com ES Modules
- **Express.js** — servidor HTTP e roteamento
- **MongoDB** com **Mongoose** — banco de dados e modelagem
- **JSON Web Token (JWT)** — autenticação stateless
- **bcrypt** — hash de senhas
- **dotenv** — gerenciamento de variáveis de ambiente

## Funcionalidades

- Cadastro e autenticação de usuários (funcionários e administradores)
- Registro de ponto de entrada e saída com validação de horário
- Consulta e exportação de frequências em CSV
- Gestão de horários de trabalho por dia da semana
- Configuração de senha do quiosque de reconhecimento facial
- Adição manual de registros de ponto pelo administrador
- Proxy para consulta do horário de Brasília

## Como executar

**1. Instalar dependências**
```bash
npm install
```

**2. Configurar variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

| Variável | Descrição |
|---|---|
| `PORT` | Porta do servidor (padrão: 3000) |
| `MONGO_URI` | URI de conexão com o MongoDB |
| `JWT_SECRET` | Chave secreta para geração de tokens JWT |
| `KIOSK_SECRET` | Senha de acesso ao quiosque |
| `ADMIN_NOME` | Nome do administrador inicial |
| `ADMIN_EMAIL` | E-mail do administrador inicial |
| `ADMIN_SENHA` | Senha do administrador inicial |

**3. Criar o administrador inicial**
```bash
node createAdmin.js
```

**4. Iniciar o servidor**
```bash
npm start
```

## Repositórios relacionados

- [FacialPoint-Site](https://github.com/Erlandsonjr/FacialPoint-Site) — Interface web (React)
- [FacialPoint-Reconhecimento-Facial](https://github.com/Erlandsonjr/FacialPoint-Reconhecimento-Facial) — Serviço de reconhecimento facial (Python)
- [gerar_codificacao_facialpoint](https://github.com/Erlandsonjr/gerar_codificacao_facialpoint) — Serviço de codificação facial (Python)
