import TestDB from '../mocks/TestDB'
import Habit from '../../src/core/habit/entities/Habit'
import ICompletionDate from '../../src/core/habit/entities/ICompletionDate'
import IHabit from '../../src/core/habit/entities/IHabit'

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
      id: 'a775d0cd-dfc6-4421-9dc6-b9728e77a119',
      name: 'Drink water',
      occurrences: 7,
      startDate: new Date('2022-01-01'),
      completionDates: [],
      color: '#000000',
    })

    const createdHabit = await TestDB.habitRepository.create(habitToCreate)
    expect(createdHabit).toEqual(habitToCreate)
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
        id: seededDB[0].id as string,
        name: seededDB[0].name as string,
        occurrences: seededDB[0].occurrences as number,
        startDate: seededDB[0].startDate as Date,
        completionDates: seededDB[0].completionDates as Array<ICompletionDate>,
        color: '#fff42d',
      },
    })
    expect(updatedHabit).toEqual({
      ...seededDB[0],
      color: '#fff42d',
    })
  })

  it('should delete an habit', async () => {
    const habitToDelete = new Habit(<IHabit>(<unknown>seededDB[1]))

    const deletedHabit = await TestDB.habitRepository.delete({
      objectToDelete: habitToDelete,
    })

    const habitToFind = await TestDB.habitRepository.find({
      id: seededDB[1].id as string,
    })

    expect(habitToFind).toBeUndefined()
    expect(deletedHabit).toEqual({
      success: true,
      _deleted: habitToDelete,
    })
  })
})

export {}
