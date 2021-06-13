import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Card(props) {

  const thumbnail = {
    "width": "100px",
    "height": "100px"
  }

  const makeStyles = ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  return (

/*     <EventCard >
      <CardActionArea>
        <CardContent>
        <img alt="concert poster" style={thumbnail} src={props.image} />
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.date}
          <a href={props.url} target="blank"> Buy Tickets Here!</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/events/" + props.id}>
          <button><strong>View Details</strong></button>
        </Link>
      </CardActions>
    </EventCard>
 */

 <React.Fragment>
 <CssBaseline />
 <Container maxWidth="sm" className="Card">
 <img alt="concert poster" src={props.image} className="Card-Image" />

      <div >
        <p>{props.name}</p>
        <p>{props.date}</p>
        <a href={props.url} target="blank"> Buy Tickets Here!</a>
        <Link to={"/events/" + props.id}>
          <button><strong>View Details</strong></button>
        </Link>
      </div>
 </Container>
</React.Fragment>
    /* 
    <div className="row m-2">
      <div className="col-4">
        <img alt="concert poster" style={thumbnail} src={props.image} />
      </div>
      <div className="col-8">
        <p>{props.name}</p>
        <p>{props.date}</p>
        <p>{props.venue}</p>
        <a href={props.url} target="blank"> Buy Tickets Here!</a>
        <Link
          to={"/events/" + props.id}
          id={props.id}
          image={props.image}
          name={props.name}
          date={props.date}
          venue={props.venue}
        >
          <button><strong>View Details</strong></button>
        </Link>
      </div>
    </div> */
  );
}

export default Card