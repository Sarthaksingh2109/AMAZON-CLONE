export const initialState = {
    basket: [
        {
            id: "14945896",
            title: "Sony Premium Compact DSC-RX100M5A Advanced Digital 4K Camaera(White & Black)",
            price: 840.88,
            rating: 5,
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
  );
  

function reducer(state, action){
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_TO_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                // Create a new array without the item to be removed
                let newBasket = [...state.basket];
                newBasket.splice(index, 1);
                
                return {
                    ...state,
                    basket: newBasket
                };
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in the basket`
                );
                return state;
            }

        default:
            return state;
    }
}

export default reducer;
