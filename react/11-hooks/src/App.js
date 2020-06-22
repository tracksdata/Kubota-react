import React from 'react';
import { Navbar, Icon, Collapsible, CollapsibleItem } from 'react-materialize'
import ClassCounter from './components/use-state/ClassCounter';
import HookCounter from './components/use-state/HookCounter';
import HookList from './components/use-state/HookList';
import HookUserForm from './components/use-state/HookUserForm';
import ClassAutoCount from './components/use-effect/ClassAutoCount';
import HookAutoCount from './components/use-effect/HookAutoCount';
import HookMouseMove from './components/use-effect/HookMouseMove';
import HookTitleChange from './components/use-effect/HookTitleChange';
import UserHook from './components/use-effect/UserHook';
import Root from './components/use-context/Root';
import HookVotingBox from './components/use-reducer/HookVotingBox';
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
          expanded={false}
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
          expanded={false}
          header="use-effect"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >
          <div className="row">
            <div className="col s6">
              <ClassAutoCount />
            </div>

            <div className="col s6">
              <HookAutoCount />
            </div>
            <div className="col s6">
              <HookMouseMove />
            </div>

            <div className="col s6">
              <HookTitleChange />
            </div>
            <div className="col s12">
              <UserHook />
            </div>

          </div>


        </CollapsibleItem>
      </Collapsible>

      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="use-effect"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

          <Root />

        </CollapsibleItem>
      </Collapsible>

      <Collapsible accordion>
        <CollapsibleItem
          expanded={true}
          header="use-effect"
          icon={<Icon>filter_drama</Icon>}
          node="div"
        >

          <HookVotingBox/>

        </CollapsibleItem>
      </Collapsible>

    </div>
  );
};

export default App;