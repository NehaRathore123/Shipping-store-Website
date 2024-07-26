import  express from "express";
const router  = express.Router();
//to link controller
import * as catergoryController from '../controller/category.controller.js';

router.post("/save",catergoryController.save);
router.get("/fetch",catergoryController.fetch);
router.delete("/delete",catergoryController.deletecategory);
router.patch("/update",catergoryController.updateCategory);
 export default router;