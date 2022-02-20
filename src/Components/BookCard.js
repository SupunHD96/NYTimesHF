import { Box, Button, Card, CardContent, CardMedia, Collapse, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";



function BookCard(props) {

    const [showDetailed, setShowDetailed] = useState(false);

    let btnState = false
    if (props.reviewLink === "") {
        btnState = true
    }

    function showReviews () {
        setShowDetailed(!showDetailed);
    }

    return (
    <Box display="flex" sx={{ justifyContent: "center" }}>
    <Card sx={{ minWidth: "350px", maxWidth: "600px", padding: "10px"}}>
        <CardContent sx={{ padding: "20px" }}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={5} md={3}><CardMedia component="img" image={props.image} alt="Cover" sx={{  minHeight: "100px", minWidth: "50px" }}/></Grid>
                <Grid item xs={6} sm={7} md={9}>
                    <Typography variant="h5">#{props.rank} {props.title}</Typography>
                    <Typography gutterBottom variant="caption">{props.author}</Typography>
                    <Typography gutterBottom variant="body1">{props.description}</Typography>
                    <Button variant="contained" size="small" disabled={btnState} onClick={showReviews} sx={{ marginTop: "20px" }}>Read full review</Button>
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={showDetailed}><Typography variant="body1">{props.reviewLink}</Typography></Collapse>
                </Grid>
            </Grid>
        </CardContent>
        <Divider/>
    </Card>
    </Box>
    );
}

export default BookCard;