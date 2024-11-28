import  { useEffect, useState } from 'react';
import { getTestResults } from '../api/testResults';
import TestResultItem from '../components/TestResultItem';

const TestResultList = ({ user }) => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    const filteredData = data.filter(
      (item) => item.visibility || item.userId === user.id
    );
    setResults(filteredData);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1>테스트 결과 목록</h1>
      {results.map((result) => (
        <TestResultItem
          key={result.id}
          result={result}
          user={user}
          refreshResults={fetchResults}
        />
      ))}
    </div>
  );
};

export default TestResultList;