import React, { useState } from "react";
import {connect} from 'react-redux'


const Counter = () =>{
const [count, setCount] = useState(0);
   return (
     <div className="counter">
       <h2>Counter</h2>
       <div>
         <button onClick={() =>setCount(count - 1)}>-</button>
         <span className="count">{count}</span>
         <button onClick={() =>setCount(count + 1)}>+</button>
       </div>
     </div>
   );
 }

 const mapStateToProps = (state) => {
     return{
         count:state.count
     }
 }

export default connect(mapStateToProps)(Counter);