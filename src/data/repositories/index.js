import RealmDB from '../RealmDB'
import HabitRepository from './HabitRepository'
import RealmDataBaseAdapter from '../../infrastructure/adapters/RealmDataBaseAdapter'
import CompletionDateRepository from './CompletionDateRepository'

const database = RealmDB.getInstance().getRealm()

const realmDatabaseAdapter = new RealmDataBaseAdapter({
  database: database,
})
const repositories = {
  habitRepository: new HabitRepository({
    databaseAdapter: realmDatabaseAdapter,
    model: 'Habit',
  }),
  completionDateRepository: new CompletionDateRepository({
    databaseAdapter: realmDatabaseAdapter,
    model: 'CompletionDate',
  }),
}

export default repositories
