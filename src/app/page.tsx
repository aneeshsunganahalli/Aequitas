import Image from 'next/image';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>What is Aequitas?</h1>
          <p className={styles.heroSubtitle}>
            The Ancient Roman Concept of Justice and Fairness
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.definitionSection}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>The Meaning of Aequitas</h2>
            <p className={styles.definition}>
              <span className={styles.highlight}>Aequitas</span> (genitive aequitatis) is the Latin concept of justice, conformity, symmetry, or fairness. 
              It is the origin of the English word <span className={styles.highlight}>equity</span>.
            </p>
            <p className={styles.description}>
              In ancient Rome, it could refer to either the legal concept of equity, or fairness between individuals.
            </p>
          </div>
          
          <div className={styles.imageCard}>
            <Image
              src="/post1.png"
              alt="Aequitas - Roman concept of justice"
              width={500}
              height={400}
              className={styles.image}
              priority
            />
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.imageCard}>
            <Image
              src="/post2.png"
              alt="Representation of fairness and equity"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Justice and Symmetry</h2>
            <p className={styles.description}>
              The concept of Aequitas represents more than just legal justice—it embodies the fundamental 
              principles of balance, proportion, and moral fairness that were central to Roman philosophy 
              and governance.
            </p>
            <p className={styles.description}>
              Today, the legacy of Aequitas lives on in our modern legal systems through the principle 
              of equity, ensuring fairness and justice for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
