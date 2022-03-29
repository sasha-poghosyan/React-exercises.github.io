import { useRef, useState } from "react"
import './usref.css'

// const MyUsref=()=>{
//  const inp = useRef('')
//  const func =()=>{
//      alert(inp.current.value)
//      inp.current.value=''
//  }
//     return(
//         <div>
//             <div>
//                 {inp.current}
//             </div>
//             <input ref={inp}></input>
//             <button onClick={func}>play</button>
//         </div>
//     )
// }
// export default MyUsref


// export default function A(){
//     const element = useRef();
//     const but = ()=>{
//         element.current.className = 'x'
//     }
//     return(
//         <div>
//             <div ref={element}></div>
//             <button onClick={but}>click</button>
//         </div>
//     )
// }



// export default function A(){
// const inp =useRef()
// const Button = ()=>{
//     inp.current.focus()
// }

//     return(
//         <div>
//             <input ref={inp}/>
//             <button onClick={Button}>click on my</button>
//         </div>
//     )
// }



// export default function S(){
//     const [width,setWidth]=useState()
//     const masterRef=(e)=>{
//         if(e!==null){
//             setWidth(e.getBoundingClientRect().width)
//         }
//     }
//     return(
//         <div>
//             <h2 ref={masterRef}>width {Math.round(width)} px</h2>
//         </div>
//     )
// }



// export default function Z() {
//     const inp = useRef('')
//     const [count, setCount] = useState(true)
//     const newButon = (e) => {
//         setCount((x) => !x)
//         if (count) inp.current.focus()

//     }


//     return (
//         <div>
//             <input ref={inp} />
//             <button onClick={newButon}>click on my</button>
//         </div>
//     )
// }



