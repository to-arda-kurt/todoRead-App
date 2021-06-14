import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import SectionBooks from '../../components/SectionBooks';

const ReadList = () => {
  return (
    <>
      <section className="ReadList">
        <SectionHeader header="The Books you’re planning to read..." />
        <SectionBooks />
      </section>
    </>
  );
};

export default ReadList;
