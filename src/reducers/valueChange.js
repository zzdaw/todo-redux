export const valueChange = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            //console.log(`Stan w reducerze: ${action.text}`);
            return action.text;
        default:
            return state;
    }
}