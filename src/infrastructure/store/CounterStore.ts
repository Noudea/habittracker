import { makeObservable, observable, action } from 'mobx'

class CounterStore {
  count = 0

  constructor() {
    makeObservable(
      this,
      {
        count: observable,
        increment: action,
        decrement: action,
      },
      { autoBind: true },
    )
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}

const counterStore = new CounterStore()

export { counterStore }
