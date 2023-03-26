import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FearGreedIndex = () => {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const fetchIndex = async () => {
      const response = await axios.get(
        'https://api.alternative.me/fng/?limit=1'
      );
      const indexValue = response.data.data[0].value;
      setIndex(indexValue);
    };
    fetchIndex();
  }, []);

  return (
    <div className="container">
      <h1>Fear &amp; Greed Index</h1>
      {index && <p>{index}</p>}
    </div>
  );
};

export default FearGreedIndex;
