import express from 'express';
import ReactDOM from 'react-dom/server';
import React from 'react';
import App from '../client/App';

const app = express();
const rootComponent = React.createElement(App);

app.use('/static', express.static('./dist'));

app.get('/', (req, res) => {
  res.send(ReactDOM.renderToString(rootComponent))
});

app.listen(3000);
