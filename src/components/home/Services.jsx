'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import img from '/public/alalaa.jpg'
export default function About() {

    return (
        <div className="about" >
            <div className="container m-auto" id='services'>
                <h2>كيف يمكننا مساعدتك..؟</h2>
                <div className="services-conr">

                    <Swiper
                        slidesPerView={3.1}
                        spaceBetween={24}
                        autoplay={false}
                        dir={'rtl'}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            1400: {
                                slidesPerView: 3.1,
                            },
                            1100: {
                                slidesPerView: 3.1,
                            },
                            767: {
                                slidesPerView: 2.5,
                            },
                            640: {
                                slidesPerView: 2.1,
                                autoplay: false,
                                spaceBetween: 16
                            },
                            100: {
                                slidesPerView: 1.1,
                                autoplay: false,
                                spaceBetween: 16
                            }
                        }}
                    >

                        <SwiperSlide>
                            <motion.div
                                initial={{ y: 100, opacity: 0, }}
                                whileInView={{ y: 0, opacity: 1, }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.5,
                                    duration: .5,
                                }}
                                viewport={{ once: true }}
                                className="option"
                            >
                                <div className="img-cont">
                                    {/* <Image src={item.cover} width={200} height={200} alt="Mazar"></Image> */}
                                    <Image src={img} width={200} height={200} alt="Mazar"></Image>
                                </div>
                                <div className="text">
                                    <h2>النقل البري</h2>
                                    <p>تستخدم شركة الآلاء أسطولاً حديثاً ومجهزاً بأنظمة متقدمة لضمان سلامة شحنات الوقود ودقتها.

                                        إدارة وتشغيل محطات الوقود:

                                        إنشاء محطات حديثة تخدم جميع احتياجات العملاء على أعلى المعايير.

                                        إدارة تشغيل المحطات بما يضمن الكفاءة والجودة العالية.

                                        توفير خدمات نقل الوقود. </p>
                                    <Link href={`/`} className="btn"><span>اعرف اكتر </span> <i className="fa-solid fa-chevron-left"></i></Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                initial={{ y: 100, opacity: 0, }}
                                whileInView={{ y: 0, opacity: 1, }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.5,
                                    duration: .5,
                                }}
                                viewport={{ once: true }}
                                className="option"
                            >
                                <div className="img-cont">
                                    {/* <Image src={item.cover} width={200} height={200} alt="Mazar"></Image> */}
                                    <Image src={img} width={200} height={200} alt="Mazar"></Image>
                                </div>
                                <div className="text">
                                    <h2>المقاولات العامة </h2>
                                    <p>تنفيذ مشاريع إنشاء وترميم المباني والبنية التحتية.

                                        تقديم حلول متكاملة تشمل الأعمال الكهربائية والميكانيكية.

                                        تنفيذ مشاريع الطرق والإنارة بما يتماشى مع أعلى المعايير.

                                        متخصصون في إنشاء محطات الوقود. </p>
                                    <Link href={`/`} className="btn"><span>اعرف اكتر </span> <i className="fa-solid fa-chevron-left"></i></Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                initial={{ y: 100, opacity: 0, }}
                                whileInView={{ y: 0, opacity: 1, }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.5,
                                    duration: .5,
                                }}
                                viewport={{ once: true }}
                                className="option"
                            >
                                <div className="img-cont">
                                    {/* <Image src={item.cover} width={200} height={200} alt="Mazar"></Image> */}
                                    <Image src={img} width={200} height={200} alt="Mazar"></Image>
                                </div>
                                <div className="text">
                                    <h2>السلامة</h2>
                                    <p>تركيب وصيانة أنظمة الإطفاء والإنذار المتطورة.

                                        تقديم عقود صيانة شاملة وخدمات إصدار تراخيص الدفاع المدني.

                                        توفير حلول مبتكرة تلبي احتياجات السلامة المتنوعة. </p>
                                    <Link href={`/`} className="btn"><span>اعرف اكتر </span> <i className="fa-solid fa-chevron-left"></i></Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
