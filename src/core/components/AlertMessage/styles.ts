import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            paddingBottom: 10,
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);
