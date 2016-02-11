// app and database for starting up the api
import app from '../app'
import {databaseURL, connectDatabase} from '../database'

const port = process.env.PORT || 3000;

(async() => {
  try {
    const info = await connectDatabase(databaseURL);
    console.log(`Connected to database ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error(`Unable to connect to database ${databaseURL}`)
    console.error(`Error: ${error}`)
  }
  
  await app.listen(port);
  console.log(`Server started on port ${port}`);

})();


