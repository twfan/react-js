//reducer

const cartReducer = (
    state = {
        cart: [],
    },
    action
) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
            default:
                return state;
    }
}

//store

//subscribe

//dispatch