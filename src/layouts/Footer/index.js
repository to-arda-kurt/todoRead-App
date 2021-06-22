import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        Portfolio Project{' '}
        <span>
          {' '}
          <a
            href="https://github.com/to-arda-kurt/todoRead-App"
            target="_blank"
            rel="noreferrer"
          >
            Arda Kurt
          </a>
        </span>
      </h4>
    </div>
  );
};

export default Footer;
