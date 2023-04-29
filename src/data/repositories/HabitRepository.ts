import IHabit from '../../core/habit/entities/IHabit'
import { Repository } from './Repository'
import IHabitModel from '../models/IHabitModel'

class HabitRepository extends Repository<IHabit, IHabitModel> {
  constructor({
    databaseAdapter,
    model,
  }: {
    databaseAdapter: any
    model: string
  }) {
    super({ databaseAdapter: databaseAdapter, model: model })
  }
}

export default HabitRepository
