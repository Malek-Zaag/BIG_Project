import { Button } from '@mui/material'
import React from 'react'
import styles from './Style.module.css'

const CollapseButton = () => {

    return (
        
        <div class={styles.dropdown}>
            <Button class={styles.dropbtn}>SHOP</Button>
            <div class={styles.dropdowncontent}>
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a> 
            </div>
        </div>

    )
}

export default CollapseButton