import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/endreumrb.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Endreu Benites</strong>
              <time title='11 de Maio às 11:13' dateTime='2022-05-11 11:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Munto bom Devon, parabéns!! </p>
        </div>
        <footer>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  );
}

export default Comment;