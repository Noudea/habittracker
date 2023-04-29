import { makeObservable, observable, action } from 'mobx'
import IHabit from '../../core/habit/entities/IHabit'
import controllers from '../../infrastructure/controllers'

class HabitStore {
  habitController: any
  habits: IHabit[] = []
  constructor() {
    this.habitController = controllers.habit

    makeObservable(
      this,
      {
        // habitController: observable,
        habits: observable,
        createHabit: action,
        getHabits: action,
      },
      { autoBind: true },
    )
  }

  async createHabit(habit: IHabit) {
    console.log('store')
    const createdHabit = await this.habitController.createHabit(habit)
    this.habits.push(createdHabit)
  }

  getHabit({ id }: { id: string }) {
    return this.habitController.findHabit({ id })
  }

  getHabits() {
    return this.habitController.getHabits()
  }
}

const habitStore = new HabitStore()

export { habitStore }
