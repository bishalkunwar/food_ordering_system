import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { userReducer, profileReducer, forgotPasswordReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
// import {newOrderReducer, myOrdersReducer, orderDetailsReducer} from "./reducers/orderReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducer,
    // newOrder:newOrderReducer,
    // myOrders:myOrdersReducer,
    // orderDetails:orderDetailsReducer,
});

let initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
        shippingInfo:localStorage.getItem("shippingIfo")?JSON.parse(localStorage.getItem("shippingInfo")):{},
    },
};


const middleWare = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;