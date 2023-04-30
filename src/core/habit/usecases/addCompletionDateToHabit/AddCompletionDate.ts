import Habit from '../../entities/Habit'
import CompletionDate from '../../entities/CompletionDate'

class addCompletionDate {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  async execute({ id }: { id: string }): Promise<Habit> {
    const habit = await this.repository.find({ id })
    habit.addCompletionDate(
      new CompletionDate({
        date: new Date(),
      })
    )
    return await this.repository.update(habit)
  }
}

export default addCompletionDate
