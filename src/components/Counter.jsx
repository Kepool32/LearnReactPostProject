import React, {useState} from 'react';

const Counter = () => {
    const [count,setcount] = useState(0)

    function increm(){
        setcount(count+1)



    }


    function decriment(){

        setcount(count-1)

    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increm}>increm</button>
            <button onClick={decriment}>decriment</button>
        </div>
    );
};

export default Counter;