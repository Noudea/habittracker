class FindAllHabitsUsecase {
  private repository: any
  constructor({ repository }: any) {
    this.repository = repository
  }
  execute() {
    return this.repository.findAll()
  }
}

export default FindAllHabitsUsecase
