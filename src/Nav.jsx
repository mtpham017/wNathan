import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        {/* Other navigation links */}
        <li><Link to="/new">New Page</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
