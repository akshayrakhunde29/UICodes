import React from "react";

export default class ArrayDataBindingComponent extends React.Component {
    render() {
        var product = ['mobile ', 'laptop ', 'TV'];
        var jsonData = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
        return(
            <>
                <div className="container-fluid">
                    <h1>Array Binding</h1>
                    <h3>product list</h3>
                    <ol>
                        {
                            product.map(product =>
                                <li key={product}>{product}</li>
                            )
                        }
                    </ol>
                    <h3>product select</h3>
                    <select>
                        {
                            product.map(product =>
                                <option key={product}>{product}</option>
                                )
                        }
                    </select>
                </div>  
                <div className="container-fluid mt-3">
                    <h1>JSON binding</h1>
                    <dl>
                        <dt>Title</dt>
                        <dd>{jsonData.title}</dd>
                        <dt>Preview</dt>
                        <dd><img alt="img" src={jsonData.image} width="200"/></dd>
                    </dl>
                </div>
            </>
        )
    }
}