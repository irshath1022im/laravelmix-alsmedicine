

const category=[]

const categoryReducer = (state = category, action) =>{
        switch (action.type){
        case 'INITIAL_CATEGORY':
            return state=action.payload

            default:
            return state;
    }
}


export default categoryReducer;
