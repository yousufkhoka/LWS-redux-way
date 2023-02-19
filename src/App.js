import { useState } from "react";
import Counter from "./components/Counter/Counter";


function App() {
  const [counters , setCounters] = useState([
   {id:1 , value:0},
   {id:2, value:0}
  ])

 const totalCounters = counters.reduce((total, counter) => total + counter.value,0)

  const increment =(id) => {
  
      const updatedCounter =  counters.map(c => {
        if(c.id === id){
          return{
            ...c ,
            value: c.value + 1
  
          }
    
        }
      return{...c}


      })
      setCounters(updatedCounter)
    
}
const decrement =(id) => {
  
  const updatedCounter =  counters.map(c => {
    if(c.id === id){
      return{
        ...c ,
        value: c.value - 1

      }

    }
  return{...c}


  })
  setCounters(updatedCounter)

}
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
  
    <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
      Simple Counter Application
    </h1>

    
    <div className="max-w-md mx-auto mt-10 space-y-5">
     {
      counters.map((counter) =><Counter key={counter.id} decrement={decrement} increment={increment} counter={counter}/>)
     }

      
    </div>
    <div className="text-2xl font-semibold" > total: { totalCounters}</div>
  </div>
  ) 
}
    

export default App;
