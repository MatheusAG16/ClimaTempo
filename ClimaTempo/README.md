🌦️ ClimaTempo
Bem-vindo ao ClimaTempo! Uma aplicação web moderna e elegante desenvolvida para visualizar as condições climáticas de qualquer cidade do mundo em tempo real. O projeto foi criado com foco em uma interface limpa, responsiva e uma experiência de usuário agradável.

Este é um projeto pessoal construído com o objetivo de aprofundar meus conhecimentos em tecnologias de frontend, consumo de APIs e o fluxo completo de desenvolvimento e deploy de uma aplicação web.

🔗 Acesse a versão ao vivo: https://climatempomag.netlify.app/

✨ Funcionalidades
Busca por Cidade: Pesquise o clima de qualquer cidade do mundo pelo nome.

Geolocalização Automática: Permita o acesso à sua localização para obter instantaneamente o clima da sua região.

Design Responsivo: A interface se adapta perfeitamente a qualquer tamanho de tela, de desktops a celulares, mantendo uma apresentação bonita e funcional.

Ícones Dinâmicos: A interface exibe ícones que representam a condição climática atual (sol, chuva, nuvens, etc.).

🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando as seguintes tecnologias:

React: Biblioteca principal para a construção da interface de usuário.

React Hooks: useState e useEffect para gerenciar o estado e os efeitos colaterais da aplicação.

Fetch API: Para realizar as requisições assíncronas à API de clima.

CSS Modules: Para estilização dos componentes de forma escopada e organizada.

OpenWeatherMap API: Como fonte para todos os dados climáticos.

Netlify: Para deploy e hospedagem do site.

🧠 Principais Aprendizados
Como um projeto de aprendizado, o desenvolvimento do ClimaTempo foi uma jornada valiosa. Os principais desafios e conhecimentos adquiridos foram:

Consumo de APIs de terceiros de forma assíncrona, tratando os estados de carregamento, sucesso e erro.

Gerenciamento de estado complexo e reatividade da interface utilizando Hooks do React.

Resolução de problemas comuns em ambientes de produção, como a diferença de "case-sensitive" em nomes de arquivos entre o ambiente de desenvolvimento e o de deploy.

O fluxo completo de CI/CD (Integração Contínua/Deploy Contínuo), onde cada git push para a branch principal aciona um novo build e deploy automático no Netlify.

🚀 Como Executar o Projeto Localmente
Para rodar este projeto na sua máquina, siga os passos abaixo:

Clone o repositório:

Bash

git clone https://github.com/MatheusAG16/ClimaTempo
Navegue até a pasta do projeto:

Bash

cd climatempo
Instale as dependências:

Bash

npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz da pasta climatempo.

Adicione sua chave da API do OpenWeatherMap nele:

VITE_API_KEY=SUA_CHAVE_AQUI
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Abra http://localhost:5173 (ou a porta que aparecer no seu terminal) para ver o projeto rodando.

Muito obrigado por ler até aqui!
Projeto feito com muito carinho <3
