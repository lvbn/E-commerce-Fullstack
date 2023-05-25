import { app, port } from './app'
import run from './database/db'

(async function bootstrap() {

  run().catch(err => console.log(err));

  app.listen(port, async () => {
    console.log(`✅ Server running on http://localhost:${port}/  🚀`)
  })

})()