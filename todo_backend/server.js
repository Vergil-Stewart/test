const dotenv = require('dotenv');
const app = require('./src/app.js');
const connectDB = require('./src/config/db.js');

dotenv.config();

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, ()=>{
  console.log("Server's running on http://localhost:" + PORT);
});