import CardComponet from "./card.component";
import { useState } from "react";

export default function PropertiesCompoment()
{
    const[product] = useState ([
        {Name: 'JBL', Price: 400, Photo: 'logo512.png'}, 
        {Name: 'Lg', Price: 400, Photo: 'logo512.png'}
    ])
    return(
        <div className="container-fluid">
            <h2>Product Catelog</h2>
            <div className="d-flex flex-wrap">
                {
                    product.map(product =>
                        <CardComponet Name={product.Name} Price={product.Price} Photo={product.Photo}/>    
                    )
                }
            </div>
        </div>
    )
}