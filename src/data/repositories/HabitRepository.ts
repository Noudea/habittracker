import IHabit from '../../core/habit/entities/IHabit'

class HabitRepository {
  private readonly database: any
  private readonly model: string

  constructor({
    databaseAdapter,
    model,
  }: {
    databaseAdapter: any
    model: string
  }) {
    this.database = databaseAdapter
    this.model = model
  }

  public async createHabit(habit: IHabit): Promise<any> {
    return await this.database.create({
      data: habit,
      schema: this.model,
    })
  }
}

export default HabitRepository
