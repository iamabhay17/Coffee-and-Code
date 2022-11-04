import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel variant="light" className="m-2 slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.catholic.com/wp-content/uploads/magi-moon-1200x400.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Read. Learn. Grow.</h1>
          <p>get access to well structured curriculam to upskill yourself</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://swall.teahub.io/photos/small/332-3323482_sustainibility-is-important-at-wallpaper-trends-wallpaper.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Code Everyday</h1>
          <p>get familiar with your courses within a month</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Froku-tv-bg-image%2F9aa489fe-da72-46d4-adaa-365574b5ea52.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Build Alongside</h1>
          <p>way more fun to work on projects while learning</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
