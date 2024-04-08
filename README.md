<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Introdução

Este repositório tem como objetivo servir de estudo e base para futuros desenvolvimentos em Nest.js, um framework altamente escalável e robusto.
Para poder criar e desenvolver, foi tomado como base o vídeo [Nest.js Full Course](https://www.youtube.com/watch?v=8_X0nSrzrCw).

## Instalação

```bash
$ npm install
```

## Rodando aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Estudos

O código está bem comentado explicando o que cada etapa faz e retomando assuntos de Typescript, mas também será reforçado nessa sessão alguns conceitos e novos aprendizados adquiridos durante o estudo.

## Criar projeto e CLI

Para trabalhar com Nest é uma boa instalar o CLI deles para que algumas atividades sejam facilitadas futuramente, esse CLI (command line interface) pode criar módulos, controllers, services e entre outras coisas rapidamente, assim como automatizar processos de implantação e testes.

```bash
# instalar a CLI globalmente:
$ npm install -g @nestjs/cli
```

Isso já instalará no computado a CLI para ser usada.

Para criar um projeto, devemos abrir o terminal e digitar o segundo comando, levando em conta a versão LTS do node:

```bash
# criar projeto Nest.js:
$ nest new nome-do-projeto
```

Depois disso o projeot com as pastas dentro será criada, nos permitindo criar o back-end.

## Estrutura básica do Nest.js

Após criado, podemos ver que suas pastas são organizadas em uma estrutura semelhante a outros frameworks:
![Estrutura básica](/imagens/estrutura.png)
