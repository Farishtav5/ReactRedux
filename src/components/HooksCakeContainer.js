import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { buyCakes } from "../components/redux"

function HooksCakeContainer(props) {
    const [count, setCount] = useState()
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <hr/>
            <h2>Number of cakes- {noOfCakes}</h2>
            <button onClick={() => dispatch(buyCakes(count))}>Buy Cakes</button>

            <input type="text" value={count} onChange={(e) => setCount(e.target.value)} ></input>
            <h2>Number of ice creams- {noOfIceCreams}</h2>
            {/* <button onClick={() => dispatch(buyCakes())}>Buy Cakes</button> */}
            <hr/>
        </div>
    );
}

export default HooksCakeContainer;