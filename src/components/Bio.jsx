import React from 'react';


const images = [
  { id: 1, src: 'https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg', title: 'headStonk' },
  { id: 2, src: 'https://cdn.drawception.com/drawings/1VwPZVQOfM.png', title: 'assistantStonk'}
];

function Bio(){
  return (
    <div>
      { images.map(({id, src, title}) => <img key={id} src={src} title={title}/>) }
    </div>
  );
}

export default Bio;