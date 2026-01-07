import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App, { App2,Arrow } from './App.jsx'
import Comp from './Comp.jsx'
import Sum, {Sub , Mul} from './Sum.jsx'
import Welcome,{App3,App4,Greet} from './Funct.jsx'
import Click,{Call,Click2,Click3} from './Click.jsx'
import State from './State.jsx'
import Toogle from './Toogle.jsx'
import Ifelse from './Ifelse.jsx'
import Wish from './Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2 />
    <Comp />
    <Arrow />
    {Sum(10,10)}
    {Sub(100,50)}
    {Mul(40,7)}
    <Welcome />
    <App3 />
    <App4/>
    <Call/>
    <br></br>
    <Click2/>
    <Click3/>
    <State/>
    <Greet name="Topivali"/>
    <Toogle/>
    <Ifelse/>
    <Wish name1="Topivali" name2="Waseem"/>
    
    
      
  </StrictMode>
)
