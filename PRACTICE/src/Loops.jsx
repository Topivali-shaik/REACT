export default function Loop(){

    const fruits = ["Apple","Mango","Banana","Grapes"]
    const users = [
  { id: 1, name: "Alex", age: 25 ,name2:"topi"},
  { id: 2, name: "Sam", age: 30, name2:"topi"},
  { id: 3, name: "John", age: 28 ,name2:"topi"}  
];
    const Cars=[{car:"Hellcat"},{car:"srt"},{car:"ferrari"},{car:"BMW"}]

    return(
        <div>
            <h1>Loop Using Map</h1>
            <ul>
                {fruits.map(item =>(<li>{item}</li>))}
            </ul>

        <table border = "1">
            <tr >
                {fruits.map(item =>(<td>{item}</td>))}
            </tr>
        </table>
        <div>

            <h1>Reuse of Components in Loops</h1>
            
            {users.map(user => (
        <UserCard
          
          name={user.name}
          age={user.age}
          name2={user.name2}
          id = {user.id}
        />
      ))}

      <h1>FAVOURITE CARS</h1>
      {Cars.map(model => (
        <Details 
        
            Car={model.car}
            />
      ))}




        </div>
</div>
    )


}

export function UserCard({name , age,name2,id}){

    return(

            <div><h2>{id}</h2>
                <h3>{name}</h3>
                 <h3>{age}</h3>
                 <h1>{name2}</h1>  
            
            
            </div>

    );


}

function Details({Car}){

    return(
        <div>
        <h3>{Car}</h3>
        </div>
    )

}