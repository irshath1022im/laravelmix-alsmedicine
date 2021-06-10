

const INITIAL_CATEGORY_REQUEST = (payload) => {
    return {
        type: 'INITIAL_CATEGORY',
        payload
    }
}

export const getCategoryAction = ()=>{
    return async(dispatch) => {

        try {
            const result = await axios.get(`${process.env.MIX_API_URL}/category`)
            // console.log(result)
            if(result.status === 200) {
                dispatch( INITIAL_CATEGORY_REQUEST(result.data))}


        } catch (error) {
            console.log(error)

        }
    }
}
