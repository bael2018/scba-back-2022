import { rootStatusNames } from "../constants";

export const setRejected = (state , action) => {
    state.status = rootStatusNames.REJECTED;
    state.error = action.payload
}

export const catchResponseError = err => {
    if(err.status !== 200){
        throw new Error('Cannot get products. Server error !')
    }
}