import Image from 'next/image'
import { Carousel, Space } from 'antd';

import logos from '../../../assets/images/landingPage/partners/index.js';

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 5,
  slidesToScroll: 1
};

export default function CarouselPartners(props) {
    return (
      <Carousel {...settings} autoplay>
        {logos.map((item, index) => (
          <div key={`partner-${index}`}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <Image src={item.image} width={140} height={70} />
            </a>
          </div>
        ))}
      </Carousel>
    );
}

  