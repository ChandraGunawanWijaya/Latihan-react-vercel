import React from "react";

function Product(){
    // const products = ["Asus", "Acer" , "Lenovo"];
    const products = [
        { id: "P001", nama: "Asus", harga: 8000000},
        { id: "P002", nama: "Acer", harga: 9000000},
        { id: "P003", nama: "Lenovo", harga: 10000000},

    ]

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) => (
                    
                    <tr key={product.id}> 
                        <td>{product.id}</td>
                        <td>{product.nama}</td>
                        <td>{product.harga}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )

    // const displayProduct = products.map((product) => (
    //     <div key={product}>{product}</div>
    // ));
    // return <div>{displayProduct}</div>
}
    export default Product;