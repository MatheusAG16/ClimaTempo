<div align="center">
  <h1>🌦️ ClimaTempo</h1>
</div>

<p align="center">
  Uma aplicação web moderna e elegante para visualizar o clima em tempo real de qualquer cidade do mundo.
  <br />
  <a href="https://climatempomag.netlify.app" target="_blank"><strong>🔗 Acesse a versão ao vivo »</strong></a>
</p>

---

## 📝 Sobre o Projeto

Bem-vindo ao **ClimaTempo**! Este projeto foi criado com foco em uma interface limpa, responsiva e uma experiência de usuário agradável.

O objetivo principal foi aprofundar conhecimentos em tecnologias de frontend, consumo de APIs e o fluxo completo de desenvolvimento e deploy de uma aplicação web.

---

## ✨ Funcionalidades

* **Busca por Cidade:** Pesquise o clima de qualquer cidade do mundo pelo nome.
* **Geolocalização Automática:** Permita o acesso à sua localização para obter instantaneamente o clima da sua região.
* **Design Responsivo:** A interface se adapta perfeitamente a qualquer tamanho de tela, de desktops a celulares.
* **Ícones Dinâmicos:** A interface exibe ícones que representam a condição climática atual (sol, chuva, nuvens, etc.).

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **React:** Biblioteca principal para a construção da interface de usuário.
* **React Hooks:** `useState` e `useEffect` para gerenciar o estado e os efeitos colaterais.
* **Fetch API:** Para realizar as requisições assíncronas à API de clima.
* **CSS Modules:** Para estilização dos componentes de forma escopada e organizada.
* **OpenWeatherMap API:** Como fonte para todos os dados climáticos.
* **Netlify:** Para deploy e hospedagem do site.

---

## 🧠 Principais Aprendizados

O desenvolvimento do ClimaTempo foi uma jornada valiosa. Os principais desafios e conhecimentos adquiridos foram:

* Consumo de APIs de terceiros de forma assíncrona, tratando os estados de carregamento, sucesso e erro.
* Gerenciamento de estado complexo e reatividade da interface utilizando Hooks do React.
* Resolução de problemas comuns em ambientes de produção, como a diferença de "case-sensitive" em nomes de arquivos.
* O fluxo completo de **CI/CD** (Integração Contínua/Deploy Contínuo), onde cada `git push` para a branch principal aciona um novo build e deploy automático no Netlify.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/MatheusAG16/ClimaTempo](https://github.com/MatheusAG16/ClimaTempo)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd ClimaTempo
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione sua chave da API do OpenWeatherMap:
        ```
        VITE_API_KEY=SUA_CHAVE_AQUI
        ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  Abra `http://localhost:5173` (ou a porta indicada no terminal) no seu navegador.

---

<p align="center">
  Muito obrigado por ler até aqui!
  <br>
  Projeto feito com muito carinho ❤️
</p>