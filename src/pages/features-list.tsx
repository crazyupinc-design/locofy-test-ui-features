import { FunctionComponent } from "react";
import styles from "./features-list.module.css";
const FeaturesList: FunctionComponent = () => {
  return (
    <div className={styles.featuresList}>
      <article className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <b className={styles.title}>Features section</b>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
                Etiam sodales ac felis id interdum.
              </div>
            </div>
            <div className={styles.description}>Learn more</div>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.feature}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.description1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros.
            </div>
          </div>
          <div className={styles.feature}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.description1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros.
            </div>
          </div>
          <div className={styles.feature}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.description1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros.
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturesList;
