// pages/500.js
import { Grid,  Typography } from "@material-ui/core";

export default function Custom500() {
    return (
        <Grid direction="row" container justify="center" spacing={2} alignItems="center">
            <Grid container direction="column" item xs={12} lg={6} spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}  align="center">
                    <Typography variant="h1" gutterBottom>
                        500
                    </Typography>
                    <Typography variant="h5" gutterBottom component="p">
                        Server-side error occurred
                    </Typography>
                    <a href={"/"} target="_blank" rel="noopener noreferrer"> Back home </a>
                </Grid>
            </Grid>
        </Grid>);
}
