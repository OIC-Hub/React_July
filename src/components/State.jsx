import { useState } from "react";

function State(){
    const [count, setCount] = useState(0);

    return(
        <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add Counts</button>

        </>
    )
}

export default State;