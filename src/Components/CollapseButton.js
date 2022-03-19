import { Typography } from '@mui/material'
import React from 'react'
import styles from './Style.module.css'

const CollapseButton = () => {

    return (

        <div class={styles.dropdown}>
            <div class={styles.dropbtn}>Shop</div>
            <div class={styles.dropdowncontent}>
                <Typography variant='body1' fontWeight="bold" fontFamily="Fredoka">
                    <a href="/">Electric Guitars</a>
                    <a href="/">Acoustic Guitars</a>
                    <a href="/">Bass Guitars</a>
                    <a href="/">Drums</a>
                    <a href="/">Piaons & Keyboards</a>
                    <a href="/">DJ Equipment</a>
                </Typography>
            </div>
        </div>

    )
}

export default CollapseButton