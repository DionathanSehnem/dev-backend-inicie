# dev-backend-inicie

Este projeto foi desenvolvido usando Javascript, Axios, Docker e Github Actions.

## Configuração Inicial

Para baixar o container do projeto, acesse a área de [packages](https://github.com/DionathanSehnem/dev-backend-inicie/pkgs/container/dev-backend-inicie) deste respositorio, e siga as instruções para baixar.

## Executando o container

Para executar o container você irá usar o seguinte código no terminal: 

```bash
docker run -e TOKEN={SEU TOKEN DO GoRest} -it {IMAGE ID}
```
Um exemplo abaixo de como ficaria o comando:

```bash
docker run -e TOKEN=1234 -it 1234
```
Clique aqui caso precise ir ao [GoRest](https://gorest.co.in/)

## Executando a aplicação


Para executar a aplicação normalmente:
```bash
npm start
```
Para executar os testes da aplicação:
```bash
npm test
```

### Observações

Foi utilizado o Github Actions, para que quando houver um novo commit no respositorio, ele automaticante crie um novo container Docker com as novas modificações do código.
