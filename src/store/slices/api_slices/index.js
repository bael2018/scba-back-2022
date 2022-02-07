export const DOT_JSON = '.json'

export const rootApiNamesSlice = {
    PRODUCT_API: 'PRODUCT_API'
}

export const rootStatusNames = {
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
    LOADING: 'loading'
}

export const setRejected = (state , action) => {
    state.status = rootStatusNames.REJECTED;
    state.error = action.payload
}

export const catchResponseError = err => {
    if(err.status !== 200){
        throw new Error('Cannot get products. Server error !')
    }
}