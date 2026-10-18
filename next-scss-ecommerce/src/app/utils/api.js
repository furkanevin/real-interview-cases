export async function getByCategory(category, limit = 100) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}?limit=${limit}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Fake Store API, olmayan bir id için 200 + boş gövde döndürür; bu durumda null döner
export async function getById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const text = await res.text();
  return text ? JSON.parse(text) : null;
}
