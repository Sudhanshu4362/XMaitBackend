const express = require('express');
const app = express(); 


const bodyParser = require("body-parser")

// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

app.use(bodyParser.json())

app.use(express.json());

// const swaggerOptions = {
//     definition : {
//         openapi : "3.0.0",
//         info : {
//             title : "XMAIT",
//             version : "1.0.0",
//             description : "All endpoint pertaining to XMAIT ",
//         },
//         servers : [
//             {
//                 url : `http://localhost:5000`
//             },
//         ],
//     },
//     apis : ["./Router/*.js"]
// }

// const swaggerspec = swaggerJSDoc(swaggerOptions);

// app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerspec));

const jobRouter =  require('./Router/jobRouter');
app.use("/job", jobRouter);

app.listen(5000,() => {
    console.log("server listining on port 5000")
});

