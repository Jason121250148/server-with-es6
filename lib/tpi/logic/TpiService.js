export default class TpiService //服务里的所有方法都是异步的
{
    async getIndexByTime(time)
    {
        const minutes = time.getHours() * 60 + time.getMinutes();
        const index = await this._getIndexByMinutes(minutes);
        return index;
    }

    async getIndexByTimeRange(from, to)
    {
        if (from > to)
        {
            throw new Error(`"From" must be lower or equal to "to"`);//async中的new Error会自动编译成reject
        }
        const results = [];
        const fromMinutes = from.getHours() * 60 + from.getMinutes();
        const toMinutes = to.getHours() * 60 + to.getMinutes();
        for (let i = fromMinutes; i <= toMinutes; i++)
        {
            results.push(await this._getIndexByMinutes(i));
        }
        return results;
    }

    async _getIndexByMinutes(minutes)
    {
        return Math.abs(Math.sin((minutes / 24 / 60) * 2 * Math.PI) * 7);
    }
}
