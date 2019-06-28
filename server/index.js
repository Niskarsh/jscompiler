import 'babel-polyfill'
import app from './utils/utils'
require('dotenv').config()

const port = process.env.PORT || 3000

app.listen (port, console.log(`Server is up and running on ${port} port`))