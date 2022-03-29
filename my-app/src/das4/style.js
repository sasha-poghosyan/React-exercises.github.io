import React from "react";
import '../das4/style.css';
import PropTypes, { func } from "prop-types";
import X from "./componentx/componentx";
import D from "./componentx/componentx";
import '../das4/componentx/componentx.css';


// export default function A(){
//     return <>{'hello'}</>
// }


// export default function Welcome(){
//     return <div>Welcome</div>
// }






// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>
// }

// export default function App(){
//     let a = 'ZZZ'
//     return(
//         <div>
//             <Welcome name = 'Valod'/>
//             <Welcome name = {'Sara'} />
//             <Welcome name = {1} />
//             <Welcome name = {a} />
//         </div>
//     )
// }








// function Welcome({name,x}){
//     return <h1>Hello,{name} {x} </h1>
// }
// export default function App(){
//     let x = 'AAA'
//     return(
//         <div>
// <Welcome name='Hayko'/>
// <Welcome name={'Karen'} />
// <Welcome name={1} />
// <Welcome {...{x}} />
// <Welcome name= 'Armen' x = 'Karapetyan'/>
//         </div>


//     )
// }



// class Welcome extends React.Component{
//     render(){
//         return(
//             <h1>Hello, {this.props.name}</h1>
//         )
//     }  
// }


// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>
// }

// Welcome.propTypes = {
//     name: PropTypes.string
// };


// export default function App(){
//     return <div>

//         <Welcome name={21}/>
//         <Welcome name='kkkk'/>
//         <Welcome name='ddiv'/>

// </div>

// };



// export default function App(){
//     return (
//         <X/>
//     )
// }






// class Myname extends React.Component{
//     render(){
//         return(
//             <h1>Hello, {this.props.name}</h1>
//         )
//     }
// }
// export default class MyComponent extends React.Component{
//     render(){
//         return(
//             <>
//             <Myname name='aaa'/>
//             <Myname name={2}/>
//             </>
//         )
//     }
// }











// function Sa(props){
//     const {x}=props
//     return(
//         x.map((e,i)=>{
//             return <div key={i}> {e.pashton} {e.anun}</div>
//         })
//     )
// }
// export default function AAA(){

//     let arr = [{pashton:'President',anun:'Aram'}]
//     return(
//      <Sa x={arr}/>
//     )

// }



export default function App() {
    return (
        <D />
    )
}







