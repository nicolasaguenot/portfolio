import { Grid, makeStyles, Typography } from "@material-ui/core";
import data from '../data.json'
const { contact } = data


let iobj = {}

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(50vh - ${theme.spacing(4)}px)`,
        alignSelf: 'center',
        justifySelf: 'center'
    },

    ...iobj
}))

export default function Contact() {
    const classes = useStyles()

    return(
        <Grid direction="row" container justify="center" alignItems="center" className={classes.cont}>
            <Grid container direction="column" item xs={12} spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}  align="center">
                    <Typography variant="h2" gutterBottom component="p">
                        Contact
                    </Typography>
                    <Typography variant="h5" gutterBottom component="p">
                        Phone : {contact.phone}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="p">
                        Email : {contact.email}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
