import axios from "axios";



const INITIAL_REQUEST = (payload) =>{
        return {
            type: 'INITIAL_ITEMS',
            payload
        }
}





export const initialItemAction = () =>{
    return async(dispatch) =>{
        let url = `${process.env.MIX_API_URL}/item`;

        try {
            dispatch( INITIAL_REQUEST({loading:true}))
        
            const result = await axios.get(url);

            if(result.status === 200) {
                const {data,links} = result.data
                dispatch( INITIAL_REQUEST( {
                    items: data,
                    links,
                    loading:false,
                }))
            }

            
          } catch (error) {
              console.log(error)
          }

    }
}


export const getMoreItems = (url) =>{
    return async(dispatch) =>{

        try {
            dispatch( INITIAL_REQUEST({loading:true}))
        
            const result = await axios.get(url);

            if(result.status === 200) {
                const {data,links} = result.data
                dispatch( INITIAL_REQUEST( {
                    items: data,
                    links,
                    loading:false,
                }))
            }

            
          } catch (error) {
              console.log(error)
          }

    }
}

export const searchItems = (url) =>{
    return async(dispatch) =>{

        try {
            dispatch( INITIAL_REQUEST({loading:true}))
        
            const result = await axios.get(url);

            if(result.status === 200) {
                const {data,links} = result.data
                dispatch( INITIAL_REQUEST( {
                    items: data,
                    links,
                    loading:false,
                }))
            }

            
          } catch (error) {
              console.log(error)
          }

    }
}

export const filterByItems = (url) =>{
    return async(dispatch) =>{

        try {
            dispatch( INITIAL_REQUEST({loading:true}))
        
            const result = await axios.get(url);

            if(result.status === 200) {
                const {data,links} = result.data
                dispatch( INITIAL_REQUEST( {
                    items: data,
                    links,
                    loading:false,
                }))
            }

            
          } catch (error) {
              console.log(error)
          }

    }
}
