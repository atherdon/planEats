import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connectProfile, logout} from '../auth';
import recipe from './images/white_notebook.png';
import calendar from './images/white_calendar.png';
import cart from './images/white_shop.png';
import eat from './images/white_cook.png';
import prof from './images/white_prof.png';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import logo from './images/planEats_logo.png';


import './Site.css';


class Site extends Component {
  static propTypes = {
    ...connectProfile.PropTypes,
    children: PropTypes.any
  };

  render() {
    return (
      <div className="Site">
          {this.renderUserControls()}
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    );
  }

  renderUserControls() {
    const {profile} = this.props;
    var path=this.props.location.pathname;
    if (profile) {
      return (
       <div>
         <div id="desktop-header">

           <img src={logo}/>
           <Link to="/profile/edit">
             <img id="header-image" src={prof} />
           </Link>
         </div>
         <Navbar className="Site-header"
                 inverse collapseOnSelect>

           <Navbar.Header className="menu-header">
             <Link to="/profile/edit">
               <img id="header-image" src={prof} />
             </Link>
             &nbsp;
             <img id="header-logo" src={logo} alt="Logo"/>
           <Navbar.Toggle />
           </Navbar.Header>

           <Navbar.Collapse className="contain-menu-drop">
             <Nav >
               <div className="space-fill left-sideOf" />
              <Link to="/calendar">
               <img className="menu-item-drop" src={calendar} />
               <div className="space-fill">Plan</div>

              </Link>
              <Link to="/recipe">
               <img className="menu-item-drop" src={recipe} />
               <div className="space-fill">Recipes</div>

              </Link>
              <Link to="/shop">
                <img className="menu-item-drop" src={cart} />
               <div className="space-fill">Shop</div>


              </Link>
               <Link to="/eat">
                <img className="menu-item-drop" src={eat} />
                <div className="space-fill right-sideOf">Eat</div>

               </Link>
             </Nav>
           </Navbar.Collapse>

         </Navbar>


          {/*{path==='/profile/edit'*/}
            {/*&& <img className="Site-profilePicture"*/}
                    {/*src={profile.picture}*/}
                    {/*alt={profile.nickname} />}*/}
          {/*<Link to="/profile/edit">{profile.nickname}</Link> &middot; <Link to="/calendar">Plan</Link> &middot; <Link to="/shop">Shop</Link> &middot; <a onClick={() => logout()}>Log Out</a>*/}
          <a onClick={() => logout()}>Log Out</a>
          </div>
      );
    } else {
      return (
        <div>
          <div id="desktop-header">

            <img src={logo}/>
            <Link to="/profile/edit">
              <img id="header-image" src={prof} />
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default connectProfile(Site);
