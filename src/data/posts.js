import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import photo3 from '../assets/images/photo3.png';

export const posts = [
  {
    id: 1,
    photo: photo1,
    title: 'Ліс',
    comments: 3,
    likes: 50,
    place: 'Ukraine',
    location: { latitude: 47.0392091, longitude: 10.3328469 },
  },
  {
    id: 2,
    photo: photo2,
    title: 'Захід на Чорному морі',
    comments: 0,
    likes: 20,
    place: 'Ukraine',
    location: { latitude: 50.388803, longitude: 30.686109 },
  },
  {
    id: 3,
    photo: photo3,
    title: 'Старий будиночок у Венеції',
    comments: 50,
    likes: 200,
    place: 'Italy',
    location: { latitude: 47.0392091, longitude: 10.3328469 },
  },
];
