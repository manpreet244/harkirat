import { useState ,useMemo} from "react";



function App() {
  
  return <div>
    <div style ={{dispaly:"flex"}}>
    
    </div>
  
  
  </div>
}
































function Todo({id}) {
  const [todo, setTodo] = useState([]);
   const [inputValue , setInputValue] = useState(1);

let count = useMemo(()=>{
  console.log("usememo");
  let finalCount =0;
  for(let i =1;i<=inputValue;i++){
    finalCount= i+finalCount;
    console.log("hii")
  }
  return finalCount;
},[inputValue]);

  return <div>  <h1>
      {todo.title}
      
    </h1>
    <h4>
      {todo.description}
    </h4>
     <input onChange ={function(e){
      setInputValue(e.target.value);
    }}/> 
    <br/>
    Sum from 1 to {inputValue} is {count};
  </div>
}

export default App;
