import React from 'react';

const ScrollbarStyles = () => {
  return (
    <style jsx global>{`
      /* Width of the entire scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: rgba(45, 80, 22, 0.1);
        border-radius: 5px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #4ADE80, #2D5016);
        border-radius: 5px;
        border: 2px solid rgba(45, 80, 22, 0.1);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #22C55E, #365314);
      }

      /* Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #4ADE80 rgba(45, 80, 22, 0.1);
      }

      /* For Internet Explorer */
      body {
        -ms-overflow-style: none;
      }
    `}</style>
  );
};

export default ScrollbarStyles;
