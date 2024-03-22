import styles from "@/app/page.module.css";
export default function H1({children, isDarkMode}) {
  return (
    <h1 className={`${styles.h1} ${isDarkMode ? styles.darkText : ""}`}>
      {children}
    </h1>
  );
}
