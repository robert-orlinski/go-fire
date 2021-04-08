const ResultsListInner = ({ results }) => {
  return results && results.map((result) => result.name);
};

export default ResultsListInner;
