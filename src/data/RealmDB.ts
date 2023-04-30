// Define the database configuration
import HabitModel from './models/HabitModel'
import Realm from 'realm'
import CompletionDateModel from './models/CompletionDateModel'

// const migrationFunction = (oldRealm: any, newRealm: any) => {
//   if (oldRealm.schemaVersion < 4) {
//     const oldObjects = oldRealm.objects('Habit')
//     const newObjects = newRealm.objects('Habit')
//
//     // Add the completionDates property to the schema
//     newRealm.write(() => {
//       for (let i = 0; i < oldObjects.length; i++) {
//         const oldObject = oldObjects[i]
//         const newObject = newObjects[i]
//
//         const completionDates = oldObject.completionDates.map((date) => ({
//           date,
//         }))
//
//         newObject.completionDates.push(...completionDates)
//       }
//     })
//   }
// }

const databaseOptions = {
  schema: [HabitModel.schema, CompletionDateModel.schema],
  schemaVersion: 5,
  path: 'default.realm',
  // migration: migrationFunction,
}

class RealmDB {
  private static instance: RealmDB
  private realm: Realm

  private constructor() {
    this.realm = new Realm(databaseOptions)
  }

  public static getInstance(): RealmDB {
    if (!RealmDB.instance) {
      RealmDB.instance = new RealmDB()
    }
    return RealmDB.instance
  }

  public getRealm(): Realm {
    return this.realm
  }
  public async open(): Promise<void> {
    if (this.realm.isClosed) {
      this.realm = await Realm.open(databaseOptions)
    }
  }
}

export default RealmDB
