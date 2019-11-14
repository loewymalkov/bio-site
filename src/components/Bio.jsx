import React from 'react';

const images = [
  { id: 1, src: 'https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg', title: 'headStonk', subtitle: '@bigstonk', description: 'This is the stonks guy. Sed accumsan congue placerat. Curabitur et lorem pharetra, feugiat nibh ut, aliquam velit. Maecenas elit lectus, imperdiet eu auctor condimentum, placerat ac dui. Pellentesque aliquet, nisl eget bibendum efficitur, ligula ante placerat sem, id vehicula arcu augue vel leo. Aenean condimentum mi leo.' },
  { id: 2, src: 'https://cdn.drawception.com/drawings/1VwPZVQOfM.png', title: 'assistantStonk', subtitle: '@lilstonk', description: 'This is the other stonks guy. Sed accumsan congue placerat. Curabitur et lorem pharetra, feugiat nibh ut, aliquam velit. Maecenas elit lectus, imperdiet eu auctor condimentum, placerat ac dui. Pellentesque aliquet, nisl eget bibendum efficitur, ligula ante placerat sem, id vehicula arcu augue vel leo. Aenean condimentum mi leo.'}, 
  { id: 3, src: 'https://i.imgflip.com/35a1ly.jpg', title: 'notAStonk', subtitle: '@cantstonk', description: 'This is the not stonks person. Sed accumsan congue placerat. Curabitur et lorem pharetra, feugiat nibh ut, aliquam velit. Maecenas elit lectus, imperdiet eu auctor condimentum, placerat ac dui. Pellentesque aliquet, nisl eget bibendum efficitur, ligula ante placerat sem, id vehicula arcu augue vel leo. Aenean condimentum mi leo.'}
];

const imgStyles = {
  float: 'left',
  maxWidth: 300,
  margin: 20
};

const divStyles = {
  position: 'relative',
  overflow: 'auto',
  margin: 10
};

const textStyles = {
  paddingLeft: 455,
  paddingRight: 200,
  fontFamily: 'Bebas Neue'
};
const titleStyles = {
  paddingLeft: 450,
  paddingRight: 200,
  paddingTop: 2,
  fontFamily: 'Bebas Neue'
};
const subtitleStyles = {
  paddingLeft: 450,
  paddingRight: 200
};

function Bio(){
  return (
    <div className="row">
      { images.map(({id, src, title, subtitle, description}) => 
        <div className="col-md-6" style={divStyles}>
          <hr/>
          <img style={imgStyles} key={id} src={src}/>
          <h5 style={titleStyles}>{title}</h5>
          <h6 style={subtitleStyles}>{subtitle}</h6>
          <p style={textStyles}>{description}</p>
        </div>
      ) }
      <hr/>
    </div>
  );
}

export default Bio;