import React,{useState} from 'react';

function App(){
var [time,func]=useState(":)");

setInterval(Get, 1000);


function Get(){
   func (time= new Date().toLocaleTimeString('en-US', {hour12: false}))

}




return (
    <div>
        <h1>{time}</h1>
        <h6>Made by amirHosseinPooladi :)</h6>
    </div>

    

)

}

export default App;
