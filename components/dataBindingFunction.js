import { useState } from "react";

export default function DataBindingFunctionComponent()
{
    const [product, setProduct] = useState({Name: '', Price: 0, City: '', Stock: false});
    const [NewProduct, setNewProduct] = useState({});
    function HandleNameChange(event) {
        setProduct({
            Name: event.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        });
    }
    function HandlePriceChange(event) {
        setProduct({
            Name: product.Name,
            Price: event.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }
    function HandleCityChange(event) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: event.target.value,
            Stock: product.Stock
        })
    }
    function HandleStockChange(event) {
         setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: event.target.checked
         })
    }
    function handleRegisterClick(){
        setNewProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h3>Register Product</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type='text' onKeyUp={HandleNameChange} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type='number' onKeyUp={HandlePriceChange} className="form-control"/></dd>
                        <dt>Shipped To</dt>
                        <dd>
                            <select onChange={HandleCityChange} className="form-select">
                                <option>Hyd</option>
                                <option>Delhi</option>
                            </select>
                        </dd>
                        <dt className="form-switch"><input onChange={HandleStockChange} className="form-check-input" type="checkbox"/> Available</dt>
                        <button onClick={handleRegisterClick} className="btn btn-primary w-100">Register</button>
                    </dl>
                </div>
                <div className="col-4">
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd>{NewProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{NewProduct.Price}</dd>
                        <dt>Shipped To</dt>
                        <dd>{NewProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(NewProduct.Stock === true)?"Available": "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
