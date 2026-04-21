import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState();
  const[chips,setChips]=useState([])
  const handleKeyDown = (e) => {
    
    if(e.key === "Enter" && inputText.trim() !== ""){
setChips((prev)=>[...prev,inputText])
setInputText("")
    }
    
  };

  const handleDel=(index)=>{
    const copyChips=[...chips];
    copyChips.splice(index,1)
    setChips(copyChips)
  }
  return (
    <div className="container">
      <h1>Chips/Tag Input</h1>
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      <br />
      

      <div className="chipContainer">
         {chips.map((chip,index)=>{
        return(
          
            <span key={index} className="chip">

            {chip} <span onClick={()=>handleDel(index)} className="del">❌</span>
          </span>
         
        )
      })}
      </div>
     
    </div>
  );
}

export default App;
