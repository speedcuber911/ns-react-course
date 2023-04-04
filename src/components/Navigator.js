import React, { useState } from "react";
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
      <NavLink
        onClick={() => props.handleClick(props.navHeading)}
        style={{
          cursor: "pointer",
        }}
      >
        {props.navHeading}
      </NavLink>
    </NavItem>
  );
}

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">MultiScreen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {props.navigationItems.map((navItem) => (
              <CustomNavItem
                navHeading={navItem.componentName}
                handleClick={props.handleClick}
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
