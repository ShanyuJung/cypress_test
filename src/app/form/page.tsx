"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { FormEvent, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!firstNameRef.current || !lastNameRef.current) return;

    router.push(
      `result?firstName=${firstNameRef.current.value}&lastName=${lastNameRef.current.value}`
    );
  };

  return (
    <main className={styles.main}>
      <form onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>First Name</label>
          <input required ref={firstNameRef} id="firstName" />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>Last Name</label>
          <input required ref={lastNameRef} id="lastName" />
        </div>
        <button>Submit</button>
      </form>
    </main>
  );
}
