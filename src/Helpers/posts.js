import goreh from "../Assets/goreh.jpg";
export const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ALm5wu1ngu0I-aXVKOsRE9zKRPN2rgRbAI7fTBcBIoVx=s288-p-rw-no",
      name: "Caleb Lima",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: "Lancei braba com Node.js, segue o link:",
      },
      {
        type: "link",
        content: "https://github.com/jovemcleb/blogs-api",
      },
    ],
    publishedAt: new Date('2022-11-03 19:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: goreh,
      name: "Adriano Rodrigues",
      role: "Back-end Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Salve galeraa!!!",
      },
      {
        type: "paragraph",
        content: "Acabei de finalizar uma API muito legal chamada Car Shopping",
      },
      {
        type: "paragraph",
        content: "Se liga no Link:",
      },
      {
        type: "link",
        content: "https://github.com/AdrianoRdg/car-shop",
      },
    ],
    publishedAt: new Date('2022-05-03 21:00:00'),
  }
];