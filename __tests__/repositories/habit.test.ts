import TestDB from '../mocks/TestDB'

describe('repository Habit', () => {
  beforeAll(() => {
    TestDB.seedDB()
  })
  afterAll(() => {
    TestDB.unseedDB()
  })

  it('should create a habit', async () => {
    const habitToCreate = {
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2021-01-01'),
      color: '#000000',
    }

    const createdHabit = await TestDB.habitRepository.create(habitToCreate)
    expect(createdHabit).toEqual({
      ...habitToCreate,
      _id: createdHabit._id,
      completionDates: [],
    })
  })

  it('should find a habit by id', async () => {
    const habitToFind = await TestDB.habitRepository.find({
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
    })

    expect(habitToFind).toEqual({
      _id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    })
  })

  it('should update an habit', async () => {
    const updatedHabit = await TestDB.habitRepository.update({
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      updatedObject: {
        name: 'Drink water',
        occurrences: 7,
        startDate: new Date('2022-01-01'),
        completionDates: [],
        color: '#ff0e1b',
      },
    })
    expect(updatedHabit).toEqual({
      _id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#ff0e1b',
    })
  })

  it('should delete an habit', async () => {
    const habitToDelete = {
      _id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    }

    const deletedHabit = await TestDB.habitRepository.delete({
      objectToDelete: habitToDelete,
    })

    const habitToFind = await TestDB.habitRepository.find({
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
    })

    expect(habitToFind).toBeUndefined()
    expect(deletedHabit).toEqual({
      success: true,
      _deleted: habitToDelete,
    })
  })
})

export {}
