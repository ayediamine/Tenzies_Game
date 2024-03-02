import { useEffect, useState } from 'react';
import './App.css';
import Box from './components/Box';
import Confetti from 'react-confetti'


function App() {
   
 const [setBox,iSsetBox]=useState(makeBoxes())
 const [end,isEnd]=useState(false)

 
 useEffect(() => {
  const allStatesTrue = setBox.every(box => box.Etat === true);
  const firstValue = setBox[0].valeur
  console.log(firstValue)
  const allSameValue= setBox.every(box => box.valeur === firstValue);

  if (allStatesTrue && allSameValue) {
    isEnd(true);
  }
}, [setBox]);

 

    function makeBoxes(){
      const ArrayBox=[]
        for (let i=0;i<10;i++){
          ArrayBox.push(
           { valeur: Math.floor(Math.random()*10),
             Etat:false,
             id:i 
          }
            )
        }
        return ArrayBox
        }
  
        function toggle(id) {
          console.log(id)
          iSsetBox(oldBox => oldBox.map(box => {
              return box.id === id ? 
                  {...box, Etat: !box.Etat} :
                  box
          }))
          
      }

      console.log(setBox)
 const AllBoxes=setBox.map(box=>
     <Box  number={box.valeur} key={box.id} toggle={()=>toggle(box.id)} color={box.Etat}  />
  )
  function makeChange(){
    if (end===false)
    {iSsetBox(oldBox=>oldBox.map(box=>{
      return box.Etat===true ? box 
      : { 
        ...box,
        valeur: Math.floor(Math.random()*10),
  
     }
    }))
  }
  else {
    isEnd(false);
    iSsetBox(makeBoxes())
  }
      }

      

  return (
    <main className='InApp'>
      {end && <Confetti/>}

    <div className='title'>  Tenzies </div>
    <div className='paragraph'>Roll until all dice are the same.Click each die to freeze it at its current value between rolls.</div>
     
    <div className='BoxApp'>
             
          {AllBoxes}
         
          </div>

      <div className='button'>
      <button className="btn" onClick={makeChange} >{end ?  "Restart Game" : "Roll"}</button>
      </div>

    </main>
   );
}

export default App;
