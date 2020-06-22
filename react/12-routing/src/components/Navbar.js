import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>

                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/add">Add Product</Link>

                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/display">List Product</Link>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
      
    );
};

export default Navbar;