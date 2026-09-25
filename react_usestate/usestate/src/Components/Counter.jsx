import React, {useState} from 'react'

const Counter = () => {
  
    const[count,setCount] = useState(0);
    function increment(){
        if (count>=0 && count<=10){
        setCount(count+1);
        }
        else{
            alert("limit exceeded");
        }
    }
    function decrement(){
        if (count>=0 && count<=10){
        setCount(count-1);
        }
        else{
            alert("limit exceeded");
        }
    }
  
    return (
    <div>
       <h3 style={{textAlign:'center', padding:'30px', backgroundColor:'lightblue'}}>Counter App</h3>
       <br/>
       <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'50vh', backgroundColor:'lightgrey'}}>
       <button onClick={decrement} style={{padding:'10px',margin:'30px'}}>-</button>
       <span style={{fontSize:'400%'}}>{count}</span>
       <button onClick={increment} style={{padding:'10px',margin:'30px'}}>+</button> 
       </div>
    </div>
    



  )
}

export default Counter