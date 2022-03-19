import { Typography } from '@mui/material'
import React from 'react'
import styles from './Style.module.css'

const CollapseButton = () => {

    return (

        <div class={styles.dropdown}>
            <div class={styles.dropbtn}>Shop</div>
            <div class={styles.dropdowncontent}>
                <Typography variant='body1' fontWeight="bold" fontFamily="Fredoka">
                    <div class={styles.dropdwonstyle}>
                        <a href="/electricguitars">Electric Guitars</a>
                        <a href="/acousticguitars">Acoustic Guitars</a>
                        <a href="/bassguitars">Bass Guitars</a>
                        <a href="/drums">Drums</a>
                        <a href="/pianos">Piaons & Keyboards</a>
                        <a href="/djequipment">DJ Equipment</a>
                    </div>
                </Typography>
            </div>
        </div>

    )
}

export default CollapseButton