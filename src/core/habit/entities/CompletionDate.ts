import ICompletionDate from './ICompletionDate'
import { v4 as uuidv4 } from 'uuid'

class CompletionDate implements ICompletionDate {
  public id: string
  public date: Date

  constructor(completionDate: ICompletionDate) {
    this.id = completionDate.id || uuidv4()
    this.date = completionDate.date
  }
}

export default CompletionDate
