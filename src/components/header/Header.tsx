import React from 'react';
import style from '@/components/header/Header.module.scss';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1>SWEET LIFE</h1>
      </Link>
    </header>
  );
};
