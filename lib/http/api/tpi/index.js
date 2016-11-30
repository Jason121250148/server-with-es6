import { Router } from "express";

import TpiService from "../../../tpi/logic/TpiService";

const tpiService = new TpiService();//只会new一次！！import的机制就是这样

const router = Router();
router.get("/", async (req, res) => {
    const from = parseInt(req.query.from);
    if (isNaN(from))
    {
        res.status(400).send(`"from" parameter must be a UTC number.`);
        return;
    }
    const to = parseInt(req.query.to);
    if (isNaN(to))
    {
        res.status(400).send(`"to" parameter must be a UTC number.`);
        return;
    }
    const results = await tpiService.getIndexByTimeRange(
        new Date(from),
        new Date(to)
    );
    res.send(results);
});

export default router;
