import React from 'react';
import { Navbar, Icon, Collapsible, CollapsibleItem } from 'react-materialize'
import ClassCounter from './components/use-state/ClassCounter';
import HookCounter from './components/use-state/HookCounter';
import HookList from './components/use-state/HookList';
import HookUserForm from './components/use-state/HookUserForm';
const App = () => {
  return (
    <div className="container">
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">react hooks</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
      />

      <hr />


      <Collapsible accordion>
        <CollapsibleItem
          expanded={true}
          header="use-state"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <div className="row">
            <div className="col s6">
              <ClassCounter />
            </div>
            <div className="col s6">
              <HookCounter />
            </div>
          </div>

          <div className="col s6">
            <HookList />
          </div>

          <div>
            <HookUserForm />
          </div>

        </CollapsibleItem>

      </Collapsible>

      <Collapsible accordion>
        <CollapsibleItem
          expanded={true}
          header="use-effect"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <h1>Use effect code</h1>
        </CollapsibleItem>
      </Collapsible>

    </div>
  );
};

export default App;