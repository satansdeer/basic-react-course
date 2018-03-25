import React from 'react'
import styles from './about-the-author.module.css'

const AboutTheAuthor = () => (
  <div className={styles.container}>
    <h3 className={styles.header}>About The Author</h3>
    <div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="https://pp.userapi.com/c628027/v628027303/2f8f2/Lj9uA2PnXPQ.jpg"
        />
      </div>
      <section className={styles.textBlock}>
        <p>
          Hey, I’m Maksim Ivanov and I help frontend developers take their
          coding skills and productivity to the next level.
        </p>
        <p>
          I work as software engineer for more than 8 years. I’ve been
          developing websites, online games and web applications — and I’d love
          to help you become a more proficient frontend developer.
        </p>
      </section>
    </div>
  </div>
)

export default AboutTheAuthor
