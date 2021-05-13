function calcTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].amount * items[i].price;
    }
    return total;
}

export const reducer = (state,action)=>{
    if(action.type === 'PLUS_ONE'){
        const id = action.payload;
        let newCost = 0;
        for(let i=0;i<state.items.length;i++){
            if(state.items[i].id === id){
                newCost = state.items[i].price;
                break;
            }
        }
        return {
            ...state,
            totalItems : state.totalItems+1,
            items: state.items.map(item=>{
                if(item.id===id){
                    return {
                        ...item,
                        amount: item.amount+1
                    }
                }
                else{
                    return item;
                }
            }),
            totalPrice: state.totalPrice + newCost
        }
    }
    if(action.type === 'MINUS_ONE'){
        const id = action.payload;
        let newCost;
        for(let i=0;i<state.items.length;i++){
            if(state.items[i].id===id){
                newCost = state.items[i].price;
                break;
            }
        }
        return {
            ...state,
            totalItems: state.totalItems - 1,
            items: state.items.map((item)=>{
                if(item.id === id){
                    return {
                        ...item,
                        amount: item.amount-1
                    }
                }
                else{
                    return item;
                }
            }),
            totalPrice: state.totalPrice - newCost
        }
    }
    if(action.type === 'REMOVE_ALL'){
        return {
            items:state.items.map(item=>{
                return {
                    ...item,
                    amount: 0 
                }
            }),
            totalPrice:0,
            totalItems:0
        }
    }
}