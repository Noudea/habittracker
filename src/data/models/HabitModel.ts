import Realm from 'realm'
import IHabit from '../../core/habit/entities/IHabit'

class HabitModel extends Realm.Object<HabitModel> implements IHabit {
  id!: string
  name!: string
  occurrences!: number
  startDate!: Date
  completionDates!: Date[]
  color!: string

  static schema = {
    name: 'Habit',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      occurrences: { type: 'int' },
      startDate: { type: 'date' },
      completionDates: { type: 'date[]' },
      color: { type: 'string' },
    },
  }
}

export default HabitModel
