import getUser from '../../utils/getUser'
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'OPTIONS'],
    })
)

const apiGetUser = async (req, res) => {
    await cors(req, res)

    const data = await getUser('tuliofaria')
    res.send(data)
}

export default apiGetUser
