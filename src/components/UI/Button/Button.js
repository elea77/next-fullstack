import React from 'react';
import styles from "./Button.module.scss";

const Button = (props) => {
    return (
        <div className={styles.primary__button}>
            <button className={props.className}>{props.text}</button>
        </div>
    );
};

export default Button;
