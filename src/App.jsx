import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Post } from "./Components/Posts/Post";
import { posts } from "./Helpers/posts";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
