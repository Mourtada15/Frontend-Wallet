import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState:{
        users:[],
    
    
    },
    reducers: {
            getUser : (state , action )=>{
                state.users = action.payload.map(user =>{
                    return({
                        id: user.id, 
                        balance_usd: user.balance_usd,
                        balance_usdt : user.balance_usdt,
                        email : user.email,
                        username : user.username,
                        password : user.password,
                        status : user.status,
                        role: user.role,

                    }

                    )
                })

            }
//user method
    }
})


export const {getUser
    //export user methods
}= userSlice.actions;

export default userSlice.reducer;