import{SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from '../Types'

const CartReducer = (state, action) => {
    if (action.type === SHOW_HIDE_CART) {
      return {
        ...state,
        showCart: !state.showCart
      };
    } else if (action.type === ADD_TO_CART) {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    } else if (action.type === REMOVE_ITEM) {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.idcourses !== action.payload)
      };
    } else {
      return state;
    }
  };


export default CartReducer