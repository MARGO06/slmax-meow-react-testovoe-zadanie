import { Desserts } from '@/components/desserts/Desserts';

export const revalidate = 3;

export default function Catalog() {
  return (
    <main>
      <Desserts />
    </main>
  );
}
