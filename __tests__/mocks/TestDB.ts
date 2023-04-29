import TestRealmDB from './TestRealmDB'
import RealmDataBaseAdapter from '../../src/infrastructure/adapters/RealmDataBaseAdapter'
import HabitRepository from '../../src/data/repositories/HabitRepository'
import RealmDB from '../../src/data/RealmDB'

//const databaseTest = TestRealmDB.getInstance().getRealm()
const database = RealmDB.getInstance().getRealm()

const realmDatabaseAdapter = new RealmDataBaseAdapter({
  database: database,
})
const habitRepository = new HabitRepository({
  databaseAdapter: realmDatabaseAdapter,
  model: 'Habit',
})

const mockData = [
  {
    id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
    name: 'Drink water',
    occurrences: 7,
    startDate: new Date('2022-01-01'),
    completionDates: [],
    color: '#000000',
  },
  {
    id: '55359edc-a801-402c-8682-7618f97bcea8',
    name: 'Go for a run',
    occurrences: 3,
    startDate: new Date('2022-01-01'),
    completionDates: [],
    color: '#FFFFFFF',
  },
]
const seedDB = async () => {
  database.write(() => {
    mockData.forEach((habit) => {
      database.create('Habit', habit)
    })
  })
}

const unseedDB = async () => {
  database.write(() => {
    const habits = database.objects('Habit')
    database.delete(habits)
  })
}

export default { seedDB, unseedDB, habitRepository }
