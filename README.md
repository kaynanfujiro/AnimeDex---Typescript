# Buscador de Animes com MyAnimeList API

Este é um projeto de busca de animes desenvolvido utilizando a API do MyAnimeList (MAL). O objetivo principal da aplicação é permitir que os usuários busquem informações sobre animes, como sinopse, classificações, episódios, entre outros, diretamente através da interface do aplicativo.

## 🚀 Tecnologias Utilizadas

- **Back-End**: Node.js com Express
- **Front-End**: React, Vite, TypeScript
- **Estilização**: Tailwind CSS
- **API**: MyAnimeList (MAL)
- **Gerenciamento de Requisições**: Arquitetura API -> Back-End -> Front-End para contornar limitação de CORS.

## 💡 Sobre o Projeto

O principal desafio desse projeto foi superar a limitação do CORS (Cross-Origin Resource Sharing), já que a API do MyAnimeList não permite requisições diretas do Front-End. Para isso, foi implementada uma arquitetura onde o Back-End (Node.js + Express) gerencia as requisições à API do MyAnimeList e transmite os dados para o Front-End. Isso garantiu que o processo de busca e exibição de dados fosse feito de maneira eficiente e segura.

## 🔧 Como Funciona

1. O usuário realiza uma busca de animes no Front-End (React + Vite).
2. O Front-End faz uma requisição para o Back-End.
3. O Back-End comunica-se com a API do MyAnimeList (MAL), obtendo as informações desejadas.
4. O Back-End envia os dados para o Front-End, que os exibe de forma organizada e estilizada.

A aplicação foi construída com foco em performance, escalabilidade e experiência do usuário, utilizando as melhores práticas e ferramentas modernas.

## 📝 Aprendizados

- **CORS**: Ao lidar com a limitação de requisições diretas ao Front-End, foi possível entender profundamente como funciona o controle de segurança entre diferentes origens de requisições.
- **Node.js e Express**: Aperfeiçoei meus conhecimentos sobre desenvolvimento de APIs e comunicação entre o Front-End e o Back-End.
- **React e Vite**: Trabalhei com a criação de uma interface dinâmica e otimizada para uma melhor experiência do usuário.
- **Tailwind CSS**: Utilizei o framework para estilizar o layout de maneira rápida e flexível.

## 💻 Links

- **GitHub**: [https://github.com/kaynanfujiro]
- **Portfólio**: [https://portifolio-theta-black.vercel.app]

## 🛠 Passo a Passo para Rodar o Projeto

### Pré-requisitos

- Node.js (recomendado versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git (para clonar o repositório)

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/kaynanfujiro/AnimeDex---Typescript.git


Desenvolvido por Kaynan Santos.