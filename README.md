# Spotify Imersão - Alura
![Spotify GIF](spotify.gif)

## Descrição

Este projeto é uma réplica simplificada da interface do **Spotify**, desenvolvido como parte da Imersão da Alura. O objetivo é criar uma interface interativa com funcionalidades básicas de navegação, pesquisa de artistas e exibição de playlists. A aplicação utiliza **HTML**, **CSS**, **JavaScript** e a **API JSON Server** para emular a interação com dados fictícios de artistas e playlists.

### Funcionalidades

- **Interface de navegação**: A interface simula a navegação no Spotify com menu lateral, barra de pesquisa e exibição de playlists.
- **Pesquisa de artistas**: Permite a pesquisa de artistas, mostrando os resultados filtrados em tempo real.
- **Exibição de playlists**: Mostra um conjunto de playlists e permite a navegação entre elas.
- **Saudação dinâmica**: A saudação (Bom Dia, Boa Tarde, Boa Noite) é atualizada automaticamente com base na hora do dia.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da interface (com reset, variáveis e media queries).
- **JavaScript**: Lógica de interação, como a saudação dinâmica e a pesquisa de artistas.
- **JSON Server**: API fake para emular dados de artistas.

## Estrutura de Diretórios

```
/spotify-imersao-main
|-- /src
|   |-- /assets
|   |-- /icons
|   |-- /playlist
|   |-- /styles
|   |   |-- reset.css
|   |   |-- vars.css
|   |   |-- main-content.css
|   |   |-- sidebar-footer.css
|   |   |-- media-query.css
|   |-- /scripts
|   |   |-- script.js
|   |   |-- search.js
|   |-- index.html
|
|-- /api-artists
|   |-- artists.json
|
|-- README.md
```

### Descrição dos Arquivos

- **index.html**: Arquivo principal da aplicação, contendo a estrutura HTML da interface.
- **artists.json**: Dados fictícios de artistas e playlists, utilizados pela API JSON Server.
- **script.js**: Contém a lógica de saudação dinâmica e manipulação de grid responsivo.
- **search.js**: Contém a lógica para a pesquisa de artistas com filtragem e exibição dos resultados.
- **CSS (reset.css, vars.css, etc.)**: Arquivos responsáveis pela estilização da interface, incluindo resets de estilos e variáveis globais de estilo.

## Como Executar o Projeto

### Requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu sistema.

### Passo 1: Instalar Dependências

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/spotify-imersao-alura.git
    cd spotify-imersao-alura
    ```

2. Instale o **JSON Server** globalmente:
    ```bash
    npm install -g json-server
    ```

### Passo 2: Iniciar a API Fake

1. Navegue até a pasta do projeto e inicie o servidor JSON Server para servir o arquivo `artists.json`:
    ```bash
    json-server --watch api-artists/artists.json --port 3000
    ```

    Isso irá iniciar a API no [http://localhost:3000](http://localhost:3000), permitindo que você simule interações com a API.

### Passo 3: Executar a Interface

1. Abra o arquivo `index.html` em um navegador ou utilize uma extensão como o **Live Server** para rodar o projeto localmente.

### Passo 4: Testar a Funcionalidade

1. A interface estará disponível no seu navegador, e você pode começar a interagir com ela:
   - Navegar pelas playlists.
   - Pesquisar por artistas.
   - Observar a saudação dinâmica (Bom Dia, Boa Tarde, Boa Noite).

## Endpoints da API

- **GET /artists**: Retorna a lista de artistas fictícios para exibição na aplicação.
  - Exemplo: `http://localhost:3000/artists`

## Capturas de Tela

### 1. Tela Inicial (Navegação)
![Tela Inicial](./src/assets/screenshots/tela-inicial.png)

### 2. Pesquisa de Artistas
![Pesquisa de Artistas](./src/assets/screenshots/pesquisa-artistas.png)

### 3. Saudação Dinâmica
![Saudação](./src/assets/screenshots/saudacao.png)

## Considerações Finais

Esse projeto visa aprimorar o entendimento sobre desenvolvimento front-end, integração com APIs fakes e responsividade. A implementação de funcionalidades como a saudação dinâmica e a pesquisa de artistas foi um desafio interessante para trabalhar com JavaScript e manipulação de DOM.

## Contribuições

Se você gostaria de contribuir para este projeto, sinta-se à vontade para abrir uma **pull request**! Se encontrar algum erro ou tiver sugestões de melhoria, abra um **issue**.

## Licença

Este projeto é de código aberto sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
