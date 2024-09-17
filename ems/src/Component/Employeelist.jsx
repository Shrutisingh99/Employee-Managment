import axios from "axios";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import AutoDeleteRoundedIcon from "@mui/icons-material/AutoDeleteRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import PreviewIcon from "@mui/icons-material/Preview";

function Employeelist() {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState({
    eid: "",
    ename: "",
    email: "",
    salary: "",
  });
  const [editMode, setEditMode] = useState(false); // New state to track edit mode
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setAdd({ eid: "", ename: "", email: "", salary: "" }); // Reset form on new addition
    setEditMode(false); // Reset edit mode
    setShow(true);
  };
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const apiURL = "http://localhost:8015/employee";

  async function handledel(eid) {
    try {
      await axios.delete(`http://localhost:8015/deleteemployee/${eid}`);
      getData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  }

  async function getData() {
    try {
      const res = await axios.get(apiURL);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleEdit = (employee) => {
    setAdd(employee); // Populate the form with selected employee data
    setEditMode(true); // Enable edit mode
    setShow(true); // Open the modal for editing
  };

  const handelChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      // Edit employee
      try {
        await axios.patch(`http://localhost:8015/editemployee/${add.eid}`, add);
        getData();
        handleClose();
      } catch (error) {
        console.error("Error updating employee:", error);
      }
    } else {
      // Add new employee
      try {
        await axios.post(`http://localhost:8015/savedate`, add);
        getData();
        handleClose();
      } catch (error) {
        console.error("Error adding employee:", error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "Employee Id",
      selector: (row) => row.eid,
    },
    {
      name: "Employee Name",
      selector: (row) => row.ename,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Hiredate",
      selector: (row) => new Date(row.hiredate).toDateString(),
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
    },
    {
      name: "Action",
      cell: (row) => (
        <Container>
          <Row>
            <Col>
              <EditNoteRoundedIcon onClick={() => handleEdit(row)} />
            </Col>
            <Col>
              <AutoDeleteRoundedIcon
                style={{ color: "8E3E63" }}
                onClick={() => handledel(row.eid)}
              />
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      name: "Role",
      cell: () => (
        <Container>
          <Row>
            <Col>
              <PreviewIcon onClick={handleShow2} />
            </Col>
            <Col>
              <EditNoteRoundedIcon onClick={handleShow2} />
            </Col>
          </Row>
        </Container>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "40px", 
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", 
        paddingRight: "8px",
        backgroundColor: "rgb(24,40,90)",
        color: "white",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  return (
    <>
      <div>
        <Container>
          <Button variant="primary" onClick={handleShow} className="mb-6">
            Add Employee
          </Button>
          <br />
          <Modal show={show} onHide={handleClose} className="m-5">
            <Modal.Header closeButton>
              <Modal.Title>{editMode ? "Edit" : "Add"} Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Employee Id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Employee Id"
                      name="eid"
                      value={add.eid}
                      onChange={handelChange}
                      disabled={editMode} // Disable ID field during edit
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Employee Name"
                    name="ename"
                    value={add.ename}
                    onChange={handelChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Salary"
                    name="salary"
                    value={add.salary}
                    onChange={handelChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={add.email}
                    onChange={handelChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
        />
      </div>

      {/* Modal for Role (not fully implemented in the current context) */}
      <Modal show={show2} onHide={handleClose2} className="m-5">
        <Modal.Header closeButton>
          <Modal.Title>Manage Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridRoleId">
                <Form.Label>Role Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Role Id"
                  name="roleid"
                  value={add.roleid || ""}
                  onChange={handelChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridRoleName">
              <Form.Label>Role Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role Name"
                name="rolename"
                value={add.rolename || ""}
                onChange={handelChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Role
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Employeelist;
