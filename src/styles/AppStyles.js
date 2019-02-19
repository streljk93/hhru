export default (theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
        position: 'relative',
        height: '100%',
    },
    main: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        flexGrow: 1,
        height: '100vh',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        overflow: 'auto',
        padding: theme.spacing.unit * 3,
    },
});