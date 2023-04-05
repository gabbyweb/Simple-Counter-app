import { useState } from "react";


 const Functioncounter = () => {
    const [count, setCount] = useState(0)

    function counterIncrement() {
        setCount(autoCount => autoCount + 5)
    }
    
    function counterDecrement() {
        setCount(autoCount => autoCount - 5)
    }

    return (
        <>
    
        <h2>Functional Component</h2>
     
        <h1>Simple Counter</h1>
        <button className="counter+" onClick={counterIncrement}>+</button>
        <button className="counter-"onClick={counterDecrement}>-</button>
        <h1>{count}</h1>
        
        </>





    )
    
}
export default Functioncounter;