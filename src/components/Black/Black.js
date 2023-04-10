import styles from './Black.module.css';
import "@fontsource/poppins";

const BlackCalculator = () => {

    let buttonsList = ['AC', '⌫', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];

    return <div id={styles["container"]}>
        <div className={styles.blackcalculator} >
            <div id={styles["screen"]}>
            </div>
            <div className={styles.buttons}>
                {buttonsList.map(button => <button>{button}</button>)}

            </div>
        </div>
    </div>

};

export default BlackCalculator;