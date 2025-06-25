import React, { useState } from "react";
import { Col, Button, Form, Alert } from "react-bootstrap";

export default function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const NameInput = (e) => {
    setName(e.target.value);
  };

  const EmailInput = (e) => {
    setEmail(e.target.value);
  };

  const PhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const MessageInput = (e) => {
    setMessage(e.target.value);
  };

  const check = name.length > 0 && email.length > 0 && phone.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setLoading(<i className="fa fa-spinner fa-spin loadingIcon" />);
      setErrorMsg("");
      setSuccessMsg(false);

      const url = "https://script.google.com/macros/s/AKfycbzrJdtBzgw0CQkzR96vVfpBhsUkRI9n1Tu7pyNbyds8RbYJluMPB0qq62WB8KQ_9G-lTA/exec"; // Replace with your actual Google Sheets URL
      
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}&Message=${e.target.message.value}`
      })
      .then(res => res.text())
      .then(data => {
        // Success handling
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setLoading("");
        setSuccessMsg(true);
        setValidated(false);
        alert(data); // You can remove this if you don't want the alert
      })
      .catch(error => {
        console.log(error);
        setErrorMsg(
          "Failed to submit the form. Please check your network or try again later."
        );
        setLoading("");
      });
    }
  };

  return (
    <>
      {successMsg && (
        <Alert
          variant="success"
          onClose={() => setSuccessMsg(false)}
          dismissible
          className="w-100"
        >
          <p className="mb-0">
            Contact form successfully submitted. Thank you, we will get back to
            you soon!
          </p>
        </Alert>
      )}
      {errorMsg && (
        <Alert
          variant="danger"
          onClose={() => setErrorMsg("")}
          dismissible
          className="w-100"
        >
          <p className="mb-0">{errorMsg}</p>
        </Alert>
      )}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        method="POST"
      >
        <Form.Row>
          <Form.Group as={Col} sm="12">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={name}
              name="name"
              onChange={NameInput}
            />
            <Form.Control.Feedback type="invalid">
              Name Required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} sm="12">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={EmailInput}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} sm="12">
            <Form.Control
              required
              type="tel"
              placeholder="Phone Number"
              value={phone}
              name="phone"
              onChange={PhoneInput}
            />
            <Form.Control.Feedback type="invalid">
              Phone Number Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm="12">
            <Form.Control
              as="textarea"
              value={message}
              name="message"
              onChange={MessageInput}
              rows="3"
            />
          </Form.Group>
        </Form.Row>

        <Button
          type="submit"
          variant="link"
          className="knowMoreBtn text-white text-decoration-none"
          disabled={!check}
        >
          Send <i className="fa fa-send"></i>
        </Button>
        {loading}
      </Form>
    </>
  );
}