import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    id="Description"
                    label="Description"
                    variant="outlined"
                />
                <TextField
                    id="type"
                    label="Type"
                    variant="outlined"
                />
                <TextField
                    id="organizer"
                    label="Organized By"
                    variant="outlined"
                />
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                />
                <TextField id="roadNumber" label="Road Number" type="search" variant="outlined" />

                <TextField id="street" label="Street Name" type="search" variant="outlined" />

                <TextField id="startDate" label="Start Date" type="search" variant="outlined" />

                <TextField id="endDate" label="End Date" type="search" variant="outlined" />

                <TextField id="begining" label="Begining at" type="search" variant="outlined" />
            </div>
        </form>
    );
}
