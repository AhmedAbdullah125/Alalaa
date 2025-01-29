'use client'
import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Parteners from '../components/home/Parteners';
import Who from '../components/home/Who';
import Vision from '../components/home/Vision';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
export default function Home() {
  
  return (
    <main>
      <Hero/>
      <Who/>
      <Vision/>
      <Parteners/>
      <About/>
      <Services/>
      <Contact />
      {/* <Brief/> */}
      {/* <Discount/> */}
      {/* <News/> */}
    </main>
  );
}
