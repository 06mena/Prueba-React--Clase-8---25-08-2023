import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src='https://jetnews.com.mx/wp-content/uploads/2017/06/737-800.jpg'
          alt="Boeing-737"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Boeing-737
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Avión de pasajeros, bimotor, de reacción, de fuselaje estrecho, para vuelos de corto a medio alcance, fabricado y desarrollado por la compañía estadounidense Boeing Commercial Airplanes.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
