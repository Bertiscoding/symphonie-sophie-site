import React from 'react'

export const formatText = (text) => {
  // bold text: **text**
  // links: [link text](link url)

  return text.split(/\\n|\n/).map((line, lineIndex) => {
    const formattedLine = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/).map((part, index) => {
      if (part && part.startsWith('**') && part.endsWith('**')) {
        return <span className='font-semibold' key={index}>{part.slice(2, -2)}</span>;
      } 
      if (part && part.startsWith('[') && part.includes('](')) {
        const [text, url] = part.slice(1, -1).split('](');
        return <a href={url} className='ss-inline-link' key={index}>{text}</a>
      }
      return part
    });

    return (
      <React.Fragment key={lineIndex}>
        {formattedLine}
        <br />
      </React.Fragment>
    );
  });
};
