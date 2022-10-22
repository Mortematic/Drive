import React from 'react';
import styles from './Find.module.css';

const Card = ({image, make}) => {
    return (
        <div className={styles.Card}>
            <img src={image} alt='/'></img>
            <p>{make}</p>
        </div>
    )
}

export default Card