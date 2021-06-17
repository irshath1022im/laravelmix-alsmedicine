import { combineReducers } from "redux"
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
import receivingReducer from './receivingReducer';
import addReceivingsReducer from './addReceivingReducer';
import categoryReducer from "./categoryReducer";
import alertReducer from "./stores/alertReducer";


const rootReducer = combineReducers(
        {
            categoryStore: categoryReducer,
            item : itemReducer,
            user : userReducer,
            receivings:receivingReducer,
            addReceiving: addReceivingsReducer,
            alertStore: alertReducer
        }
    );

export default rootReducer;
