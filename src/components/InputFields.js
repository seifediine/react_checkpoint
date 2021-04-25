import {Form, Button} from 'react-bootstrap';
import './InputFields.css';

function InputFields() {
  return (
    <Form className="form">
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Confirm Your Email</Form.Label>
        <Form.Control type="text" placeholder="Confirm Your Email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Your Password" />
      </Form.Group>
      <Button variant="primary" type="submit">REGISTER</Button>
    </Form>
  );
}

export default InputFields;
