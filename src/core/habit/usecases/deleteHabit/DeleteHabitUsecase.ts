import IHabit from '../../entities/IHabit'

class DeleteHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  async execute({ habit }: { habit: IHabit }) {
    return this.repository.delete(habit)
  }
}

export default DeleteHabitUsecase
