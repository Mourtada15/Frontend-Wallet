import { createSlice } from "@reduxjs/toolkit";


const userTransactions = createSlice({
    name: 'transactions',
    initialState:{
        transactions:[],
    
    
    },
    reducers: {
            getTransaction : (state , action )=>{
                state.transactions = action.payload.map(transaction =>{
                    return({
                        id: transaction.id, 
                        sender_id: transaction.sender_id,
                        receiver_id: transaction.receiver_id,
                        date: transaction.date,
                        amountType: transaction.amountType,
                        amount: transaction.amount,
                        promotion_id: transaction.promotion_id,
                    }

                    )
                })

            }
//transactions method
    }
})


export const {getTransaction
    //exporttransactions  methods
}= userTransactions.actions;

export default userTransactions.reducer;