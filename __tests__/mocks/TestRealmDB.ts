// Define the database configuration
import Realm from 'realm'
import HabitModel from '../../src/data/models/HabitModel'

const migrationFunction = (oldRealm: any, newRealm: any) => {
  if (oldRealm.schemaVersion < 1) {
    const oldObjects = oldRealm.objects('Habit')
    const newObjects = newRealm.objects('Habit')

    // Add the completionDates property to the schema
    newRealm.write(() => {
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].color = '#000000'
      }
    })
  }
}

const testDatabaseOptions = {
  schema: [HabitModel.schema],
  schemaVersion: 2,
  path: 'test.realm',
  // migration: migrationFunction,
}

class TestRealmDB {
  private static instance: TestRealmDB
  private realm: Realm

  private constructor() {
    this.realm = new Realm(testDatabaseOptions)
  }

  public static getInstance(): TestRealmDB {
    if (!TestRealmDB.instance) {
      TestRealmDB.instance = new TestRealmDB()
    }
    return TestRealmDB.instance
  }

  public getRealm(): Realm {
    return this.realm
  }

  public resetDatabase(): void {
    this.realm.write(() => {
      this.realm.deleteAll()
    })
  }
}

export default TestRealmDB
