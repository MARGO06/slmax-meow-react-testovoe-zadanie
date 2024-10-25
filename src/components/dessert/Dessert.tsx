import React from 'react';
import Image from 'next/image';
import { Dessert } from '@/components/desserts/Desserts';
import style from '@/components/dessert/Dessert.module.scss';

export const Description: React.FC<{ descriptionDessert: Dessert }> = ({ descriptionDessert }) => {
  return (
    <div className={style.information}>
      <div className={style.image}>
        <Image src={descriptionDessert.img} alt="dessert" width={300} height={300} className={style.dessertImage} />
      </div>
      <div className={style.description}>
        <h2>{descriptionDessert.name}</h2>
        <p>{descriptionDessert.describe}</p>
        <p className={style.price}>
          Price: <span>{descriptionDessert.price}</span>
        </p>
      </div>
    </div>
  );
};
