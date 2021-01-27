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
      const db = await Db()
      const result = db.run(
        'INSERT INTO user VALUES ($name)',
        {
          $name: user.name
        }
      )
      return "user created"
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const userModel = new UserModel(Db)