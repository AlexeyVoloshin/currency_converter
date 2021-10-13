import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiListItemButton-root': {
                padding: '10px',
                border: '2px solid grey',
                margin: '0 0 10px',
                borderRadius: 4,
            },
        },
    }),
);
