export function startCommonLoader () {
    return {
        type: 'START_COMMON_LOADER',
    };
}

export function stopCommonLoader () {
    return {
        type: 'STOP_COMMON_LOADER',
    };
}

export function openDrawer () {
    return {
        type: 'OPEN_DRAWER',
        payload: null,
    };
}

export function closeDrawer () {
    return {
        type: 'CLOSE_DRAWER',
        payload: null,
    };
}

export function toggleDrawer () {
    return {
        type: 'TOGGLE_DRAWER',
        payload: null,
    };
}

export function openDrawerEditor () {
    return {
        type: 'OPEN_DRAWER_EDITOR',
    };
}

export function closeDrawerEditor () {
    return {
        type: 'CLOSE_DRAWER_EDITOR',
    };
}

export function addError (title, text) {
    return {
        type: 'ADD_ERROR',
        payload: {
            title,
            text,
        },
    };
}

export function AddGlobalMessage ({ lvl, title, text }) {
    return {
        type: 'ADD_GLOBAL_MESSAGE',
        payload: {
            lvl,
            title,
            text,
        },
    };
}

export function openAlert(title, content, callback) {
    return {
        type: 'OPEN_ALERT',
        payload: { title, content, callback },
    };
}

export function closeAlert () {
    return {
        type: 'CLOSE_ALERT',
    };
}

export function openDialogCardStore () {
    return {
        type: 'OPEN_DIALOG_CARD_STORE',
    };
}

export function closeDialogCardStore () {
    return {
        type: 'CLOSE_DIALOG_CARD_STORE',
    };
}