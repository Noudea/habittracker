import ICompletionDate from '../../core/habit/entities/ICompletionDate'
import IDTOCompletionDate from './IDTOCompletionDate'

class DTOCompletionDate implements IDTOCompletionDate {
  public id: string
  public date: Date

  constructor(completionDate: ICompletionDate) {
    this.id = completionDate.id
    this.date = completionDate.date
  }
}

export default DTOCompletionDate
