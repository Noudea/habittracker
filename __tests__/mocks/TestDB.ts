import TestRealmDB from './TestRealmDB'
import RealmDataBaseAdapter from '../../src/infrastructure/adapters/RealmDataBaseAdapter'
import HabitRepository from '../../src/data/repositories/HabitRepository'
import RealmDB from '../../src/data/RealmDB'
import Habit from '../../src/core/habit/entities/Habit'
import CompletionDate from '../../src/core/habit/entities/CompletionDate'
import completionDate from '../../src/core/habit/entities/CompletionDate'

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
  new Habit({
    name: 'Drink water',
    occurrences: 7,
    startDate: new Date('2022-01-01'),
    completionDates: [
      new CompletionDate({
        date: new Date('2022-01-01'),
      }),
    ],
    color: '#000000',
  }),
  new Habit({
    name: 'Go for a run',
    occurrences: 3,
    startDate: new Date('2022-01-01'),
    completionDates: [],
    color: '#FFFFFFF',
  }),
]
const seedDB = async () => {
  database.write(() => {
    mockData.forEach((habit) => {
      database.create('Habit', habit)
    })
  })
  const habits = database.objects('Habit')
  return habits.toJSON()
}

const unseedDB = async () => {
  database.write(() => {
    const habits = database.objects('Habit')
    const completionDates = database.objects('CompletionDate')

    database.delete(habits)
    database.delete(completionDates)
  })
}

export default { seedDB, unseedDB, habitRepository }
