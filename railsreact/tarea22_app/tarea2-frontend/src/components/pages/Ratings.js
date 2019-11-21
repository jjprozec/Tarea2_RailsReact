import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (

    <div className="card">
    <div className="card-body">
        <h2 className="card-title">Valorar Profesor</h2>
        <p className="card-text">

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Valorar</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Box>
        <div>
  
          <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={value} readOnly />
        </Box>
        
        </div>

        </p>
        
    </div>
    </div>

    
  );
}