import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './cartAdder'
import counterReducer from './counter'
import valueReducer from './value'

export const store = configureStore({
    reducer: {
        itemReducer: itemReducer,
        counterReducer: counterReducer,
        valueReducer: valueReducer
    },
})