import * as express from 'express'
import { plus } from '@react-nodejs-yarn-workspaces/shared'
const router = express.Router()

router.get('/', (req, res) =>
  res.send({
    hello: 'world',
  })
)

router.get('/params/:number', (req, res) =>
  res.send({
    number: req.params.number,
  })
)

router.get('/plus/:numA/:numB', (req, res) => {
  const { numA, numB } = req.params
  res.send({
    result: plus(numA, numB),
  })
})

export default router
