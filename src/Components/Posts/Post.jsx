import React from "react";
import { Comment } from "../Coment/Comment";
import styles from "./Post.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src="https://lh3.googleusercontent.com/a/ALm5wu1ngu0I-aXVKOsRE9zKRPN2rgRbAI7fTBcBIoVx=s288-p-rw-no" />
          <div className={styles.authorInfo}>
            <strong>Caleb Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="17 de novembro de 2022" dateTime="2022-11-17 21:31:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Lancei braba com Node.js, segue o link:</p>
        <p>
          <a href="https://github.com/jovemcleb/blogs-api" target="_blank">
            Blogs API
          </a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#APIdeBlog</a>{" "}
          <a href="">#theProject</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment nameUser="Adriano Rodrigues" />
      </div>
    </article>
  );
}
