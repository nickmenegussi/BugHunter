# BugHunter

Este projeto simula a rotina de um(a) desenvolvedor(a) em um formato de app ou mini jogo. O objetivo é apresentar de forma divertida os desafios e escolhas diárias de um profissional de tecnologia, como tarefas de programação, bugs inesperados, decisões que afetam energia e foco, entregas com prazo e feedbacks de desempenho. Entretanto, o foco deste ano está voltado para desenvolver um aplicativo mais importante e esse simulador da vida dev ficou bem mais simples do que está descrito aqui.

## Description

O Simulador de Vida Dev é um jogo interativo que simula o cotidiano de um(a) desenvolvedor(a). O jogador assume o papel de um desenvolvedor, enfrentando desafios diários como tarefas de programação, bugs inesperados e decisões que afetam sua energia e foco. Além disso, o jogo inclui um sistema de xp que altera nível do usuário para que ele possa ver o seu progresso também ele tem um limite de consumo de café. Se ele tomar muito café, o jogo acaba. Com efeito, o usuário perde o jogo quando ele zera a sua energia/foco e/ou chegar ao limite do café.

O jogador possui experiências e, conforme elas, as dificuldades aumentam. Além disso, a cada vez que ele perde o jogo salva o resultado do jogo dele.

## Getting Started

### Dependencies

* 1. Clonar o repositório
   ```
  git clone https://github.com/nickmenegussi/BugHunter
```
````
* 2. Instalar dependências
Após clonar o repositório, navegue até a pasta do projeto e execute o comando para instalar as dependências do Node.js:
```
npm install
```
* 3. Criar o arquivo .env para o Backend
Na pasta do backend do projeto, crie um arquivo chamado .env. Esse arquivo é onde você armazenará variáveis de ambiente, como a chave secreta para a autenticação JWT. Pois, isso é necessário para o funcionamento do login e cadastro, permitindo a criação e verificação de tokens JWT.
```
JWT_SECRET="Alguma senha secreta"
```
