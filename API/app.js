import  express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import fileUpload from "express-fileupload";
const app = express();

//to link router
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subcategoryrouter from './routes/subcategory_router.js';
import ShipmentRouter from './routes/shipment.router.js';
import BidRouter from './routes/bid.router.js';


//to overcome cross origin problem
app.use(cors());

//to extract file data from request
app.use(fileUpload());


//to extract body data from request
//(post,put,delete,patch)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//route level middleware for url routing
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryrouter)
app.use("/shipment",ShipmentRouter); 
app.use("/bid",BidRouter);



app.listen(3001);
console.log("server invoked at link http://localhost:3001");