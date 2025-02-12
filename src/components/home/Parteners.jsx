'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NumberTicker from '../ui/number-ticker';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';



export default function Parteners() {
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const headers = {
            lang: 'ar', // Change language dynamically based on state
        };
        // Fetch data from the API with Axios
        axios.get(`${API_BASE_URL}/counters`
            , {
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
    console.log(data);
    return (
        <div className="parteners" >
            <div className="container  m-auto" >

                <div className="nums">
                    <h3> ارقام عملائنا </h3>
                    {/* {
                        loading ? <Loading /> :
                            <div className="numbers-cont">
                                {
                                    data.map((item, index) =>
                                        <motion.div
                                            initial={{ y: 100, opacity: 0, }}
                                            whileInView={{ y: 0, opacity: 1, }}
                                            transition={{
                                                type: 'spring',
                                                bounce: 0.5,
                                                duration: index * .5,
                                            }}
                                            viewport={{ once: true }
                                            }
                                            className="number" key={index}>
                                            <h2>{item.title}</h2>
                                            <div className="needed">
                                                <NumberTicker value={item.counter} /> +
                                            </div>
                                            <p>{item.description}</p>
                                        </motion.div>
                                    )
                                }
                            </div>
                    } */}
                    <div className="numbers-cont">

                        <motion.div
                            initial={{ y: 100, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, }}
                            transition={{
                                type: 'spring',
                                bounce: 0.5,
                                duration: .5,
                            }}
                            viewport={{ once: true }
                            }
                            className="number" >
                            <h2>النقل البري</h2>
                            <div className="needed">
                                <NumberTicker value={160} /> +
                            </div>
                            <p>نقل أكثر من <NumberTicker value={160} /> مليون لتر وقود سنوياً باستخدام أسطول حديث ومجهز بأحدث التقنيات.

                                تقديم خدمات النقل لأكثر من <NumberTicker value={85} /> محطة وقود. </p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, }}
                            transition={{
                                type: 'spring',
                                bounce: 0.5,
                                duration: .5,
                            }}
                            viewport={{ once: true }
                            }
                            className="number" >
                            <h2>إدارة وتشغيل محطات الوقود</h2>
                            <div className="needed">
                                <NumberTicker value={5000} /> +
                            </div>
                            <p>إنشاء وتشغيل أكثر من <NumberTicker value={34} /> محطة وقود في المنطقة الجنوبية.

                                تقديم خدمات لأكثر من <NumberTicker value={5000} /> عميل يومياً عبر شبكة محطات متطورة.</p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, }}
                            transition={{
                                type: 'spring',
                                bounce: 0.5,
                                duration: .5,
                            }}
                            viewport={{ once: true }
                            }
                            className="number" >
                            <h2>المقاولات العامة:</h2>
                            <div className="needed">
                                <NumberTicker value={340} /> +
                            </div>
                            <p>
                                تنفيذ أكثر من <NumberTicker value={340} /> مشروع بناء وإنشاء منذ تأسيس الشركة.

                                توظيف فريق عمل يضم أكثر من <NumberTicker value={85} /> من المهندسين والفنيين والعمالة ذوي الخبرة العالية.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, }}
                            transition={{
                                type: 'spring',
                                bounce: 0.5,
                                duration: .5,
                            }}
                            viewport={{ once: true }
                            }
                            className="number" >
                            <h2>السلامة</h2>
                            <div className="needed">
                                <NumberTicker value={265} /> +
                            </div>
                            <p>
                                توريد وتركيب أكثر من  <NumberTicker value={265} /> نظام إطفاء وإنذار عبر مختلف القطاعات.

                                إصدار أكثر من  <NumberTicker value={760} /> شهادة اعتماد من الدفاع المدني.

                                توفير خدمات صيانة لأكثر من  <NumberTicker value={94} /> منشأة سنوياً.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0, }}
                            whileInView={{ y: 0, opacity: 1, }}
                            transition={{
                                type: 'spring',
                                bounce: 0.5,
                                duration: .5,
                            }}
                            viewport={{ once: true }
                            }
                            className="number" >
                            <h2>الأمن</h2>
                            <div className="needed">
                                <NumberTicker value={4500} /> +
                            </div>
                            <p>تركيب أكثر من <NumberTicker value={4500} /> كاميرا مراقبة في المنشآت السكنية والتجارية والحكومية.

                                تصميم وتنفيذ أكثر من <NumberTicker value={495} /> نظام أمني متكامل يشمل أجهزة الإنذار من السرقة وكاميرات المراقبة والبوابات الأمنية.

                                خدمة أكثر من <NumberTicker value={65} /> منشأة سنوياً بتقديم حلول أمنية شاملة </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}
