import * as sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose()

// export default (async () => {
//   const db = await open({
//     filename: '/tmp/database.db',
//     driver: sqlite3.cached.Database
//   })
//   return db
// })()

// you would have to import / invoke this in another file
const Db = async () => {
  return await open({
    filename: '/tmp/database.db',
    driver: sqlite3.Database
  })
}

const createUserTable = async (Db: any) => {
  const db = await Db()
  db.run(
    'CREATE TABLE IF NOT EXISTS user (name text)')
  db.close()
}

createUserTable(Db)
export default Db;