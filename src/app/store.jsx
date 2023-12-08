import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import transactionsReducer from './userTransactions'

const store = configureStore({
  reducer: {
    users:userReducer,
    transactions: transactionsReducer
  },
})


export default store;
