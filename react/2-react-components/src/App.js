import React from 'react';
import Greet from './components/Greet';
import Product from './components/Product';
import StoryBox from './components/StoryBox';

let App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <hr/>
      <Greet/>
      <hr/>
      <Product/>

      <hr/>
      <StoryBox/>
    </div>
  )
}

export default App;