import React, { ReactNode } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import style from '@/components/mainLayout/MainLayout.module.scss';

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.contact}>{children}</div>
      <Footer />
    </>
  );
};
