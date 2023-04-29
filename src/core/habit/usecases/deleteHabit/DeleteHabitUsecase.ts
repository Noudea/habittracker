import IHabitModel from '../../../../data/models/IHabitModel'

class DeleteHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }

  async execute({ habit }: { habit: IHabitModel }) {
    return this.repository.delete(habit)
  }
}

export default DeleteHabitUsecase
