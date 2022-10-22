import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'

const Find = () => {
    return (
        <div className={styles.Find}>
            <div className={styles.Heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                breakpoints={{
                    340: {
                        width: 200,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 700,
                        slidesperView: 2,
                    },
                    1040: {
                        width: 1040,
                        slidesPerView: 4,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    make='BMW'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtYXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                    make='Chevrolet'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60'
                    make='Ford'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1622300868582-544a4dde5395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGplZXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    make='Jeep'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                    make='Mercedes-Benz'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1590656363923-923115c6881b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG5pc3NhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
                    make='Nissan'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    make='Tesla'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1591230740238-e9a71182b67c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZvbGtzd2FnZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    make='Volkswagen'/>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Find