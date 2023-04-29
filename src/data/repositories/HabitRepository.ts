import IHabit from '../../core/habit/entities/IHabit'
import { Repository } from './Repository'

class HabitRepository extends Repository<IHabit> {
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
