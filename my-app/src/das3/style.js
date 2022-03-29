import React, { createElement, useDebugValue } from "react";
import './style.css'


//function App(){
// const x = createElement('div',{},'Barev barev');
// const y = createElement('div',{},'Hajox');
// const z = createElement('div',{},'Bari or')

// return React.createElement('div',{},[x,y,z])




//     return(
//         <div>
//             <div className="a">Barev barev</div>
//             <div>Hajox</div>
//             <div>Bari or</div>
//         </div>
//     )
// }
// export default App;






// export default function onClick(){
//     return <button onClick={()=> alert('Hello World')}>play on</button>
// }







// export default function onClick() {
//     const Click = () => alert('Hello World')
//     return (
//         <div>
//             <button onClick={Click}>play</button>
//         </div>
//     )
// }







// export default function A(){
//     return(
//         <div>
//             <button onDoubleClick={()=>alert('hello world')}>onDoubleClick</button>
//         </div>
//     )
// }








// export default function OnChange(){
//     const change = (e)=>{
//         alert(`you choes ${e.target.value}`)
//     }
//     return(

//         <form>
//             <input type='checkbox'
//              onChange={change}
//              value = 'Bike'>  
//             </input>
//             <label>
//                 I have Bike
//             </label>
//             <br/>
//             <input type='checkbox' onChange={change} value ='car'></input>
//             <label>
//                 I have car
//             </label>
//             <br/>
//             <input type='checkbox'
//             onChange={change}
//             value = 'track'></input>
//             <label>
//                 i have track
//             </label>
//         </form>
//     )
// }











// export default function Reg(){
//     let formData = {}
//     let change = (e)=>{
//         const {value,name} = e.target;
//         formData = {...formData,[name]:value}
//         console.log(value);
//     }


//     return(
//         <form 
//         onSubmit={(e)=>{
//          e.preventDefault();
//          alert(`${formData.lastName} ${formData.fname}`)   
//         }}
//         >
//             <label>lastName</label>
//             <input type='text' onChange={change}
//             name = 'lastName'
//             value={formData.lastName}></input>
//             <br/>
//             <label>fname</label>
//             <input type='text'
//             onChange={change}
//             name = 'fname'
//             value={formData.fname}
//             ></input>
//             <button>Click</button>
//         </form>
//     )
// }









// export default function S() {
//     let x = false
//     return (
//         <div>
//             <div className={x ? 'a' : 'b'}></div>
//         </div>
//     )
// }


export default function Ch() {
   
let foo = {}
let change = ((e)=>{
    const {value,name}= e.target
foo ={...foo,[name]:value}
console.log(value);
    
})

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
           
            return(
                document.write(`Hello ${foo.eladress}`)
            )
        
        }}>
           
<input type='email'
name = 'eladress'
onChange = {change}
value = {foo.eladress}
></input>
<label>This is my email</label>
<br/>
<input type='password'
name="pass"
value={foo.pass}
onChange={change}
></input>
<label>This is my passworld</label>
<br/>
<input type='number'
name="num"
value={foo.num}
onChange = {change}
></input>
<label>This my number</label>
<br/>
<input type='text'
name="tx"
value={foo.tx}
onChange = {change}
></input>
<label>This is my name</label>
<br/>
<button>Click</button>
        </form>
    )
} 
