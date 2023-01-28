const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'ze2IbIBGs1ji866fZQZm';

export const getBooks = async () => {
  const response = await fetch(`${baseURL}/apps/${appId}/books`);
  return response.json();
};

export const postBook = async (bookObj) => {
  await fetch(`${baseURL}/apps/${appId}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookObj),
  });
};

export const deleteBook = async (itemId) => {
  await fetch(`${baseURL}/apps/${appId}/books/${itemId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: itemId }),
  });
};
