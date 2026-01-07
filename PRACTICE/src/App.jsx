// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


const Profile = () => <div>
  <h2>Name</h2>
  <h2>Age</h2>
  <h2>city</h2>
</div>




function App() {
  

  return (
    <div>
<h1>Topivali</h1>
<Profile />
</div>

  )
}

export default App

export function App2() {

    return(
      <h1>From component App2</h1>
    )
}

export const Arrow = () => <h1>This is from a Arrow Function.</h1>
