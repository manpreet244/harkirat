import react from "react";
import NoteContext from "./NoteContext";

const NoteState =(props)=>{
    console.log(props.children.type.name)
    return (<>
    
        <NoteContext.Provider value="hi">
         {props.children}
        
        </NoteContext.Provider>
        </>
    )
}
export default NoteState;