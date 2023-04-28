import repository from '../../src/data/repositories'

describe('repository CreateHabits', () => {
  it('should create a habit', async () => {
    const habitToCreate = {
      name: 'Drink water',
      daysPerWeek: 7,
      startDate: new Date('2021-01-01'),
      color: '#000000',
    }
    const habitRepository = repository.habitRepository
    const createdHabit = await habitRepository.createHabit(habitToCreate)
    expect(createdHabit).toEqual({
      ...habitToCreate,
      _id: createdHabit._id,
      completionDates: [],
    })
  })
})

export {}
