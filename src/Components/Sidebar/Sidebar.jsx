import React from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://lh3.googleusercontent.com/a/ALm5wu1ngu0I-aXVKOsRE9zKRPN2rgRbAI7fTBcBIoVx=s288-p-rw-no" />
        <strong>Caleb Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
