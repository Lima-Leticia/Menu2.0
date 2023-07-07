export async function create(food) {
  try {
    const res = await fetch('http://localhost:3001/menu', {
      method: 'POST',
      body: JSON.stringify(food),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Erro ao salvar a comida.');
    }

    const createdFood = await res.json();
    return createdFood;
  } catch (error) {
    console.error('Erro ao salvar a comida:', error);
    throw error;
  }
}
