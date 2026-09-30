import { clsx } from "clsx";
import * as styles from "./AuthHero.css.js";

export default function AuthHero({
  authStatusText,
  isAuthError,
  isAuthenticated,
}) {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>30. React Query Auth</p>
      <h1 className={styles.title}>
        React Query로 만드는
        <br />
        회원가입과 로그인
      </h1>

      <article className={styles.statusCard}>
        <h2 className={styles.statusCardTitle}>로그인 상태</h2>
        <p
          className={clsx(
            styles.statusText,
            isAuthError && styles.statusError,
            isAuthenticated && styles.statusSuccess,
          )}
        >
          {authStatusText}
        </p>
      </article>
    </section>
  );
}
