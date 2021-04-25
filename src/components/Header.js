
import { Button, Nav, Form, Navbar, FormControl } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">GoMyCode</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Tchoutch 😣</Nav.Link>
      <Nav.Link href="#features">Hicham 😜</Nav.Link>
      <Nav.Link href="#pricing">Imrane 😭</Nav.Link>
      <Nav.Link href="#pricing">Yacine 😎</Nav.Link> 
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="7awesS" className="mr-sm-2" />
      <Button variant="outline-info">7awesS</Button>
    </Form>
  </Navbar>
  )
}

export default Header;