import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {},
    header: {
        marginBottom: 30,
    },
    title: {
        fontSize: '20px',
        fontWeight: 700,
    },

    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '3px 3px 9px -3px',
        borderRadius: '4px',
    },

    containerSelect: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
    },

    containerButton: {
        alignSelf: 'end',
    },

    button: {
        '& .MuiButton-root': {
            width: '100%',
            padding: '10px',
            border: '2px solid',
        },
    },

    input: {
        display: 'flex',
        flexDirection: 'column',

        '& label': {
            color: '#666',
        },
    },
});
