import styles from "./Header.module.scss";

const App: React.FC = () => {
  return (
    <header className={styles.container}>

      <div className={styles.logo}>Logo</div>
    </header >
  );
};

export default App;