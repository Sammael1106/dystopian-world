import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import classNames from 'classnames';

const ImageSlider = ({ images }) => {
  images = images || [];
  const [initialized, setInitialized] = React.useState(false)
  const [clicked, setClicked] = React.useState(false)

  if (images.length) {
    const pagination = {
      renderBullet: function (index, className) {
        let total = images.length
        total = total > 10 ? index : `0${total}`
        if (index === 0)
          index = total
        else
          index = index > 10 ? index : `0${index}`
        let counter = `${index} / ${total}`
        return '<span class="' + className + '">' + counter + "</span>";
      },
    };

    return (
      <Swiper
        onAfterInit={() => setInitialized(true)}
        onSlideChangeTransitionStart={(swiper) => swiper.clickedSlide && setClicked(true)}
        slidesPerView={"auto"}
        initialSlide={1}
        spaceBetween={90}
        speed={500}
        loop={true}
        navigation={true}
        pagination={pagination}
        slideToClickedSlide={true}
        modules={[Navigation, Pagination]}
        className={classNames({
          'allow-entrance-animation': initialized,
          'allow-slide-animation': clicked
        })}
        >
        { images.map((image, i) => <SwiperSlide key={i}>
            <Image {...image} />
          </SwiperSlide>)
        }
      </Swiper>
    );
  } else {
    return <div className='swiper-placeholder'></div>
  }
};

const Image = ({ image, alt, title }) => {
  return <img src={`/images/${image}`}
              alt={alt}
              title={title}
              />
}

export default ImageSlider;