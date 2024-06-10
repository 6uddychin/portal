import React from 'react';
import { ReactComponent as Logo } from './components/images/logo-truck.svg'
import { ReactComponent as Profile} from './components/images/profile.svg'
import './Navbar.css'; // Assuming you have a CSS file for styles
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TuneIcon from '@mui/icons-material/Tune';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import KnowledgeArticles from './knowledgeArticles';
import knowledge from './knowledgeArticles';
import { Link } from 'react-router-dom';
import WorkOrders from './workOrder';
import Home from './home';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="truckLogo">
      <Link to="/Home">
        <Logo />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/WorkOrders">  <AssignmentLateIcon /></Link></li>
        <li><a href="/notification-center"><MarkUnreadChatAltIcon /></a></li>
        <li><Link to="/KnowledgeArticles">   <MenuBookIcon /></Link></li>
        <li><a href="/settings"><TuneIcon /></a></li>
        <li><div className="profile-img"><Profile /></div></li>
      </ul>
    </nav>
  );
}

export default Navbar;