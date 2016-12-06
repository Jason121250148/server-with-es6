import { Router } from "express";

import BloService from "../logic/BloService";

const bloService = new BloService();//只会new一次！！import的机制就是这样

const router = Router();
router.get("/:lineId/:direction/speed", async (req, res) => {
    try
    {
        const rowCount = await bloService.getBusLineInfo(req.query.lineId, req.query.direction);
        res.send(rowCount);
    }
    catch (e)
    {
        console.error(e);
        res.status(500).end();
    }
});

export default router;
