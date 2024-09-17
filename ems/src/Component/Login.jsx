import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
} from "mdb-react-ui-kit";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(activeTab, "activeTab");
  return (
    <>
      <Container className="d-flex justify-content-center mt-5">
        <Row>
          <Col className="col-6 ">
            <Card border="info" style={{ width: "25rem" }}>
              <Card.Body>
                <div style={{}}>
                  <MDBTabs pills justify className="mb-3">
                    <MDBTabsItem>
                      <MDBTabsLink
                        onClick={() => handleTabChange("login")}
                        active={activeTab === "login"}
                      >
                        Login
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>

                  {activeTab === "login" && (
                    <div>
                      <form>
                        <div className="text-center mb-3">
                          <p>Sign up with:</p>

                          <MDBBtn floating color="secondary" className="mx-1">
                            <MDBIcon fab icon="facebook-f" />
                          </MDBBtn>

                          <MDBBtn floating color="secondary" className="mx-1">
                            <MDBIcon fab icon="google" />
                          </MDBBtn>

                          <MDBBtn floating color="secondary" className="mx-1">
                            <MDBIcon fab icon="twitter" />
                          </MDBBtn>

                          <MDBBtn floating color="secondary" className="mx-1">
                            <MDBIcon fab icon="github" />
                          </MDBBtn>
                        </div>

                        <p className="text-center">or:</p>

                        <MDBInput
                          className="mb-4"
                          type="email"
                          id="form7Example1"
                          label="Email address"
                        />
                        <MDBInput
                          className="mb-4"
                          type="password"
                          id="form7Example2"
                          label="Password"
                        />

                        <MDBRow className="mb-4">
                          <MDBCol className="d-flex justify-content-center">
                            <MDBCheckbox
                              id="form7Example3"
                              label="Remember me"
                              defaultChecked
                            />
                          </MDBCol>
                          <MDBCol>
                            <a href="#!">Forgot password?</a>
                          </MDBCol>
                        </MDBRow>

                        <MDBBtn type="submit" className="mb-4" block onClick={()=>navigate('/dashboard')}>
                          Log in
                        </MDBBtn>
                      </form>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
