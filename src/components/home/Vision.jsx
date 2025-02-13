'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import bg from '/public/alalaa.jpg'
import Loading from '@/app/loading';
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import mess1 from '/public/mess1.jpg'
import mess2 from '/public/7b466c61dc6afa662fbdeedbfd7ec13c.jpg'
export default function Book() {

    return (
        <section
            className="vision-section"
            style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        >

            <div className="container m-auto">
                <div className="vision-cont">
                    <motion.div
                        initial={{ opacity: 0, x: -300 }} // Initial animation state (faded and shifted left)
                        whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            // type: 'spring', // Using spring animation for smooth motion
                            bounce: 0.2, // Small bounce effect for the animation
                        }} className="vision-item">
                        <div className="vision-content">
                            <h3>رؤيتنا</h3>
                            {/* <p> {data?.our_vision.description} </p> */}
                            <p>أن نصبح الشريك المفضل في مجالات النقل، المقاولات، وخدمات الأمن والسلامة، من خلال تقديم حلول مبتكرة ومستدامة تعزز تجربة عملائنا وترفع معايير الجودة. </p>
                        </div>
                        <div className="vision-img-cont">
                            <div className="vision-img">
                                <figure>
                                    <Image src={mess1} width={200} height={200} alt="vision" />
                                </figure>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -300 }} // Initial animation state (faded and shifted left)
                        whileInView={{ opacity: 1, x: 0 }} // Animation state when in view (fully visible and reset position)
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            // type: 'spring', // Using spring animation for smooth motion
                            bounce: 0.2, // Small bounce effect for the animation
                        }} className="vision-item">
                        <div className="vision-content">
                            <h3>رسالتنا</h3>
                            {/* <p> {data?.our_message.description} </p> */}
                            <p>نلتزم بالتميز في تقديم خدماتنا المتنوعة، بالاعتماد على فريق عمل محترف وتقنيات متقدمة، مما يساهم في بناء مستقبل أكثر أماناً واستدامة. </p>
                        </div>
                        <div className="vision-img-cont">
                            <div className="vision-img">
                                <figure>
                                    <Image src={mess2} width={200} height={200} alt="vision" />
                                </figure>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section >
    );
}
