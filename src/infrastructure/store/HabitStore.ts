import { makeObservable, observable, action, reaction } from 'mobx'
import controllers from '../controllers'
import RealmDB from '../../data/RealmDB'
import IHabit from '../../core/habit/entities/IHabit'
const database = RealmDB.getInstance().getRealm()

class HabitStore {
  habitController: any
  habits: any[]
  constructor() {
    this.habitController = controllers.habit
    this.habits = []
    this.init().then(() => {
      console.log('---------------------init store---------------')
    })

    // reaction(
    //   () => database.objects('Habit').length,
    //   () => {
    //     console.log('reaction')
    //   }
    // )

    makeObservable(
      this,
      {
        habits: observable,
        init: action,
        addHabits: action,
        addHabit: action,

        // habitController: observable,
      },
      { autoBind: true }
    )
  }

  async init() {
    const habits = await this.habitController.getHabits()
    this.addHabits(habits)
    console.log('----------------HabitsStore------------------', this.habits)
  }

  addHabits(habits: any[]) {
    habits.forEach((habit) => {
      this.habits.push(habit)
    })
  }

  addHabit(habit: IHabit) {
    this.habits.push(habit)
  }

  async createHabit(habit: IHabit) {
    const createdHabit = await this.habitController.createHabit(habit)
    this.addHabit(createdHabit)
  }
}

const habitStore = new HabitStore()

export { habitStore }
