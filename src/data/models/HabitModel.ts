import Realm from 'realm'
import IHabit from '../../core/habit/entities/IHabit'

class HabitModel extends Realm.Object<HabitModel> {
  static schema = {
    name: 'Habit',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      occurrences: { type: 'int' },
      startDate: { type: 'date' },
      completionDates: { type: 'list', objectType: 'CompletionDate' },
      color: { type: 'string' },
    },
  }
}

export default HabitModel
