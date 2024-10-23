import { Dessert } from '@/components/desserts/Desserts';

export async function fetchDesserts() {
  try {
    const baseUrl = 'http://localhost:3031';
    const response = await fetch(`${baseUrl}/desserts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Network does not work: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export const findDessert = async (name: string) => {
  const desserts = await fetchDesserts();
  const dessert = desserts.find((dessert: Dessert) => (dessert.name === name ? dessert.name : null));
  return dessert;
};
