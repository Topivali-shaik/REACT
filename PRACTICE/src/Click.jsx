function Click(){
    alert("Button Clicked");
}

export function Call(){
    return <button onClick={Click}>Click button</button>
}

export default Click;

export function Greet2(){
    alert("Hello Sir I am Jarvis")
}

export function Click2(){
    return <button onClick={(Greet2)}>Hay Jarvis</button>
}

export function Jarvis(name){
    alert("Hello" + name );
}

export function Click3(){
    return<button onClick={() => Jarvis("Topi")}>Hello Jarvis</button>
}