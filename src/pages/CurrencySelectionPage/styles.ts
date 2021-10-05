import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
        },

        header: {
            textAlign: 'center',
        },

        title: {
            fontSize: '20px',
            fontWeight: 700,
        },

        mainContent: {},

        select: {
            maxWidth: '100%',
        },

        wrapList: {},
    }),
);
