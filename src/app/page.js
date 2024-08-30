'use client';
import React from 'react';

import Header from '@/components/Header';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <QRCodeGenerator />
      <Footer />
    </>
  );
}
