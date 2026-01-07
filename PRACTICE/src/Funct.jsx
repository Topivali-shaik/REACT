function Welcome(){
    return <h1>Welcome call</h1>
}

export default Welcome;

function App3(){
    return <h1>From App function</h1>
}

export {App3}

function App4(){
    return <h4>function App2</h4>
}
export {App4}

function Greet(props){
    return <h1>Good Morning {props.name}</h1>

}
export {Greet}