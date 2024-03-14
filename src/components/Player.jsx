import { useState } from "react";
import { useRef } from "react";
export default function Player() {
  const playerName=useRef();
  let [entity,setEntity]=useState(); 
 
  function handleSubmit(){
    setEntity(playerName.current.value);
    playerName.current.value='';
  }
  return (

    <section id="player">
      <h2>Welcome {entity ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
