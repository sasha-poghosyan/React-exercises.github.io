import React, { useState } from "react";
import './usstate.css';



// function App(){
//     return(
//         <div className="div3">
//             Barev Dzez
//             <button onClick={(eve)=>{
//                 alert('barev dzez')
//             }}>play on my</button>
//         </div>
//     )
// }
// export default App;





// function App(){
//     const arr = useState("");
//     const value = arr[0];
//     const setValue = arr[1]

// return(
//     <div className="div4">
//         <h1>{value}</h1>
//         <input type='text' value={value} onChange={(e)=>{
//             setValue(e.target.value)
//         }}/>

//     </div>
// )
// }
// export default App








// const Count =()=>{
//     const [count ,setCount]=useState(0);
//     return(
//         <>
//         <div>{count}</div>
//         <button onClick={()=>setCount((avel)=>avel+2)}>pley on my</button>
//         </>
//     )
// }
// export default Count









// const Hashiv = ()=>{
//     const [inc,setInc]=useState(0)
//     return(
//         <div>
//             <h1>{inc}</h1>
//             <button onClick={()=>setInc((e)=>e+1)}>play</button>
//             <button onClick={()=>setInc((x)=>x-1)}>play</button>
//             <button onClick={()=>setInc(0)}>play on my</button>
//         </div>
//     )
// }
// export default Hashiv







// export default function A(){
//     const [count,setCount]=useState(false)
//     return(
//         <div>
//             {count ? <div>barev</div>:null}
//             {count && <div>barev</div>}
//             <button onClick={()=>setCount((z)=>!z)}>play</button>

//         </div>
//     )
// }




// naxnakan 5 clicki jamanak prompt e bacum grac tivn angam e anum 5-ov





// export default function A(){
//     const [count,setCount]=useState({login:'',password:''})
//     const chang = (e)=>{
//         const {name,value}=e.target
//         setCount((a)=>{
//             return {...a,[name]:value}
//         })
//         console.log(value);
//     }

// function Submit(e){
//     e.preventDefault();
//     alert(`${count.login} ${count.password}`)
// }

// return(
//     <div>
//         <form>
//             <input name="login" value={count.login} onChange={chang} placeholder="login"/>
//             <br/>
//             <input name="password" value={count.password} onChange={chang} placeholder='password' />
//             <button onClick={Submit}>play</button>

//         </form>
//     </div>
// )

// }



// export default function Div(){
//   const [color,setColor]=useState(true)
//     return(
//         <>
//          {/* {color?<div className="box"></div>:<div className="box1"></div>} */}
//          <div className={color?'box':'box1'}></div>
//          <button onClick={()=>setColor((e)=>!e)}>play</button>
//         </>


//     )

// }



// export default function App(){
//     const [value,setValue]=useState('Barev')
//     return(
//         <div>
//             <input value={value} onChange={(e)=>console.log(e.target.value)}/>

//         </div>
//     )

//     }



// export default function App() {
//     const [value, setValue] = useState('barev')
//     return (
//         <div>
//             <p>{value}</p>
//             <input value={value} onChange={(e)=>setValue(e.target.value)}/>
//         </div>

//     )
// }





// export default function List2(){
//     const arr = ['']
//     const [change,setChange]=useState(arr)
//     const hendeChange = (i)=>(e)=>{
//         const {value}=e.target
//         setChange((state)=>{
//             let list = state.slice()
//             if(list[i+1]===undefined) list.push('')
//             if(value.length===0){
//                 list.splice(i,1)
//             }
//             else list.splice(i,1,value)
//             return list
//         })
//     }
//     const MyMap = change.map((e,i)=>{
//         return <li key={i}><input value={e} onChange={hendeChange(i)}/></li>

//     })
//     console.log(MyMap);
//     return(
//         <div>
//             <ol>
//                 {MyMap}
//             </ol>
//         </div>
//     )
// }







// export default function AAA(){
//   
//     const [chang,setChange]=useState([''])
//     const hendlChange=(i)=>(e)=>{
//     const {value}=e.target
//     setChange((state)=>{
//         let input = state.slice()
//         if(input[i+1]===undefined)input.push('')
//         if(value.length===0){
//             input.splice(i,1)

//         }else input.splice(i,1,value)
//         return input
//     })
//     }
//     let MyMap= chang.map((e,i)=>{  
//          return <li key={i}><input value={e} onChange={hendlChange(i)}/></li>

//     })
//     console.log(MyMap);
//     return(
//         <div>
//             <ol>
//                 {MyMap}
//             </ol>
//         </div>
//     )
// }




// export default function A() {
//     const [count, setCount] = useState([])
//     const add = () => {
//         const newItem = prompt("dreq dzer anunn")
//         setCount((prevState) => {
//             const arr = [...prevState, newItem]
//             return arr
//         })
//     }
//     const remove = (i) => {
//         setCount((a) => {
//             const remItem = a.slice()
//             remItem.splice(i, 1)
//             return remItem
//         })
//     }
//     const update = (i) => {
//         const q = prompt('poxeq dzer anunn')
//         setCount((a) => {
//             const item = a.slice()
//             item.splice(i, 1, q)
//             return item
//         })
//     }
//     return (
//         <>
//             <button onClick={add}>add</button>
//             {count.map((e, i) => {
//                 return (
//                     <>
//                         <div key={e.i}>{e}</div>
//                         <button onClick={() => remove(i)}>delate</button>
//                         <button onClick={() => update(i)}>update</button>
//                     </>
//                 )
//             })}
//         </>
//     )
// }




// export default function S(){
//     const z =[
//         {id:5,frstName:'Aram',lastName:'Aramyan',age:32},
//         {id:6,frstName:'Anna',lastName:'Petrosyan',age:24},
//         {id:7,frstName:'Ani',lastName:'Xachatryan',age:20},
//         {id:8,frstName:'Karen',lastName:'Karapetyan',age:31}
//     ];
//     return(
//         <div>
//             <div>
//                 {z[1].frstName} {z[1].lastName}
//                 <p>{z[].age}</p>
//             </div>
//             <di>
//                 {z[3].frstName} {z[3].lastName}
//                 <p>{z[3].age}</p>
//             </di>
//         </div>
//     )
// 



// const el = z.map((e)=>{
//     return(
//         <div>
//             <h1>{e.frstName} {e.lastName}</h1>
//             <p>{e.age}</p>
//         </div>
//     )
// })
// return(
//     <div>
//         {el}
//     </div>
// )



// return(
//     <div>
//         {z.map((e)=>{
//             return(
//                 <div key={e.id}>
//                     <h1>{e.frstName} {e.lastName}</h1>
//                     <p>{e.age}</p>
//                 </div>
//             )
//         })}
//     </div>
// )


// }






