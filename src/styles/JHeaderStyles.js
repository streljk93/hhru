const drawerWidth = 240;

export default (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: theme.mixins.toolbar,
    navTitle: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Russo One',
    },
    navIconHide: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        position: 'relative',
    },
});