const drawerWidth = 240;

export default (theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        position: 'relative',
    },
});