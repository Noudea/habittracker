class FindHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }
  execute({ id }: { id: string }) {
    const habit = this.repository.find({ id })
    return habit
  }
}

export default FindHabitUsecase
