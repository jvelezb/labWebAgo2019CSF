export default (state = {}, action ) =>{
    switch(action.type){
        case 'ACCION1':
            return {
                result: action.payload
            };
        default:
            return state;


    }
}
