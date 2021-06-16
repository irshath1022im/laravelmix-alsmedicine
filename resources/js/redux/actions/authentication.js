
const login = (payload) =>{
    return {
        type: 'LOGIN_REQUEST',
        payload
    }
}


const logout = (payload) => {
    return {
        type: 'LOGOUT_REQUEST',
        payload
    }
}


export const loginAction = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(login({logedIn: true, userName:"Admin"}))
        } catch (error) {

        }

        console.log(dispatch)
    }
}


export const logOutAction = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(logout({logedIn: false}))
        } catch (error) {

        }
    }
}
