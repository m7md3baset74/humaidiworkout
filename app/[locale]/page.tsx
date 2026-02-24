import Hero from '@/src/copmonents/Hero'
import Navbar from '@/src/copmonents/Navbar'
import Programs from '@/src/copmonents/Programs'
import React from 'react'
import TransformationsSection from '../../src/copmonents/TransformationsSection';
import ClientReviewsSection from '../../src/copmonents/ClientReviewsSection';
import Pricing from '../../src/copmonents/PricingSection';
import WhyHumaidi from '@/src/copmonents/WhyHumaidi';
import Footer from '@/src/copmonents/Footer';

export default function Home() {
  return <>
  <main className='min-h-screen'>
    <Navbar/>
    <Hero/>
    <TransformationsSection/>
    <Programs/>
    <ClientReviewsSection/>
    <Pricing/>
    <WhyHumaidi/>
    <Footer/>
  </main>
  </>
}
