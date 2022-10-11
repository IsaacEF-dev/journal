import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// import { CallBackHook } from './04-Memorize/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { MemoHook } from './04-Memorize/MemoHook';
// import { BreakinBadQuotes } from './03-BreakingBadQuotes/BreakinBadQuotes';
// import { Memorize } from './04-Memorize/Memorize';
// import {HooksApp} from './HooksApp'
// import {CounterApp} from './CounterApp'
// import {CounterWithCustomHook} from "./CounterWithCustomHook"
// import{SimpleForm} from "./02-useEffect/SimpleForm"
// import  {SimpleFormCustomHook}  from './02-useEffect/SimpleFormWithCustomHook';
// import "./08-userReduce/intro-reducer"
import { TodoApp } from './todoPractique/TodoApp';

import { MainApp } from './09-useContext/MainApp';

import "./style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp/>
    </React.StrictMode>
  </BrowserRouter>
)
