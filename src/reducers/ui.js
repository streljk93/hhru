const initialState = {
    drawerIsOpen: false,
    drawerEditorIsOpen: false,
    isLoading: false,
    alert: {
        title: '',
        content: '',
        open: false,
        callback: () => true,
    },
    dialogCardStore: {
        isOpen: false,
    },
};

const ui = (state = initialState, action) => {
    switch (action.type) {

        case 'START_COMMON_LOADER':
            return { ...state, isLoading: true };

        case 'STOP_COMMON_LOADER':
            return { ...state, isLoading: false };

        case 'OPEN_DRAWER':
            return { ...state, drawerIsOpen: true };

        case 'CLOSE_DRAWER':
            return { ...state, drawerIsOpen: false };

        case 'TOGGLE_DRAWER':
            return { ...state, drawerIsOpen: !state.drawerIsOpen };

        case 'OPEN_DRAWER_EDITOR':
            return { ...state, drawerEditorIsOpen: true };

        case 'CLOSE_DRAWER_EDITOR':
            return { ...state, drawerEditorIsOpen: false };

        case 'OPEN_ALERT':
            return Object.assign({}, state, {
                alert: Object.assign({}, state.alert, {
                    title: action.payload.title,
                    content: action.payload.content,
                    callback: action.payload.callback,
                    open: true,
                }),
            });

        case 'CLOSE_ALERT':
            return Object.assign({}, state, {
                alert: initialState.alert,
            });

        case 'OPEN_DIALOG_CARD_STORE':
            return Object.assign({}, state, {
                dialogCardStore: Object.assign({}, state.dialogCardStore, {
                    isOpen: true,
                }),
            });

        case 'CLOSE_DIALOG_CARD_STORE':
            return Object.assign({}, state, {
                dialogCardStore: Object.assign({}, state.dialogCardStore, {
                    isOpen: false,
                }),
            });

        default:
            return state;

    }
}

export default ui;