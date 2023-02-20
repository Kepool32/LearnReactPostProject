import React from 'react';
import inp from "./MyButton.module.css"
const MyInput = ({...props}) => {
    return (
        <input {...props} className={inp.myInp}/>

    );
};

export default MyInput;