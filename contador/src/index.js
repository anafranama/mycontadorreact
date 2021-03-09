import React from 'react';
import ReactDOM from 'react-dom';
import { Contador1 } from './App.js'
import './App.css'


let segundos = 0;
let minutosUnidades = 0;
let minutosDecenas=0;
let horaUnidad=0;
let horaDecena=0;
function Reloj() {
  segundos++
  let segundosString=segundos.toString()
  let unidades=segundosString[segundosString.length-1]
  let decenas=0;
  if (segundos>9){
    decenas = segundosString[segundosString.length - 2];
  
  if (segundos==60){decenas=0};
  
  }
  

if (segundos>59&&minutosUnidades==9){
  minutosDecenas++
  if (minutosDecenas==6){minutosDecenas=0
  
    horaUnidad++
    if (horaUnidad==10){horaUnidad=0
    
      horaDecena++
      
      if(horaDecena==10){segundos=0
      decenas=0
    minutosDecenas=0
  minutosUnidades=0
horaUnidad=0
horaDecena=0}


    }
  
  
  
  
  }
}




  if (segundos > 59) {
    if (minutosUnidades<=9){
      
      
      minutosUnidades++

      if (minutosUnidades==10){minutosUnidades=0}

    segundos = 0;
    }else{minutosUnidades=0}
    
  }







  return (
    <div className="string1">
      <div></div>
      
      
      <Contador1 value={horaDecena}/>
      <Contador1 value={horaUnidad}/>
      <Contador1 value={minutosDecenas}/>
      <Contador1 value={minutosUnidades}/>
      <Contador1 value={decenas}/>
      <Contador1 value={unidades} />
    </div>
  );


}
setInterval(function () {
  ReactDOM.render(
    <Reloj />,

    document.getElementById("root")
  );
}, 1000

)