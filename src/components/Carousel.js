import React from 'react';
import { Carousel} from 'react-bootstrap';
// import { Arrow } from './Arrow';
// import { ImageSlide } from './ImageSlide'
// import './Carousel.css'

// const imgUrls = [
// 	"/assets/1.jpg", 
// 	"/assets/2.jpg",
// 	"/assets/4.jpg",
// 	"/assets/5.jpg",
// 	"/assets/6.jpg"
// ];

// class Carousel extends React.Component {
//     constructor (props) {
//         super(props);

//         this.nextSlide = this.nextSlide.bind(this);
//         this.previousSlide = this.previousSlide.bind(this);
    
//         this.state = {
//           currentImageIndex: 0
//         };
//       }
//       previousSlide () {
//         const lastIndex = imgUrls.length - 1;
//         const { currentImageIndex } = this.state;
//         const shouldResetIndex = currentImageIndex === 0;
//         const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
//         this.setState({
//           currentImageIndex: index
//         });
//       }
    
//       nextSlide () {
//         const lastIndex = imgUrls.length - 1;
//         const { currentImageIndex } = this.state;
//         const shouldResetIndex = currentImageIndex === lastIndex;
//         const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
//         this.setState({
//           currentImageIndex: index
//         });
//       }
    
//     render() {
//         return (
//             <div className="carousel">
//                 <Arrow
//                     direction="left"
//                     clickFunction={this.previousSlide}
//                     glyph="&#9664;" />

//                 <ImageSlide url={imgUrls[this.state.currentImageIndex] } />

//                 <Arrow
//                     direction="right"
//                     clickFunction={this.nextSlide}
//                     glyph="&#9654;" />
//             </div>

//         );
//     }
// }
class Carouse extends React.Component {
    render(){
        return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 );
 }
}

export default Carouse;