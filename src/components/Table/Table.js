import InsideTable from './InsideTable';

const Table = ({allStats}) => {
  return (
    <section>
      <h2>Distribución Regional en el país</h2>
      <InsideTable DATA={allStats} />
    </section>
  );
};

export default Table;
