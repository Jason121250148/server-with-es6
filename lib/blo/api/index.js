import { Router } from "express";

import BloService from "../logic/BloService";

const bloService = new BloService();//只会new一次！！import的机制就是这样

const router = Router();
const lines = new Map();
router.get("/bus-line/:line", async (req, res) => {
    try
    {
        const line = req.params.line;
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Cache-Control", `public, max-age=${3600 * 24 * 365}`);
        if (lines.has(line))
        {
            res.send(lines.get(line));
        }
        else
        {
            const lineInfo = line.split("-");
            const rows = await bloService.getBusLineInfo(lineInfo[0], lineInfo[1]);
            const stops = rows.map(stop => {
                return [stop.STOP_ID, stop.STOP_NAME, [stop.LAT, stop.LNG]];
            });
            lines.set(line, stops);
            res.send(stops);
        }
    }
    catch (e)
    {
        console.error(e);
        res.status(500).end();
    }
});

export default router;
