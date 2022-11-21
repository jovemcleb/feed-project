import React from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Coment/Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const dateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          if (type === "paragraph") {
            return <p>{content}</p>;
          } else if (type === "link") {
            return (
              <p>
                <a href={content}>{content}</a>
              </p>
            );
          }
        })}
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
