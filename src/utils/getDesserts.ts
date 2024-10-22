export async function fetchDesserts() {
  try {
    const baseUrl = 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/trips`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Network does not work: ${response.statusText}`);
    }

    const data = await response.json();

    return data.desserts;
  } catch (error) {
    throw error;
  }
}
