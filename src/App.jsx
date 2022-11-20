import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Post } from "./Components/Posts/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  );
}
