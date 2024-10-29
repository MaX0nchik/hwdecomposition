import { ChangeEvent, useState } from "react"

/**
 * 
 * Строка поиска с кнопкой
 */

export const Find = () => {
    const [value, setValue] = useState("");
    
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {target} = event;
        const {value} = target;

        setValue(value);
    } 

    return(
        <div className="inputtext">
            <input className="inputfind" type="text" value={value} name="tb" onChange={handleChange}/>
            <button>Найти</button>
        </div>
    )
}