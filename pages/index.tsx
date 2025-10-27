import Head from 'next/head';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Hero } from '@/components/Sections/Hero';
import { Features } from '@/components/Sections/Features';
import { Merchant } from '@/components/Sections/Merchant';
import { CTA } from '@/components/Sections/CTA';

export default function Home() {
  return (
    <>
  <Head>
    <title>Sharp Pocket - Pocket-Sized Payment Power</title>
    <meta name="description" content="Pay bills, buy airtime and data, settle electricity, and send or withdraw money—fast, simple, and secure." />
  </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <Hero />
        <Features />
        <Merchant />
        <CTA />
        <Footer />
      </div>
    </>
  );
}