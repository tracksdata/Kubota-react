import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

    <div className="container mt-3">

      <div className="alert alert-info text-center">
        <h1>Welcome to my App</h1>
      </div>


      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header">my header</div>
            <div className="card-body">
              <h1>card body-1</h1>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card-header">my header</div>
            <div className="card-body">
              <h1>card body-2</h1>
            </div>
          </div>
        </div>


        <div className="col-4">
          <div className="card">
            <div className="card-header">my header</div>
            <div className="card-body">
              <h1>card body-3</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="card">
            <div className="card-header">my header</div>
            <div className="card-body">
              <h1>entire row</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-3">
      <div className="col-8">
          <div className="card">
            <div className="card-header">my header</div>
            <div className="card-body">
              <h1>8 columns</h1>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card-header">my header</div>
            <div className="card-body">
              <h1>4 columns</h1>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default App;