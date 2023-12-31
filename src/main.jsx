import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/Nav.jsx'
import './index.css'
import Carousel from '../components/Carousel.jsx'
import Date from '../components/Date.jsx'
import Faq from '../components/Faq.jsx'
import CardSlider from '../components/CardSlider.jsx'
import Subscribe from '../components/Subscribe.jsx'
import Footer from '../components/footer.jsx'
import Rating from '../components/Rating.jsx'
import { ChakraProvider } from '@chakra-ui/react'

const counts = [
  { start: 0, end: 123 },
  { start: 0, end: 12 },
  {start: 0, end: 12},
  {start: 0, end: 123},
] 

const slides = [
  {
    name: "Heading for Slide 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
    img:
      "https://www.theirmindia.org/assets/images/homepage/hbanner_6.png",
  },
  {
    name: "Heading for Slide 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
    img:
      "https://www.theirmindia.org/assets/images/homepage/hbanner_2.png",
  },
  {
    name: "Heading for Slide 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
    img:
      "https://www.theirmindia.org/assets/images/homepage/hbanner_3.png",
  },
  {
    name: "Heading for Slide 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
    img:
      "https://www.theirmindia.org/assets/images/homepage/hbanner_14.png",
  },
  {
    name: "Heading for Slide 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
    img:
      "https://www.theirmindia.org/assets/images/homepage/hbanner_5.png",
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    <Carousel slides={slides} />
    <Date/>
    <CardSlider />
    <Rating counts={counts}/>
    <Faq/>
    <Subscribe/>
    <Footer/>
    </ChakraProvider>
  </React.StrictMode>,
)
