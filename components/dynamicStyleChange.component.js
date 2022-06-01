import { useState } from "react";

export default function DyanamicStyleComponent(){
    const [backcolor, setbackcolor] = useState('');
    const [color, setcolor] = useState('');
    const [align, setalign] = useState('')

    function handlebackcolor(event){
        setbackcolor(event.target.value)
    }
    function handlecolor(event){
        setcolor(event.target.value)
    }
    function handlealign(event){
        setalign(event.target.value)
    }

    return(
        <div>
            <div>
                <h1>background</h1>
                <select onChange={handlebackcolor}>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="black">black</option>
                </select>
            </div>
            <div>
                <h1>text color</h1>
                <select onChange={handlecolor}>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="black">black</option>
                </select>
            </div>
            <div>
                <input onChange={handlealign} type="radio" name="align" value="left"></input> left
                <input onChange={handlealign} type="radio" name="align" value="center"></input> center
                <input onChange={handlealign} type="radio" name="align" value="right"></input> right
            </div>
            <h1 style={{backgroundColor: backcolor, color: color, textAlign: align}}>welcome to react</h1>
        </div>
    )
}