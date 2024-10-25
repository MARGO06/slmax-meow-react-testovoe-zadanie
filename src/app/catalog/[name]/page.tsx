import { findDessert } from '@/utils/getDesserts';
import { Description } from '@/components/dessert/Dessert';
import style from '@/components/dessert/Dessert.module.scss';

export const revalidate = 3;

const decoderUrl = (param: string) => {
  return decodeURIComponent(param);
};

export default async function Dessert({ params }: { params: { name: string } }) {
  const dessertName = decoderUrl(params.name);
  const descriptionDessert = await findDessert(dessertName);

  return (
    <div className={style.main}>
      {descriptionDessert ? <Description descriptionDessert={descriptionDessert} /> : <p>No dessert found.</p>}
    </div>
  );
}
