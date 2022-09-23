import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button, NavItem, NavLink, Dropdown, Badge } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { doLogout, getCurrentDetail, isLoggedIn } from '../authentication/Login';
import { FaShoppingCart } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { CartState } from '../context/Context';
const ScrapYardNavbar = () => {
  const {state:{cart}}=CartState()
  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentDetail)
  }, [login])

  const logout = () => {
    doLogout(() => {
      setLogin(false)
      navigate("/home");
      toast.success("Logout");
    })
  }
  return (
    <>

      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">ScrapYard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="">
            {
              login && (
                <>
                  <Button onClick={logout} variant="secondary">Logout</Button>
                  <NavItem>
                    <NavLink>
                      {user.email}
                    </NavLink>
                  </NavItem>


                  <Dropdown.Toggle variant="secondary">
                    <FaShoppingCart color="white" fontSize="25px" />
                    {/* <Badge className='badge-secondary'>{10}</Badge>*/}
                    <span className="badge badge-light">{cart.length}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: 370 }}>
                    {cart.length>0?(<></>):( <span style={{ padding: 10 }}>Cart is Empty !</span>)}}
                   
                  </Dropdown.Menu>
                </>
              )
            }
            {
              !login && (
                <>
                  <Button as={Link} to="/logi" variant="secondary">Login</Button>
                  <Button as={Link} to="/signup" variant="secondary">SignUp</Button>
                </>
              )
            }

          </Nav>
        </Container>
      </Navbar>
      <Outlet />

    </>


  )
}

export default ScrapYardNavbar