import React, { useState } from "react";
import { Button } from "react-bootstrap";


function Intro () {

    const [counter, setCounter] = useState(0);

    return(
        <div>Just another page : counter {counter}
            <div>
            <Button onClick={() => setCounter(counter + 1)}> Increment Value</Button>
            <Button variant="warning" onClick={() => setCounter(counter - 1)}> Decrement Value</Button>
            </div>  
        </div>
    );
}

export default Intro;