import {useState} from "react"

export const AddCategorie=({newAddCategorie})=>{

    const [changeInput, setchangeInput] = useState("one Ponch")

    const onChangeInput=({target})=>{
        setchangeInput(target.value);
    }

    const onSumbitCategorie=(event)=>{
        event.preventDefault();
        
        if(changeInput.trim().length<1)return;
        newAddCategorie(changeInput);
        setchangeInput("");
    }

    return(
        <form onSubmit={onSumbitCategorie}>
            <input
                type={"text"}
                placeholder={"Agrega una categorias"}
                onChange={onChangeInput}
                value={changeInput}
            />
        </form>
    )
}