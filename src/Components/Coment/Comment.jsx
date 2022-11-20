import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
import goreh from "../../Assets/goreh.jpg";

export function Comment({ nameUser }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={goreh} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{nameUser}</strong>
              <time
                title="17 de novembro de 2022"
                dateTime="2022-11-17 21:31:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Excluir comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>Muito bom Caleb, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
