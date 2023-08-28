import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 1250, minHeight: 500 }}>
      <Masonry columns={4} spacing={3}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://parkingaeropuertosevilla.net/wp-content/uploads/2016/10/p51-mustang.jpg',
    title: 'Fern',
  },
  {
    img: 'https://www.nationalgeographic.com.es/medio/2018/04/25/aeropuerto-de-londres-heathrow_16ab6660.jpg',
    title: 'Snacks',
  },
  {
    img: 'https://www.steelmasterestructuras.com/wp-content/uploads/2018/01/acero-hangar-s-modelo.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://www.gmi.com.mx/News/images/han01.jpg',
    title: 'Tower',
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.t6SIj7nr9l6ypbvK-dnt2AHaFN&pid=Api&P=0&h=180',
    title: 'Sea star',
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.apEF3Ap6BkopAg7yMJDSjQHaEK&pid=Api&P=0&h=180',
    title: 'Honey',
  },
  {
    img: 'https://i.pinimg.com/originals/34/81/97/348197930d865682960e360b0b244dc9.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://www.preferente.com/wp-content/uploads/2018/07/aviones.jpg',
    title: 'Breakfast',
  },
];
