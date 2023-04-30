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

  public update({ updatedObject }: { updatedObject: entity }): Promise<entity> {
    return this.databaseAdapter.update({
      objectToUpdate: updatedObject,
      schema: this.model,
    })
  }

  public delete({ objectToDelete }: { objectToDelete: entity }): Promise<any> {
    return this.databaseAdapter.delete({
      objectToDelete,
      schema: this.model,
    })
  }
}
