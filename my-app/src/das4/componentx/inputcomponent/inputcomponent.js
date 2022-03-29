import './imputcomponent.css'

export default function AAA({onChange,value,name,placeholder}){
    return(
        <div>
            <input type='text'
                    onChange={onChange}
                    value={value}
                    name={name} placeholder={placeholder} />
        </div>
    )
}