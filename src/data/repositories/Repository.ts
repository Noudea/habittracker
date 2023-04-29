import IHabit from '../../core/habit/entities/IHabit'

export abstract class Repository<entity, model> {
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

  public create(objectToCreate: entity): Promise<model> {
    console.log('repository', objectToCreate)

    return this.databaseAdapter.create({
      objectToCreate: objectToCreate,
      schema: this.model,
    })
  }

  public find({ id }: { id: string }): Promise<model> {
    return this.databaseAdapter.findById({ id, schema: this.model })
  }

  public findAll(): Promise<[model]> {
    return this.databaseAdapter.findAll({ schema: this.model })
  }

  public update({
    id,
    updatedObject,
  }: {
    id: string
    updatedObject: entity
  }): Promise<model> {
    return this.databaseAdapter.update({
      id,
      objectToUpdate: updatedObject,
      schema: this.model,
    })
  }

  delete({ objectToDelete }: { objectToDelete: model }): Promise<any> {
    return this.databaseAdapter.delete({
      objectToDelete,
      schema: this.model,
    })
  }
}
