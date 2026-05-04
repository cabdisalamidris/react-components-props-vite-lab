

const blogData = {
  name: "My Blog",
  image: "src/components/Screenshot_20260306_122431_One UI Home.jpg",
  about: "This is my blog where I write about web development.",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "may 1 2026",
      readTime: "5 min read",
       emoji: "⚛️",
      preview: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "Understanding Props and State",
      date: "May 2 2026",
      readTime: "10 min read",
      emoji:"📦",
      preview: "props allow you to pass data to your components, while state allows you to manage data within a component."
    },
    {
      id: 3,
      title: "why component structure is important",
      date: "May 3 2026",
      readTime: "15 min read",
      emoji: "🏗️",
      preview: "Braking your UI into components allows you to reuse code and makes your application easier to maintain.",
    },
  ],
};

export default blogData;
