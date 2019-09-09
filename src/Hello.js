import React from 'react'

const Hello =() => {
  /* with JSX
  return (
    <div className='dummyClass'>
      <h1>Hello World</h1>
    </div>
  )*/
  //without JSX
  return React.createElement(
    'div',
    {className: 'dummyClass'},
    React.createElement('h1', null, 'Hello World')
  )
}