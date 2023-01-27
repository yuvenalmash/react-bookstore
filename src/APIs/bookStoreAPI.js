const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = '5PHZk8CiiRMye2JyvULz';

export const getBooks = async () => {
  try {
    const response = await fetch(`${baseURL}/apps/${appId}/books`);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const postBook = async (bookObj) => {
  console.log(bookObj);
  const response = await fetch(`${baseURL}/apps/${appId}/books`, {
    method: 'POST',
    BODY: JSON.stringify(bookObj),
  });
  return response.json();
};

export const deleteBook = async (itemId) => {
  await fetch(`${baseURL}/apps/${appId}/books/${itemId}`, {
    method: 'DELETE',
    BODY: JSON.stringify({ item_id: itemId }),
  });
};
