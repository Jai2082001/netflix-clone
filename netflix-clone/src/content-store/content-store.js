
import { createSlice, configureStore } from '@reduxjs/toolkit'

const userInitialState = { name: '', password: '', email: '', isAuth: false}
const userSlice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        changeWholeUser(state, action) {
            if(action.payload.password){
                state.password = action.payload.password;
            }
            if (action.payload.email) {
                console.log('true it is here')
                state.email = action.payload.email;
            }
            if(action.payload.isAuth){
                state.isAuth = action.payload.isAuth
            }
            if(action.payload.name){
                state.name  = action.payload.name;
            }
        },
        changeUser(state, action) {
            // for input as it has become non-mutable
            if (action.payload) {
                state.email = action.payload
            }
        }
    }
})

const pageSlice = createSlice({
    name: 'Page',
    initialState: { page: 'home' },
    reducers: {
        changePage(state, action) {
            console.log(state.page)
            state.page = action.payload.page
        }
    }
})

const store = configureStore({
    reducer: { user: userSlice.reducer, page: pageSlice.reducer }
})

export default store;
export const userActions = userSlice.actions
export const pageActions = pageSlice.actions