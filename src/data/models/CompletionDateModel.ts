import Realm from 'realm'

class CompletionDateModel extends Realm.Object<CompletionDateModel> {
  static schema = {
    name: 'CompletionDate',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      date: 'date',
      // habit: {
      //   type: 'linkingObjects',
      //   objectType: 'Habit',
      //   property: 'completionDates',
      // },
    },
  }
}

export default CompletionDateModel
