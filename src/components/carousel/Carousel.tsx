import React from "react";
import styles from './Carousel.module.css';
import { Carousel as AntdCarousel } from 'antd';
import carouselImage1 from '../../assets/images/carousel_1.jpg';
import carouselImage2 from '../../assets/images/carousel_2.jpg';
import carouselImage3 from '../../assets/images/carousel_3.jpg';

export const Carousel: React.FC = () => {
    // 统一高度并保持图片纵横比，可以使用 object-fit: cover
    // preview={false} 关闭 antd Image 的预览弹窗，避免点击时放大
    return (
        <AntdCarousel autoplay className={styles.slider}>
            <div className={styles.slide}>
                <img src={carouselImage1} alt="carousel-1" />
            </div>
            <div className={styles.slide}>
                <img src={carouselImage2} alt="carousel-2" />
            </div>
            <div className={styles.slide}>
                <img src={carouselImage3} alt="carousel-3" />
            </div>
        </AntdCarousel>
    );
}