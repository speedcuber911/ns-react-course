import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

function InputComponent() {
  const [inputText, setInput] = useState("");
  const [inputValidationErrors, setInputValidationErrors] = useState([]);
  const [inputSuccess, setInputSuccess] = useState(false);
  
  const validate = () => {
    const errors = [];
    if (inputText.length === 0) {
      errors.push("User name can't be blank");
    }
    if (inputText.length < 5) {
      errors.push("User name must have a lenght of 5 or more charcaters");
    }
    if (
      inputText
        .split("")
        .some(
          (arrayCh) => arrayCh.charCodeAt() >= 48 && arrayCh.charCodeAt() <= 57
        )
    )
      errors.push("User name can't have numbers");

    if (
      inputText
        .split("")
        .some(
          (arrayCh) =>
            !(
              (arrayCh.charCodeAt() >= 48 && arrayCh.charCodeAt() <= 57) ||
              (arrayCh.charCodeAt() >= 65 && arrayCh.charCodeAt() <= 91) ||
              (arrayCh.charCodeAt() >= 97 && arrayCh.charCodeAt() <= 123)
            )
        )
    )
      errors.push("User name can't have special characters");

    if (!errors.length) {
      setInputSuccess(true);
      setTimeout(() => setInputSuccess(false), 2000);
    }

    setInputValidationErrors(errors);
  };
  return (
    <Container>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <Form>
            <FormGroup>
              <Label for="examplePassword">User name:</Label>
              <Input
                valid={inputSuccess}
                invalid={inputValidationErrors.length ? true : false}
                value={inputText}
                onChange={(e) => setInput(e.target.value)}                
              />
              {inputValidationErrors.map((error) => (
                <FormFeedback key={error}>{error}</FormFeedback>
              ))}
              <FormText>Type out your user name and submit</FormText>
            </FormGroup>
          </Form>
          <Button color="primary" onClick={validate}>
            Submit
          </Button>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Container>
  );
}

export default InputComponent;
