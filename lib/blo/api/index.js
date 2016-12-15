import { Router } from "express";

import BloService from "../logic/BloService";

const bloService = new BloService();//只会new一次！！import的机制就是这样

const router = Router();


export default router;
