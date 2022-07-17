import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';
// import "bootstrap/dist/css/bootstarp.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemData.css"
export default function ItemData() {
    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    // addproduct handler method
    const add = (event)=>{
        event.preventDefault();
        //console.log(event.target.product_name.value);
        // const formData = event.target;
        // const newProduct = {
        //     product_name: formData.product_name.value,
        //     price: formData.price.value,
        //     qty: formData.qty.value
        // }
        //console.log(formData.current)
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newProduct);
        // add a new product inside products array
        setProduct([...products,newProduct]);
        //console.log(products);
    }
    // increment qty value by 1
    const increQty = (event)=>{
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    // decrement qty value by 1
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
        <div >
            <Form className="itemData" onSubmit={add} ref={formData}>
            <Form.Group className="abc" controlId="formBasicProductName">
                <Form.Label className="label">Product Name:</Form.Label>
                <Form.Control className="input" type="text" placeholder="Enter Product Name" name="product_name"/>
            </Form.Group>

            <Form.Group className="abc" controlId="formBasicPrice">
                <Form.Label className="label">Price:</Form.Label>
                <Form.Control className="input"type="number" placeholder="Price in Euro" name="price"/>
            </Form.Group>

            <Form.Group className="abc" controlId="formBasicQty">
                <Form.Label className="label">Quantity:</Form.Label>
                <Form.Control className="input" type="number" placeholder="How many: qty" name="qty"/>
            </Form.Group>
            <Button className="btn" variant="primary" type="submit">
                Add to Inventory
            </Button>
            
            </Form>
            
            </div>
            <div className="tableData">

            {/* <Table className="table" striped bordered hover variant="dark"> */}
            <Table className="table" >

            <thead>
                <tr className="head-table">
                    <th>Index</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody >
                {
                    products.map((item, index)=>{
                        return(
                            <tr className="body-table" key={index}>
                                <td>{index}</td>
                                <td>{item.product_name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td className="edit">
                                    <Button  className="add"variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                    <Button className="sub"variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
       </div>
        </div>


    )
}