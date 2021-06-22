import React from 'react';
import SectionBooks from '../../components/SectionBooks';
import ReadSummary from '../../components/ReadSummary';

const ReadList = () => {
  return (
    <>
      <section className="ReadList">
        <ReadSummary />
        <SectionBooks />
      </section>
    </>
  );
};

export default ReadList;
