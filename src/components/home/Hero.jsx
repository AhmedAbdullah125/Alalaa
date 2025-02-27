'use client'
import React, { useEffect, useState } from 'react';
import bg from '/public/HeroBg.jpg'
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Hero() {
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const headers = {
            lang: 'ar', // Change language dynamically based on state
        };
        // Fetch data from the API with Axios
        axios.get(`${API_BASE_URL}/sliders`, {
            headers: headers,
        }).then(response => {
            setData(response.data.data);  // Set the response data to state
            setLoading(false);  // Set loading to false

        })
            .catch(error => {
                setError(error);  // Handle any errors
                console.error('Error fetching data:', error);
                setLoading(false)
            });

    }, []);  // Run this effect whenever the `language` changes
    return (
        <>
            {
                loading ?
                    <Loading />
                    :
                    <div className="hero" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className="overlay">
                            <div className="heading">
                                {
                                    loading ? <Loading /> :
                                        <Swiper
                                            slidesPerView={3.1}
                                            spaceBetween={24}
                                            autoplay={false}
                                            dir={'rtl'}
                                            loop={true}
                                            modules={[Autoplay, Navigation, Pagination]}
                                            breakpoints={{
                                                1400: {
                                                    slidesPerView: 1,
                                                },
                                                1100: {
                                                    slidesPerView: 1,
                                                },
                                                767: {
                                                    slidesPerView: 5,
                                                },
                                                640: {
                                                    slidesPerView: 1,
                                                    autoplay: false,
                                                    spaceBetween: 16
                                                },
                                                100: {
                                                    slidesPerView: 1,
                                                    autoplay: false,
                                                    spaceBetween: 16
                                                }
                                            }}
                                        >
                                            {data.map((item, index) =>
                                                <SwiperSlide key={index}>
                                                    <h1>طور أعمالك مع حلولنا المتكاملة في النقل والمقاولات والسلامة.</h1>
                                                    <p>رواد في تقديم حلول متكاملة للنقل البري، إدارة وتشغيل محطات الوقود، المقاولات، الأمن والسلامة. نعمل بمعايير الجودة والابتكار لدعم تطلعات عملائنا وتحقيق رؤية المملكة 2030</p>
                                                    <div className="links">
                                                        <Link href="/#services" className='sec-link' >تعرف علي خدماتنا </Link>
                                                    </div>
                                                </SwiperSlide>
                                            )}
                                            <SwiperSlide>
                                                <h1>طور أعمالك مع حلولنا المتكاملة في النقل والمقاولات والسلامة.</h1>
                                                <p>رواد في تقديم حلول متكاملة للنقل البري، إدارة وتشغيل محطات الوقود، المقاولات، الأمن والسلامة. نعمل بمعايير الجودة والابتكار لدعم تطلعات عملائنا وتحقيق رؤية المملكة 2030</p>
                                                <div className="links">
                                                    <Link href="/#services" className='sec-link' >تعرف علي خدماتنا </Link>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                }

                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
