
const user = {
    logedIn : true,
    userName:''
}

const userReducer = (state= user, action)=>{
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return state = action.payload

        case 'LOGOUT_REQUEST':
            return {
                ...state,
                logedIn: action.payload.logedIn
            }

      default:
        return state;


    }
};

export default userReducer;
