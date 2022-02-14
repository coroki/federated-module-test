import React from 'react';
import ReactDOM from 'react-dom';
import { Shell } from './shell/shell.component';
import { hot } from 'react-hot-loader/root';

const App = hot(Shell);

ReactDOM.render(<App />, document.getElementById('root'));