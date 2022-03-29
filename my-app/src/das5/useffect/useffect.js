import { useEffect, useRef, useState } from 'react'
import './useffect.css'

// export default function A(){
//     const [title,setTitle]=useState('')
//  useEffect(()=>{
//      document.title = title;

//  },[title]);

//     return(
// <div>
//     <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
// </div>
//     )
// }




// const Mycomponent2 =()=>{
// const [count,setCount]=useState(0)

// return(
//     <div>
//     <div>{count}</div>
//     <button onClick={()=>setCount((a)=>a+1)}>+</button>
//     <button onClick={()=>setCount((a)=>a-1)}>-</button>
//     <Mycomponent val = {count}/>
//     </div>
// )
// }
// export default Mycomponent2
//     const Mycomponent =({val})=>{
//         useEffect(()=>{console.log(val)})
    
//     return(
//         <div>Mycomponent</div>
//         )
//     }
        

// const Effect=()=>{
//     const [point,setPoint]=useState(0)
//     const [point1,setPoint1]=useState(0)
    
 
//     return(
//         <div>
//             <div>{point}</div>
//             <div>{point1}</div>
          
//              <button onClick={()=>setPoint((z)=>z+1)}>+</button>
//              <button onClick={()=>setPoint1((z)=>z-1)}>-</button>
//              <Set value = {point} val = {point1}  />
            
             
            
//         </div>
//     )
   
// }    
// export default Effect

// const Set=({value})=>{ 
//     useEffect(()=>{console.log(value)},[value]);
//     return(
//         <div>Set</div>
//     ) 
// }



const Effect=()=>{
    const [point,setPoint]=useState(0)
    const [point1,setPoint1]=useState(0)
    
 
    return(
        <div>
            <div>{point}</div>
            <div>{point1}</div>
          
             <button onClick={()=>setPoint((z)=>z+1)}>+</button>
             <button onClick={()=>setPoint1((z)=>z-1)}>-</button>
             <Set value = {point} val = {point1}  />
            
             
            
        </div>
    )
   
}    
export default Effect

const Set=({value,val})=>{ 
    useEffect(()=>{console.log(value)},[val]);
    return(
        <div>Set</div>
    ) 
}

