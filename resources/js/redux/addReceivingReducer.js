

const addReceivings = {
    id:'',
    po:'',
    qut_ref_no:'',
    receiving_date:'',
    supplier:'',
    items:[]
}


const addReceivingsReducer = (state=addReceivings, action)=>{

    switch (action.type) {
        case'ADD_ITEM':
        return {
            ...state,
            items: state.items.concat(action.payload)
        }

        case 'REMOVE_ITEM':
        return {
            ...state,
            items: state.items.filter( (item,key) => {
                return key !== action.payload
            })
        }

        default:
            return state;
      
    }

}

export default addReceivingsReducer;
