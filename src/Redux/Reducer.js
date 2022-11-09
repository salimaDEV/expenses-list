export const initialValue = {
    Balance: 20000,
    Expenses: 0,
    ExpList: [],
    ExpItem: {}
}
export const Reducer = (state = initialValue, action) => {
    switch (action.type){
        case "ADD_EXPENSES_ITEM":
            state.ExpItem = {...action.payload}
            state.Balance = state.Balance - +state.ExpItem.spent
            state.Expenses = state.Expenses + +state.ExpItem.spent
            return {...state, ExpList:[...state.ExpList, state.ExpItem] }
        case "DELETE_EXPENSES_ITEM":
            state.Balance = state.Balance + + state.ExpItem.spent
            state.Expenses= state - + state.ExpItem.spent
            return {...state, ExpList: state.ExpList.filter((el,idx) => idx !== action.payload)};

case "CLEAR":
    return {...initialValue,Balance:state.Balance + + state.Expenses,Expenses: 0};
        default:
            return state
    }
}
export default Reducer