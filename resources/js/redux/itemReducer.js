
const item = {
  items:[],
  loading: true,
}

const itemReducer = (state=item, action)=>{
    switch (action.type) {
      case 'INITIAL_ITEMS':
        return {
          ...action.payload
        }
            
      default: 
        return state;
       
  
    }
};

export default itemReducer;