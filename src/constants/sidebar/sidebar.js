import React, { Component } from 'react'
import './sidebar.css'
import menu from '../menu.png'

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        };
      }

      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
        })
      };

    render() {

        const navlinks = [
            { key: "Home", name: "Home"},
            { key: "Explore",  name: "Explore"},
            { key: "Notification", name: "Notification"},
            { key: "Messages", name: "Messages"}
          ];
          const contactLink = [
            { key: "Contact Us", name: "Contact US"},
            { key: "Query",  name: "Question?"}
          ];
      
          let sideDrawer = "Navbar";
          let backDrop = false;
          let NavbarLink;
      
          if(this.state.sideDrawerOpen){
            sideDrawer = "NavBar open"
            backDrop = true
            NavbarLink = this.drawerToggleClickHandler
          }


        return (
            <div className="SideDrawer">
        <button className="toggle-button" onClick={this.drawerToggleClickHandler}>
        <img className="burgermenu" width="40px" height="35px" src={menu} alt="oss sidebar"/>
        </button>
        <div className={sideDrawer}>
          <nav className="menu">
            <div className="menu-header">
            <a href="/">
              
            </a>
          </div>
          <div className="menu-body p-2">
              <ul>
                {navlinks.map((link,index) => {
                  return (
                      <li className="nav-list" onClick= {NavbarLink} key={index}>
                        <a style={{cursor: 'pointer'}} exact className="p-3" href='/'>{link.name}
                        </a>
                      </li>
                  );
                })}
              </ul>
              <hr width="80%"/>
              <ul>
                {contactLink.map((link,index) => {
                  return (
                      <li className="nav-list" onClick= {NavbarLink} key={index}>
                        <a style={{cursor: 'pointer'}} exact className="p-3" href='/'>{link.name}
                        </a>
                      </li>
                  );
                })}
              </ul>
          </div>
          </nav> 
        </div>
        <Backdrop show={backDrop} clicked={this.drawerToggleClickHandler}/>
      </div>
    );
  }
}
export default sidebar
