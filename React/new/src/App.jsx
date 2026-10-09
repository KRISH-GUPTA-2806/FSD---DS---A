import React, { useState } from 'react'

const App = () => {
  const images =["https://imgs.search.brave.com/altHUhh1y7dvZutyRk9Hx0pVYzDqYjLy7XK06x-QQRw/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmxpcHN5LmNvbS9j/bGlwcy9ydDc2WE1a/Yi90aHVtYm5haWwu/d2VicA"
    , "https://imgs.search.brave.com/oQ4Kc1wZ0T_1LSnO-_IZ1I4j9VB47V86BiZhvGrmTxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/bWVtZXMuY28uaW4v/bWVkaWEvbWVtZXN2/aWRlby90aHVtYm5h/aWwvdGh1bWJuYWls/X0hNVE16eGoucG5n"
    , "https://imgs.search.brave.com/By2oG-aXwDu4qzT3mR8whUrihf_ke-j1xZzYarJv6bQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzgxLzk1LzAz/LzM2MF9GXzE2ODE5/NTAzMDlfc3dUdXJv/V3FIdzRxeG1reHBW/aHlKMTJzMk1iNndp/NWIuanBn"
  ]

  const left = () => {
    setIndex((index-1+images.length)%images.length)
    console.log("left")
  }

  const right = () => {
    setIndex((index+1+images.length)%images.length)
    console.log("right")

    
  }

  const[index,setIndex]=useState(0);

  return (
    <div>
      <h1>Image Slider</h1>
      <img src={images[index]}></img> <br/>
      <button onClick={left}>LEFT</button>
      <button onClick={right}>RIGHT</button>

    </div>
  )
}

export default App