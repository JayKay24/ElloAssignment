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
    {
      content: 'elephants are gray',
      pageIndex: 2,
      tokens: [
        {
          position: [0, 9],
          value: 'elephants',
        },
        {
          position: [10, 13],
          value: 'are',
        },
        {
          position: [14, 18],
          value: 'gray',
        },
      ],
    },
    {
      content: 'pigs are pink. All animals have a color of their own',
      pageIndex: 3,
      tokens: [
        {
          position: [0, 4],
          value: 'pigs',
        },
        {
          position: [5, 8],
          value: 'are',
        },
        {
          position: [9, 13],
          value: 'pink',
        },
        {
          position: [15, 18],
          value: 'all',
        },
        {
          position: [19, 26],
          value: 'animals',
        },
        {
          position: [27, 31],
          value: 'have',
        },
        {
          position: [32, 33],
          value: 'a',
        },
        {
          position: [34, 39],
          value: 'color',
        },
        {
          position: [40, 42],
          value: 'of',
        },
        {
          position: [43, 48],
          value: 'their',
        },
        {
          position: [49, 52],
          value: 'own',
        },
      ],
    },
  ],
};

export default mockedBook;
