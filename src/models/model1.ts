import Db from './dbConfig'

interface User {
  name: string;
  id: number;
}
class UserModel {

  //Fields 
  name: string;
  id: number;

  constructor(public db: any) { }

  async addUser(user: User) {
    try {
      if (!user.name) {
        return { error: true, message: 'You need a username' }
      }
      const db = await Db()
      const result = await db.run(
        'INSERT INTO user VALUES ($name)',
        {
          $name: user.name
        }
      )
      return {
        message: "user created",
        data: result.lastID
      }
    }
    catch (err) {
      throw Error(err)
    }
  }
}

export const userModel = new UserModel(Db)