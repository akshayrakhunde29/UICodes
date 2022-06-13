
export default function NestedItrectionComponent()
{
    var categories = [
        {category : 'Electronic', product : ['Samsung TV', 'Mobile']},
        {category: 'Laptops', product : ['Lenovo', 'Asus']}
    ];
    return(
        <>
            <div className="container-fluid">
                <h2>categories List</h2>
                <ol>
                    {
                        categories.map(item =>
                           <li key={item.category}>{item.category}
                                <ul>
                                    {
                                        item.product.map(product =>
                                            <li key={product}>{product}</li>
                                        )
                                    }
                                </ul>
                           </li> 
                        )
                    }
                </ol>
                <h2>categories Select option</h2>
                <select className="form-control w-25">
                    {
                        categories.map(item =>
                            <optgroup key={item.category} label={item.category}>
                                {
                                    item.product.map(product =>
                                        <option key={product}>{product}</option>
                                    )
                                }
                            </optgroup>
                        )
                    }
                </select>
                <div>
                    <h1>Data binding with local reasorces</h1>
                    <img alt="preview" src="logo512.png" width="150" height="150" />
                </div>
            </div>
        </>
    );
}