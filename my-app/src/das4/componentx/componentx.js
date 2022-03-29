// export default function X(){
//     return <h1>Hello</h1>
// }

import React from "react"
import AAA from "./inputcomponent/inputcomponent"

export default function D() {
    let s = {}
    let change = ((e) => {
        const { value } = e.target
        s = { s, value }

    })

    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            let inputs = e.target.querySelectorAll("input");
            for (let i in inputs) {
                inputs[i].value = "";     
            }      
        }}>

          <div className="d">

              <AAA type='text'
                    onChange={change}
                    value={s.text}
                    name="inp" placeholder="email"/>
                <AAA type='text'
                    name="inp1"
                    onChange={change}
                    value={s.text}
                    placeholder="password"/>
                <AAA type='text'
                    name="inp2"
                    onChange={change}
                    value={s.text}
                    placeholder="file"/>
                <AAA type='text'
                    name="inp3"
                    onChange={change}
                    value={s.text}
                    placeholder="number"/>
             
                <button>onClick</button>
            </div>
        </form>

    )
}