import { useState, useEffect } from "react";

function State(){
    const [count, setCount] = useState(0);


    // useEffect(() => {
    //     document.title = "your counts is " + count
    // })

    useEffect(() => {
    //  document.title =  "hola! welcome"
        document.title = "your counts is " + count

    }, [count])

    return(
        <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add Counts</button>
        {/* <h1>{welcomeMsg}</h1> */}
        </>
    )
}

export default State;