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
    try
    {
        const results = await tpiService.getIndexByTimeRange(
            new Date(from),
            new Date(to)
        );
        res.setHeader("Cache-Control", `public, max-age=${3600 * 24 * 365}`);
        res.send(results);
    }
    catch (e)
    {
        console.error(e);
        res.status(500).end();
    }
});

export default router;
