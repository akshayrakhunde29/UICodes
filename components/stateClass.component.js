import React from "react";
export default class StateClassComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            title: 'Product Details',
            product: {
                Name: 'nike casuals',
                Price: 400.33,
                photo: 'logo512.png'
            },
            categories: ['Electronic', 'Footwear', 'Fashion']
        }
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                    <h2>{this.state.title}</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{this.state.product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{this.state.product.Price}</dd>
                        <dt>Preview</dt>
                        <dd><img src={this.state.product.photo} width="100" alt="preview"/></dd>
                    </dl>
                    <select>
                        {
                            this.state.categories.map(category =>
                                <option>{category}</option>                                    
                            )
                        }
                    </select>
                </div>
            </>
        )
    }
}