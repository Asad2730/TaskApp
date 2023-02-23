import { SET_CARS,SET_CARS_ID } from "./Actions";

const initialState={
    cars:[],
    carID:1,
}
function taskReducer (state =initialState,action){
switch(action.type){
    case SET_CARS:
        return{...state,cars:action.payload};
        case SET_CARS_ID:
            return{...state,carID:action.payload};
    default:
        return state;
}
}
export default taskReducer;