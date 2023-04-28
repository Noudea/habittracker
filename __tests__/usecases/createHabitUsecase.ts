import CreateHabitUsecase from '../../src/core/habit/usecases/createHabit/createHabitUsecase'

describe('usecase CreateHabits', () => {
  it('should create a habit', async function () {
    const newHabit = {
      name: 'Drink water',
      daysPerWeek: 7,
      startDate: new Date('2021-01-01'),
    }
    const createHabitUseCase = new CreateHabitUsecase()
    const habit = await createHabitUseCase.execute(newHabit)
    expect(habit).toEqual(newHabit)
  })
})

export {}
