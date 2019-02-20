const initialState = {
    data: [],
    selected: {},
    meta: {
        found: null,
        pages: null,
        per_page: null,
        page: null,
        isFetching: false,
        filter: {},
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

        case 'SAVE_VACANCY_FILTER_LIST':
            return Object.assign({}, state, {
                meta: Object.assign({}, state.meta, {
                    filter: Object.assign({}, state.meta.filter, {
                        ...action.payload,
                    }),
                }),
            });

        case 'SAVE_VACANCY_SELECTED':
            return Object.assign({}, state, {
                selected: action.payload,
            });

        default:
            return state;

    }
};