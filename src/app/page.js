import Search from "@/svg/search";
import styles from "@/app/page.module.css";
import MySelect from "@/components/mySelect";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>TODO LIST</h1>
      <section>
        <div className={styles.search}>
          <input className={styles.searchInput} placeholder="Search note..." />
          <Search className={styles.icon} />
        </div>
        <div className={styles.allContainer}>
          {/* <select className={styles.select}>
            <option>All</option>
            <option>Complete</option>
            <option>Incomplete</option>
          </select> */}
          <MySelect />
        {/* <button>Save</button>  <button>Save</button> */}
        </div>
        {/* <div>
          <button>NEW NOTE +</button>
        </div> */}
      </section>
    </main>
  );
}
