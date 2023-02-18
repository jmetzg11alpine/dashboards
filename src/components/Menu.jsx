import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='p-3'>
      <Container>
        <Navbar.Brand href='#home'>D3.js Dashboards</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/contact'>Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/coffee'>Coffee</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/food'>Food</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Menu
