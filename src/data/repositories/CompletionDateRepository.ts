import { Repository } from './Repository'
import ICompletionDate from '../../core/habit/entities/ICompletionDate'

class CompletionDateRepositoru extends Repository<ICompletionDate> {
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

export default CompletionDateRepositoru
