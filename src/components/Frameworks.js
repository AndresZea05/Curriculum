import React from 'react';

const Frame = (props) => {
  const myframe = (
    <div>
      {props.Frame.map((fr) =>
        <div className='item w33' key={fr.name}>
          <h3>{fr.name}</h3>
          <div className='skills'>
            <span style={{width: fr.percentage}}></span>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <h2>Frameworks</h2>
      {myframe}
    </div>
  )
};

export default Frame;
