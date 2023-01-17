export const actionType = {
    SET_USER:'SET_USER'
}


const reducer = (state, action) => { 
    console.log(action)

    if(action.type===actionType.SET_USER){
        return {
            ...state,
            user:action.user
        }
    } else{
        return state
    }
}


export default reducer 