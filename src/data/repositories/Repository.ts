import IHabit from '../../core/habit/entities/IHabit'

export abstract class Repository<entity> {
  private readonly databaseAdapter: any
  private readonly model: string

  protected constructor({
    databaseAdapter,
    model,
  }: {
    databaseAdapter: any
    model: string
  }) {
    this.databaseAdapter = databaseAdapter
    this.model = model
  }

  public create(objectToCreate: entity): Promise<entity> {
    return this.databaseAdapter.create({
      objectToCreate: objectToCreate,
      schema: this.model,
    })
  }

  public find({ id }: { id: string }): Promise<entity> {
    return this.databaseAdapter.findById({ id, schema: this.model })
  }

  public findAll(): Promise<[entity]> {
    return this.databaseAdapter.findAll({ schema: this.model })
  }

  public update({
    id,
    updatedObject,
  }: {
    id: string
    updatedObject: entity
  }): Promise<entity> {
    return this.databaseAdapter.update({
      id,
      objectToUpdate: updatedObject,
      schema: this.model,
    })
  }

  delete({ objectToDelete }: { objectToDelete: entity }): Promise<any> {
    return this.databaseAdapter.delete({
      objectToDelete,
      schema: this.model,
    })
  }
}
