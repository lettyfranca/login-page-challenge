## Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS
- React Icons
- JavaScript

## Estrutura do Projeto
```text
src/
│
├── assets/
│ ├── icon.png
│ ├── illustration.png
│
├── components/ # Componentes reutilizáveis
│ ├── Divider.jsx
│ ├── InputField.jsx
│ ├── PrimaryButton.jsx
│ ├── SocialButton.jsx
│
├── pages/
│ └── Login.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

## Como rodar o projeto localmente
### 1 - Clone o repositório
git clone https://github.com/lettyfranca/login-page-challenge.git

### 2 - Acesse a pasta
cd login-page-challenge ou cd .\login-page-challenge

### 3 - Instale as dependências
npm install

### 4 - Rode o projeto
npm run dev

O projeto estará disponível em: http://localhost:5173

## Como foi feito o deploy
O deploy foi realizado através do Vercel, seguindo os passos abaixo: <br>
1 - Acesso a https://vercel.com/ <br>
2 - Login com o github <br>
3 - Seleção do repositório a ser publicado <br>
4 - O próprio Vercel identifica as tecnologias usadas e prepara tudo para o deployement <br>
5 - Conferência e confirmação da publicação <br>

## Decisões técnicas tomadas
- Para preparação do projeto/ambiente o Vite foi escolhido por ser mais rápido e moderno do que o Create React App.
- Para estilização o Tailwind foi usado por agilizar todo o processo, ter classes para tratar de responsividade de forma simples e para criar um padrão no layout.
- Foi possível componentizar algumas coisas que podem ser reutilizadas posteriormente, como é o caso dos campos de Email e Password.

## Como a responsividade foi pensada
- Como mencionado anteriormente a responsividade foi simplificada com o uso do Tailwind, onde foi usada a ideia de 'Mobile-first', trabalhando com as classes 'sm' e 'lg'.
- Além delas outras classes foram adotadas para o tamanho dos textos (text-sm, text-2xl, text-3xl).
- E para imagem foi usada a classe 'object-cover' para que a imagem seja adaptada ao tamanho do dispositivo.

## Link do Figma
https://www.figma.com/design/neKBjsaZIIwDttC4ZzKiDj/Challenge---Login-Page?node-id=0-1&t=8HRD9WjdIfDLKVsB-1

