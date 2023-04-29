class FindHabitUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }
  async execute({ id }: { id: string }) {
    const habit = await this.repository.find({ id })
    return habit
  }
}

export default FindHabitUsecase
