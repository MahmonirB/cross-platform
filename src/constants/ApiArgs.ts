export const bookCategory = {
  arg: {
    url: '/books/v3/lists/names.json',
    key: ['bookList'],
  },
};

export const bookDetails = (value: string) => ({
  arg: {
    url: '/books/v3/lists.json',
    key: ['bookDetails'],
    params: { list: value },
  },
});
