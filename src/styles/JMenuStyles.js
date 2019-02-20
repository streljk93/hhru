export default theme => ({

    menu: {
        // borderRadius: theme.shape.borderRadius,
        // background: theme.palette.grey[200],
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        // padding: 20,
        display: 'flex',
        alignItems: 'center',
    },

    item: {
        marginRight: 10,
        '&:last-child': {
            marginRight: 0,
        },
    },

});