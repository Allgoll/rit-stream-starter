import express from 'express';
import ReactDOM from 'react-dom/server';
import React from 'react';
import App from '../client';

const app = express();
const rootComponent = React.createElement(App);

app.get('/', (req, res) => {
  res.send(ReactDOM.renderToString(rootComponent))
});

app.listen(3000);
