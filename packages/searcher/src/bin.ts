import consolji from 'consolji'
import { run } from '.'

run().catch((e) => {
   consolji.log(e)
   process.exit(1)
})
