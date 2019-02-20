const initialState = {
    data: [],
    meta: {
        isFetching: false,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'REQUEST_CITY':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    isFetching: true,
                }),
            });

        case 'RESPONSE_CITY':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    isFetching: false,
                }),
            });

        case 'SAVE_CITY_LIST':
            return Object.assign({}, state, {
                data: action.payload,
            });

        default:
            return state;

    }
};