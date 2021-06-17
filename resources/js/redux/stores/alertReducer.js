
const alerts =[];

const alertReducer = (state=alerts , action)=>{
    switch (action.type) {

        case 'NEW_ALERT':
            return state = ['testing alert']

        default:
            return state;
    }
}

export default alertReducer;
