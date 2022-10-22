import React from 'react';
import styles from './Luxury.module.css';

const Luxury = () => {
    return (
        <div className={styles.Luxury}>
            <div className={styles.heading}>
                <h2>Luxury Selection</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>Select from the top luxury vehicles to roll in style</span>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src='https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9sbHMlMjByb3ljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' alt='/'></img>
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src='https://images.unsplash.com/photo-1563720223523-491ff04651de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='/'></img>
                    <div className={styles.content}>
                        <h3>Range Rover</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src='https://images.unsplash.com/photo-1614292493063-ccfd9dd1f908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80' alt='/'></img>
                    <div className={styles.content}>
                        <h3>Maserati</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='/'></img>
                    <div className={styles.content}>
                        <h3>Porsche</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Luxury