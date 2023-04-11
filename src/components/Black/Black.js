import styles from './Black.module.css';
import "@fontsource/poppins";
import React from 'react';
import { useState } from 'react';
import Screen from './Screen';


const BlackCalculator = () => {

    let buttonsList = ['AC', '⌫', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];

    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
        console.log(result)
    };



    return <div id={styles["container"]}>
        <div className={styles.blackcalculator} >
            <div id={styles["screen"]}>
                <Screen value={result} />
            </div>
            <div className={styles.buttons}>
                {buttonsList.map(val => <button onClick={handleClick} key={val} name={val}>{val}</button>)}

            </div>
        </div>
    </div>

};

export default BlackCalculator;