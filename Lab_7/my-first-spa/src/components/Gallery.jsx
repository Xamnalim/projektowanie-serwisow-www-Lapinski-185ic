import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import rasmus from './img/rasmus.png'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 345,
    },
});

const Gallery = () => {
    const classes = useStyles();

    return (
        <Box align="center">
            <Typography align="center" variant="h2">Gallery</Typography>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={rasmus}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Rasmus
                        </Typography>
                        <Typography variant="body2" align="justify" color="textSecondary" component="p">
                            Maska występująca w Hotline Miami.
                            Jest to maska sowy, która ubrana przez Jacketa daje mu oko do sekretów,
                            czyli sprawia, że kawałki puzzli lekko podskakują i są łatwiejsze do zauważenia.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://hotline-miami.fandom.com/pl/wiki/Maska_Rasmus">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
};

export default Gallery;