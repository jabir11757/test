import React from 'react';
import useState from 'react-hook-use-state';


const Hook = () => {

    const [count, setCount] = useState(0)
    return ( 
        <div>
            <h1> value: {count}</h1>
            <button onClick={()=> setCount (count+1)}>Increment</button>
        </div>

     );
}
 
export default Hook;