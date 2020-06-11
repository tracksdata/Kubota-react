import React, { Component } from 'react';
import { Navbar, Icon, CollapsibleItem, Collapsible } from 'react-materialize';

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
            header="react components"
            icon={<Icon>filter_drama</Icon>}
            node="div"
          >

            <div>
              <h1>Demo1</h1>
            </div>

            <div>
              <h1>Demo2</h1>
            </div>


          </CollapsibleItem>


        </Collapsible>





      </div>
    );
  }
}

export default App;