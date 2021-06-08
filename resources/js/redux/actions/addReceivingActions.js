

const addItem =(payload)=>{
    return {
        type: 'ADD_ITEM',
        payload
    }
}

const removeItem = (payload) => {
    return {
        type:'REMOVE_ITEM',
        payload
    }
}

export const addReceivingItemAction = (data) => {
    return(dispatch) => {
        dispatch(addItem(data))
    }

}


export const removeReceivingItemAction = (key) =>{
    return(dispatch)=>{
        dispatch(removeItem(key))
    }
}