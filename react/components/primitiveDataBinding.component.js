import React from "react";

export default class PrimativeDataBindingComponent extends React.Component{
    render(){
        var Name = 'samsung TV';
        var Price = 4000;
        var Stock = true;
        return(
            <>
                <div className="container-fluid">
                    <h1>Product Info</h1>
                    <dl>
                        <dt>Name</dt>
                        <dd>{Name}</dd>
                        <dt>Price</dt>
                        <dd>{Price}</dd>
                        <dt>Stock</dt>
                        <dd>{(Stock==true)?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </>
        )
    }
}