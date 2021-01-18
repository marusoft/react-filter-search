import React, { useState } from "react";
import Records from "./Records";
import "./style.css";

export default function App() {
  let [searchInput, setSearchInput] = useState('')
  return (
    <div className="App">
      <h1>Filter Search!</h1>
      <input 
      type="text" 
      placeholder="Search user record"
      onChange={event => {setSearchInput(event.target.value)}} />
      {Records.filter((record)=> {
        if(searchInput == ""){
          return record;
        }
        else if(record.FirstName.toLowerCase().includes(searchInput.toLowerCase())){
          return record;
        }
      }).map((record, key) => {
        return <div className="record" key={key}>{record.FirstName}</div>
      })}
    </div>
  );
}
