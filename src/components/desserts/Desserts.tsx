import React from 'react';
import Image from 'next/image';
import style from '@/components/desserts/Desserts.module.scss';
import { fetchDesserts } from '@/utils/getDesserts';
import Link from 'next/link';

export type Dessert = {
  name: string;
  img: string;
  describe: string;
  price: string;
};

export const Desserts: React.FC = async () => {
  const desserts = await fetchDesserts();
  return (
    <div className={style.wrapper}>
      {desserts.map((dessert: Dessert) => (
        <div key={dessert.name} className={style.dessert}>
          <Link href={`/catalog/${dessert.name}`}>
            <Image src={dessert.img} alt={dessert.name} width={300} height={300} className={style.dessertImage} />
            <p>{dessert.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
