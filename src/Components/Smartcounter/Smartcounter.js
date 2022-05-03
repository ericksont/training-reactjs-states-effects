import {useState} from "react";

function Smartcounter () {

    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => setQuantity(quantity+1)}>+</button>
            <button onClick={() => setQuantity(quantity-1)}>-</button>
        </>
    );
}

export default Smartcounter;