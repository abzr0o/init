import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/loginButtons.module.scss";

function LoginButtons() {
  const router = useRouter();
  return (
    <>
      <Link href={"/login"}>
        <button className={`${styles.login} ${styles.bt} small`}>login</button>
      </Link>
      <Link href={"/signup"}>
        <button className={`${styles.signup} ${styles.bt} small`}>
          sign up
        </button>
      </Link>
    </>
  );
}

export default LoginButtons;
