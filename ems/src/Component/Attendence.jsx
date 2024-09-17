import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Form,Row,Col} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import DataTable from 'react-data-table-component';
import { colors } from '@mui/material';



const Attendence = () => {
    const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiURL = 'http://localhost:8015/employee';

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(apiURL);
        if (Array.isArray(res.data)) { 
          setData(res.data);
        } else {
          console.error('Data fetched is not an array:', res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor:"rgb(24,40,90)",
        color:"white"
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  return (
    <Container>
      <Row>
        <Col>
    <div>
        <Stack direction="horizontal" gap={4}>
         <Button variant="primary">Absent</Button>{' '}
      <Button variant="secondary">Punch In</Button>{' '}
      <Button variant="success">Punch out</Button>{' '}
      <Button variant="warning">Overtime</Button>{' '}
      <Button variant="danger">Weekoff</Button>{' '}
      <Button variant="info">Undo</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
    </Stack>
    <br/>
    <br/>
    <DataTable
			columns={columns}
			data={data}
      customStyles={customStyles}
		/>

    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default Attendence