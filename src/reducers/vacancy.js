const initialState = {
    data: [],
    meta: {
        found: null,
        pages: null,
        per_page: null,
        page: null,
        isFetching: false,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'REQUEST_VACANCY':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    isFetching: true,
                }),
            });

        case 'RESPONSE_VACANCY':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    isFetching: false,
                }),
            });

        case 'SAVE_VACANCY_LIST':
            return Object.assign({}, state, {
                data: action.payload,
            });

        case 'SAVE_VACANCY_META':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    found: action.payload.found,
                    pages: action.payload.pages,
                    per_page: action.payload.per_page,
                    page: action.payload.page,
                }),
            });

        default:
            return state;

    }
};