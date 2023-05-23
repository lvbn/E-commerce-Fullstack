import { app, port } from './app'

(async function bootstrap() {

  app.listen(3000, async () => {
    console.log(`✅ Server running on http://localhost:${port}/  🚀`)
  })

})()