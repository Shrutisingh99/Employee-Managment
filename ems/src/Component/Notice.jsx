import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {Form,Row,Col} from 'react-bootstrap';
import DataTable from 'react-data-table-component';



const Notice = () => {
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
  return (
    <Container>
      <Row>
        <Col>
    <div>
    <DataTable
			columns={columns}
			data={data}
		/>

    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default Notice