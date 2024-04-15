import { useState } from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import NoteState from './context/notes/NoteState'
import './App.css'
import About from './About';
import { countAtom } from './store/count';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1>hiiii</h1>
     <RecoilRoot>
     <CountRenderer/>
     </RecoilRoot>
    {/* <NoteState>
      <About></About>
    </NoteState> */}
   
      {/* <Count count={count}/>
      <Buttons  count={count} setCount ={setCount}/> */}
    </>
  )
}
// function Count({count}){
// return <>
//   {count}
// </>
// }
// function Buttons({count , setCount}){
//   return <div>
//   <button onClick={()=>{
//    setCount(count+1)
//   }}>Increment</button>
//   <button onClick={()=>{
//  setCount(count-1)
// }}>Decrement</button>
//   </div>

// }
//USING RECOIL---
function CountRenderer(){
  const [count , setCount ] = useRecoilState(countAtom);
  return <div>
   {count}
  </div>
}
export default App
