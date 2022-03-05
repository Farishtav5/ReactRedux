import React from "react";
import { useEffect } from "react";

export const Hello = React.memo(({count}) => {
    useEffect (() => {
          console.log("faruu renderrr") // will monitor all states
        //   setCount(count + 1)
        })
      

    return (
        <div>Hello Everyone! {count}</div>
    )
})