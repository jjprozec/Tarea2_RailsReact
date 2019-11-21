import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  card: {
    maxWidth: 650,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Container maxWidth="sm">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/studies_education_learning_2.jpeg?wOM8J.O9eo2h744k51I38HwkiykDIiMh"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2>Cursos</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Muestra todos tus cursos impartidos del semestre actual.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/cursos" size="medium" color="secondary">
          ENTRAR
        </Button>

      </CardActions>
    </Card>
    <br></br>
    <br></br>
    <br></br>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.lawtechnologytoday.org/wp-content/uploads/2018/11/shutterstock_1225208335-660x330.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2>Valorar Profesores</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Aqui puedes valorar a los profesores y dar a conocer tus opiniones acerca de los mismos, 
            con el fin de seguir mejorando nuestra calidad académica. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/ratings" size="medium" color="secondary">
          ENTRAR
        </Button>
        
      </CardActions>
    </Card>
    </Container>
    </div>

  );


}