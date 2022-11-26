import {
  Banner,
  Carousel,
  CarouselImg,
  CarouselContainer,
  CarouselWrapper,
} from "./Banner.styles";
import Slider from "react-slick";

export default function BannerUI(props) {
  return (
    <Banner>
      <>
        <CarouselContainer>
          <Slider {...props.settings}>
            <CarouselWrapper>
              <Carousel>
                <CarouselImg src="/images/heart.png" />
              </Carousel>
            </CarouselWrapper>
            <CarouselWrapper>
              <Carousel>
                <CarouselImg src="/images/thumbs-up.png" />
              </Carousel>
            </CarouselWrapper>
          </Slider>
        </CarouselContainer>
      </>
    </Banner>
  );
}
