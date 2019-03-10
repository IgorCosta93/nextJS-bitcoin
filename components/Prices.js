import React, { useState } from "react";

function Prices({ bpi }){
  let [ currency, setCurrency ] = useState("USD");

  return(
    <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {bpi[currency].description} : 
          <span className="badge badge-primary">{bpi[currency].code}</span> 
          <strong>{bpi[currency].rate}</strong>
        </li>
        </ul>
        <br/>
        <select onChange={e =>  setCurrency(currency = e.target.value)} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
    </div>
  )
}

export default Prices;
