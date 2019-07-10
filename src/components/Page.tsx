import React from 'react';
import Layout from './layout';
import Main from './Main';

const Page = ({ children }) => {
  return (
    <Layout>
      <Main>{children}</Main>
    </Layout>
  );
};

export default Page;
