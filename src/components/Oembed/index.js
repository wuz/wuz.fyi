import React, { useState, useEffect } from 'react';
import { extract } from 'oembed-parser';

const useOembed = url => {
  const [embedData, setEmbedData] = useState(null);
  const [embedError, setEmbedError] = useState(null);
  useEffect(() => {
    extract(url)
      .then(data => {
        setEmbedData(data);
      })
      .catch(err => {
        setEmbedError(err);
      });
  }, [url]);
  return { embedData, embedError };
};

const Oembed = ({ url }) => {
  const { embedData, embedError } = useOembed(url);
  console.log(embedData, embedError);
  return <div />;
};

export default Oembed;
