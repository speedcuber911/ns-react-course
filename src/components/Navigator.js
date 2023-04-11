import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function CustomNavItem(props) {
  return (
    <NavItem>
      <Link to={props.path}>{props.navHeading}</Link>
    </NavItem>
  );
}

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigationItems = useLoaderData();
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">MultiScreen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {navigationItems.map((navItem) => (
              <CustomNavItem
                navHeading={navItem.componentName}
                path={navItem.path}
              />
            ))}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                MiniApps
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>TodosWithCalc</DropdownItem>
                <DropdownItem>InputTransformer</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Input</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
