import React from 'react';

const Nav = () => {
	return 	 <nav className="nav">
		        <ul>
		          <li><a href="#">Profile</a></li>
		          <li><a href="#">News</a></li>
		          <li><a href="#">Music</a></li>
		          <li><a href="#">Messages</a></li>
		          <li><a href="#">Settings</a></li>
		          <li className="last-menu-link"><a href="#">Log out</a></li>
		        </ul>
		      </nav>
};

export default Nav;