import React from 'react';
import style from '@/components/header/Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1>SWEET LIFE</h1>
    </header>
  );
};
