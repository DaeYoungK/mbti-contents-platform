import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TESTS } from '../../data/TESTS';

const ResultThumbnailList = ({ testParam }) => {
  const [testList, setTestList] = useState(TESTS);
  return (
    <div>
      {testList
      .filter((test) => (test?.info?.mainUrl != testParam))
      .map((item) => (
        <Link to={`/${item?.info?.mainUrl}`} key={`/${item?.info?.mainUrl}`}>
          <img
            style={{width: "100%"}} 
            src={item?.info?.thumbImage} 
            alt={item?.info?.mainTitle} />
        </Link>
      ))
      }
    </div>
  );
};

export default ResultThumbnailList;