export const bookCategories = {
  arg: {
    url: '/books/v3/lists/names.json',
    key: ['bookList'],
  },
};

export const bookCategoryList = (value: string) => ({
  arg: {
    url: '/books/v3/lists.json',
    key: ['BookCategoryList'],
    params: { list: value },
  },
});
