import React from 'react'

export const formatText = (text) => {

  return text.split(/\\n|\n/).map((line, lineIndex) => {
    // bold text (**text**)
    const formattedLine = line.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span className='font-semibold' key={index}>{part.slice(2, -2)}</span>;
      }
      return part;
    });

    return (
      <React.Fragment key={lineIndex}>
        {formattedLine}
        <br />
      </React.Fragment>
    );
  });
};
