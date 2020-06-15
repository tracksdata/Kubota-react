import React, { Component } from 'react';
import { Navbar, Icon, CollapsibleItem, Collapsible } from 'react-materialize';
import Greet from './components/Greet';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="/">React Components</a>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
        />


        <Collapsible accordion>
          <CollapsibleItem
            expanded={true}
            header="App Component"
            icon={<Icon>filter_drama</Icon>}
            node="div"
          >

            <div>
             <h1>App Component</h1>
            </div>

          </CollapsibleItem>

          <CollapsibleItem
            expanded={true}
            header="Greet Component"
            icon={<Icon>filter_drama</Icon>}
            node="div"
          >
            <div>
              <Greet />
            </div>

          </CollapsibleItem>


        </Collapsible>





      </div>
    );
  }
}

export default App;