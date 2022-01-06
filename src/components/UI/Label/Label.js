import React from 'react';
import styles from "./Label.module.scss";

const Label = (props) => {
    return (
        <div className={styles.label__form}>
            <label>{props.text}</label>
        </div>
    );
};

export default Label;
