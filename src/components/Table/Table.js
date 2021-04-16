import InsideTable from "./InsideTable";

const Table = ({ allStats }) => {
  return (
    <section>
      <h2>Distribución Regional en el país</h2>
      {/* <p>Lorem ipsum dolor sit amet.</p> */}
      <InsideTable DATA={allStats} />
    </section>
  );
};

export default Table;
