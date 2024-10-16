import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './App.jsx';
import './App.scss';  // 必要に応じてスタイルを追加

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);

