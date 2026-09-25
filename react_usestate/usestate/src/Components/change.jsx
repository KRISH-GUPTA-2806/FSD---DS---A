import React, { useState } from 'react'

const Change = () => {
  
    
    const[rcount,setRcount]=useState(300);
    function rplus(){
        setRcount(rcount+50);
    }
    function rminus(){
        setRcount(rcount-50);
    }

    const[ccount,setCcount]=useState(300);
    function cplus(){
        setCcount(ccount+50);
    }
    function cminus(){
        setCcount(ccount-50);
    }
  
  
    return (
    <div style={{display:'flex'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'30px',  backgroundColor:'lightblue',  margin:'auto', padding:'50px'}}>
            <img src="https://imgs.search.brave.com/7JRA2igZKFq_Y2ppQHPVOW12dgHC3cDcmtLkRECCov8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE5LzY0LzAwLzA3/LzM2MF9GXzE5NjQw/MDA3ODJfNG5iRmhT/WXhZTUxORzF0RVp3/ZVB3NW9lNzV2bUVN/eFouanBn" width={rcount} height={ccount}/>
        
            <button onClick={rplus}>row +</button>
            <span>{rcount}</span>
            <button onClick={rminus}>row -</button>

            
            <button onClick={cplus}>col +</button>
            <span>{ccount}</span>
            <button onClick={cminus}>col -</button>
        </div>





    </div>
  )
}

export default Change