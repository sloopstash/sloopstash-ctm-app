import React from 'react';

const ContextManager = ({ contexts, children }) => {
  return contexts.reduceRight(
    (acc, ContextProvider) => <ContextProvider>{acc}</ContextProvider>,
    children
  );
};

export default ContextManager;
