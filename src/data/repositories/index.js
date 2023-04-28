import RealmDB from '../RealmDB'
import HabitRepository from './HabitRepository'
import RealmDataBaseAdapter from '../../infrastructure/adapters/RealmDataBaseAdapter'

const database = RealmDB.getInstance().getRealm()

const realmDatabaseAdapter = new RealmDataBaseAdapter({
  database,
})

export default {
  habitRepository: new HabitRepository({
    databaseAdapter: realmDatabaseAdapter,
    model: 'Habit',
  }),
}
