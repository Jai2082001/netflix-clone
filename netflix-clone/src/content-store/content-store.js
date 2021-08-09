
import { createSlice, configureStore } from '@reduxjs/toolkit'

const userInitialState = { name: '', password: '', email: ''}
const userSlice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        changeUser(state, action) {
            state.name = action.payload.name;
            state.password = action.payload.password;
            state.email = action.payload.email    
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