Grupo:
Carolina Vasconcelos
Eduardo Rezende
Isadora Vasconcelos
João Antonio 
João Carlos
Liubliana Stolz
Lucca Borborema
Vinícius Lima
Vinícius Nunes
Vinícius Tavares



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Evento

Este código Python é uma aplicação que auxilia na organização e gestão financeira de um evento.

## Classe Evento

A classe `Evento` possui métodos que realizam os seguintes cálculos:

- `receita(self, custo_festa,  margem_lucro)`: calcula a receita necessária para a festa considerando a margem de lucro desejada.
- `imposto_total(self, custo)`: calcula o total de impostos que serão aplicados sobre um determinado custo.
- `ingressos(self, quantidade_pessoas, receita)`: determina o valor do ingresso considerando a receita necessária e a quantidade de pessoas esperadas.
- `custo(self, quantidade_pessoas, atracao)`: calcula o custo total do evento, considerando a quantidade de pessoas, o custo dos bombeiros, da polícia, o aluguel do local e o custo da atração principal.
- `calcular_impostos(self, receita_total)`: calcula os valores individuais de cada imposto aplicado sobre a receita total do evento.
- `calcular_receita_liquida(self, receita_total)`: calcula a receita líquida após a dedução dos impostos ISS, ICMS, COFINS e PIS.

## Exemplo de Uso

O script abaixo da classe `Evento` cria um novo evento, define o custo da atração e a quantidade de pessoas esperadas. Em seguida, calcula o custo total da festa, a receita necessária, o valor do ingresso, os impostos a serem pagos e a receita líquida do evento. Os resultados são exibidos no terminal.

```python
# Crie um novo evento
meu_evento = Evento()

# Cálculo de custos
quantidade_pessoas = 2000
custo_atracao = 10000  # Custo da atração (música, palestra, etc.)
...
# Cálculo da receita líquida
meu_evento.calcular_receita_liquida(receita)
```
