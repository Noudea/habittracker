import TestDB from '../mocks/TestDB'
import Habit from '../../src/core/habit/entities/Habit'

let seededDB: Array<Record<string, unknown>>
describe('repository Habit', () => {
  beforeAll(async () => {
    seededDB = await TestDB.seedDB()
  })
  afterAll(() => {
    TestDB.unseedDB()
  })

  it('should find all habits', async () => {
    const habitsToFind = await TestDB.habitRepository.findAll()
    expect(habitsToFind).toEqual(seededDB)
  })

  it('should create a habit', async () => {
    const habitToCreate = new Habit({
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    })

    const createdHabit = await TestDB.habitRepository.create(habitToCreate)
    expect(createdHabit).toEqual({
      ...habitToCreate,
      id: createdHabit.id,
      completionDates: [],
    })
  })

  it('should find a habit by id', async () => {
    const habitToFind = await TestDB.habitRepository.find({
      id: seededDB[0].id as string,
    })

    expect(habitToFind).toEqual(seededDB[0])
  })

  it('should update an habit', async () => {
    const updatedHabit = await TestDB.habitRepository.update({
      updatedObject: {
        id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
        name: 'Drink water',
        occurrences: 7,
        startDate: new Date('2022-01-01'),
        completionDates: [],
        color: '#ff0e1b',
      },
    })
    expect(updatedHabit).toEqual({
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#ff0e1b',
    })
  })

  it('should delete an habit', async () => {
    const habitToDelete = {
      id: 'db05d88c-70b8-4bca-a8ba-fa33358daa1d',
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
