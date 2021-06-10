import { combineReducers } from "redux"
import itemReducer from "./itemReducer";
// import userReducer from "./userReducer";
import receivingReducer from './receivingReducer';
import addReceivingsReducer from './addReceivingReducer';
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers(
        {
            categoryStore: categoryReducer,
            item : itemReducer,
            // users : userReducer,
            receivings:receivingReducer,
            addReceiving: addReceivingsReducer
        }
    );

export default rootReducer;
