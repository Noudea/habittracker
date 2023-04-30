import IHabit from '../../entities/IHabit'

class DeleteHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  execute({ habit }: { habit: IHabit }): IHabit {
    return this.repository.delete(habit)
  }
}

export default DeleteHabitUsecase
