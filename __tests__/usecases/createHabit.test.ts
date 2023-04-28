import CreateHabitUsecase from '../../src/core/habit/usecases/createHabit/createHabitUsecase'

describe('usecase CreateHabits', () => {
  it('should create a habit', async () => {
    const habitToCreate = {
      name: 'Drink water',
      daysPerWeek: 7,
      startDate: new Date('2021-01-01'),
      color: '#000000',
    }
    const createHabitUseCase = new CreateHabitUsecase({
      repository: {
        createHabit: (habit: any) => habit,
      },
    })
    const habit = await createHabitUseCase.execute(habitToCreate)
    expect(habit).toEqual({ ...habitToCreate, completionDates: [] })
  })
})

export {}
