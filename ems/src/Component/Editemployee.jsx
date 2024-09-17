import React from 'react'
import { Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col} from "react-bootstrap";
// import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Edit = () => {

// const [data, setData] = useState([]);
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
    <div>
        <Container>
                <Modal show={show} onHide={handleClose} className="m-5">
          <Modal.Header closeButton>
            <Modal.Title>Edit employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <h1 style={{ textAlign: "center" }}></h1>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter employee name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Department</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Hr</option>
                    <option>Full Stack Developer</option>
                    <option>Fronted Developer</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </Container>
    </div>
    </>

  )
}

export default Edit