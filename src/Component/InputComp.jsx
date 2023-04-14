import React from 'react'
import { useDispatch , useSelector} from 'react-redux'

const InputComp = () => {
    
    const increment=()=>{
       return{

        type:"increment"
       }
    }
    const decrement=()=>{
      return{

        type:"decrement"
       }
    }

    const reset=()=>{
      return{

        type:"reset"
       }
    }
    const count=useSelector((StoreData)=>{
      return StoreData
    })
    const dispatch=useDispatch();
  return (
    <>
   
   <div className='inputcount1'>
    <h2>Counter App With Redux</h2>
    </div>
    <div className='inputcount'> 
    
    <h1>{count}</h1></div>
    
     <div className='inputcount'>
     
        <button onClick={()=>dispatch(increment())} >Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div></>
    
  )
}

export default InputComp