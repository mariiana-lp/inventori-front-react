import React from "react";

const ProductsList = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img className="card-img-top" src={item.image} alt="products" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p className="card-text">Stock: {item.inInventory}</p>
                                <p className="card-text">disponibilidad: {item.enabled}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ProductsList;
