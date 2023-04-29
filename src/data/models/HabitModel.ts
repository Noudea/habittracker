import Realm from 'realm'
import IHabitModel from './IHabitModel'

class HabitModel extends Realm.Object<HabitModel> implements IHabitModel {
  _id!: string
  name!: string
  daysPerWeek!: number
  startDate!: Date
  completionDates!: Date[]
  color!: string

  static schema = {
    name: 'Habit',
    primaryKey: '_id',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      daysPerWeek: { type: 'int' },
      startDate: { type: 'date' },
      completionDates: { type: 'date[]' },
      color: { type: 'string' },
    },
  }
}

export default HabitModel
