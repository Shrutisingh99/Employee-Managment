const express = require("express");
const Management = express();
Management.use(express.json());
const cors = require("cors");
Management.use(cors());

const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");

const { employeeRouter } = require("./Route/employeeRoute/employeeRoute");
Management.use("/", employeeRouter);

const { roleAssRouter } = require("./Route/RoleAssignRouter/RoleAssignRouter");
Management.use("/", roleAssRouter);

const {leavedetailRouter} = require("./Route/leaveDetailRoute/leaveDetailRoute");
Management.use("/",leavedetailRouter);

const dotenv = require("dotenv");
const { version } = require("joi");
dotenv.config();
// const jwt = require('jsonwebtoken')
port = process.env.PORT

const option = {
    definition: {
        openapi:"3.0.0",
        info:{
            title:"Nodejs api documentation for mysql",
            version:"1.0.0"
        },
        server:[
            {
                url:"http://localhost:8015"
            }
        ]
    },
    apis:["./Route/employeeRoute/employeeRoute.js"]
}
Management.use("/testing",swaggerui.serve,swaggerui.setup(swaggerjsdoc(option)))

Management.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
    

