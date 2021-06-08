import axios from "axios"

const initialReceivings = (payload) => {
    return{
        type:'INITIAL_RECEIVINGS',
        payload
       }
}


export const initialReceivingAction = () =>{
    return async (dispatch,getState) =>{
        try {
        dispatch(initialReceivings(
                {
                 data:[],
                 links:{},
                 loading: true
             }));
           const result = await axios.get(`${process.env.MIX_API_URL}/receiving`)
        //    console.log(result)
            const {data,links} = result.data
           dispatch(initialReceivings(
               {
                data,
                links,
                loading: false
            }));
        } catch (error) {
            console.log(error)
        }
    }
}


export const loadMoreAction = (url) => {
    return async(dispatch) =>{
        try {

            dispatch(initialReceivings(
                {
                 data:[],
                 links:{},
                 loading: true
             }));

            const result = await axios.get(url)
         //    console.log(result)
             const {data,links} = result.data
            dispatch(initialReceivings(
                {
                 data,
                 links,
                 loading: false
             }));
         } catch (error) {
             console.log(error)
         }
    }
}


export const searchItemAction = (searchValue) => {
    return async(dispatch) =>{
        try {
            const result = await axios.get(`${process.env.MIX_API_URL}/items/query?searchValue=${searchValue}`)
            //  console.log(result)

         } catch (error) {

           console.log(error)
         }
    }
}

export const SingleReceivingAction = async (id) =>{
    return (dispatch) =>{
        dispatch({
            type:'RECEIVING',
            payload: {id}
        })
    }
}
