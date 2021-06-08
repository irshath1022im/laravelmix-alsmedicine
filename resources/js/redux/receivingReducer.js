

const receivings = {
    data:[],
    loading: true,
    error: null,
    links:{
        first: null,
        next: null,
        last:null
    }
};
const receivingReducer = (state=receivings, action)=>{

    switch (action.type) {
        case 'REQUEST_API':
           return state;
         

        case 'INITIAL_RECEIVINGS':
                return state= action.payload

        case 'RECEIVING':
            return {
                ...state,
                data: state.data.filter( item => {
                    return item.id === action.payload.id
                })
            }
        
    
        default:
            return state;
      
    }

}

export default receivingReducer;
