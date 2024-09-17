import axios from 'axios';
import { Button, Container} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import DataTable from 'react-data-table-component';



const Leave = () => {
    const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiURL = 'http://localhost:8015/leave';

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(apiURL);
        if (Array.isArray(res.data)) { 
          setData(res.data);
          console.log(res.data)

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
      name: 'Leave Id',
      selector: row => row.lid,
    },
    {
      name: 'Employee Id',
      selector: row => row.eid,
    },
    {
      name: 'Leave start date',
      selector: row => row.leave_start_date,
    },
    {
      name: 'Leave end date',
      selector: row => row.leave_end_date,
    },
    {
      name: 'Employee Remark',
      selector: row => row.employee_remark,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: "Action",
      cell: () => {
        return (
          <Container>
            <Row>
              <Col>
                <Button></Button>
              </Col>
              <Col>
               <Button></Button>
              </Col>
            </Row>
          </Container>
        );
      },
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "40px", // override the row height
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
    
    <br/>
    <br/>
    <DataTable
			columns={columns}
			data={data}
      customStyles={customStyles}
      pagination
		/>

    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default Leave