const initialState = {
    data: [],
    selected: {},
    meta: {
        isFetching: false,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'REQUEST_EMPLOYER':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    isFetching: true,
                }),
            });

        case 'RESPONSE_EMPLOYER':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    isFetching: false,
                }),
            });

        case 'SAVE_SELECTED_EMPLOYER':
            return Object.assign({}, state, {
                data: action.payload,
            });

        case 'SAVE_EMPLOYER_META':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                }),
            });

        default:
            return state;

    }
};