const mockedBook = {
  author: 'Leo Lionni',
  pages: [
    {
      content: 'Parrots are green',
      pageIndex: 0,
      tokens: [
        {
          position: [0, 7],
          value: 'parrots',
        },
        {
          position: [8, 11],
          value: 'are',
        },
        {
          position: [12, 17],
          value: 'green',
        },
      ],
    },
    {
      content: 'goldfish are red',
      pageIndex: 1,
      tokens: [
        {
          position: [0, 8],
          value: 'goldfish',
        },
        {
          position: [9, 12],
          value: 'are',
        },
        {
          position: [13, 16],
          value: 'red',
        },
      ],
    },
  ],
};

export default mockedBook;
