import express from "express";


const router = express.Router();
import * as subcatergorycontroller from '../controller/subcategory_controller.js';
router.post("/save",subcatergorycontroller.save);
router.get("/fetch",subcatergorycontroller.fetch);
router.delete("/delete",subcatergorycontroller.deletesubcategory);
router.patch("/update",subcatergorycontroller.updatesubcategory);





export default router;