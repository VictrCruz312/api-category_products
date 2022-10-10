# Category and Products

### Para ter acesso a nossa API na sua maquina siga os passos abaixo:


# Requisitos:

<ul>
  <li>yarn ou npm</li>
  <li>nodeJS 14+</li>
</ul>

```javascript
//faça clone do projeto
git clone https://github.com/Kenzie-Academy-Brasil-Developers/entrega_m4_sp4-victrcruz312.git

//execute:
yarn install

//ou

npm install

//execute um teste para verificar as rotas (opcional)
yarn test

//ou

npm run test

//rode a API localmente com:
yarn start   /   yarn dev

//ou

npm start   /   yarn dev
```

### variaveis de ambiente: consulte o arquivo .env.exemple

# Faça build e crie uma imagem com docker e docker-compose

## Requisitos:

<ul>
  <li>docker version 20.10.18</li>
  <li>Docker Compose version v2.11.2</li>
</ul>

```javascript
//execute:

docker-compose up --build

//para criar a imagem e rodar o container da API e container do db

//assim que aparecer essas mensagens no seu terminal:
category_products  | Server running
category_products  | database connected
//sua api e o db estará online
```
# Acesse a documentação da API [neste link](https://github.com/VictrCruz312/api-category_products/wiki)
## A rota padrão para realizar qualquer requisição na API online localmente é:
### localhost:3000/
