import React from "react";
import { Textfit } from "react-textfit"
import styles from './Black.module.css';

const Screen = ({ value }) => {
    return (
        <Textfit id={styles["screen-result"]} mode="single" max={70} forceSingleModeWidth={false}>
            {value}
        </Textfit>
    );
}

export default Screen;