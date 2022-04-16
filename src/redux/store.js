import { configureStore } from '@reduxjs/toolkit'
import cartAdder from './cartAdder'

export const store = configureStore({
    reducer: {
        cartAdder: cartAdder
    },
})