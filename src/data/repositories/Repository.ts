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

  public async create(objectToCreate: entity): Promise<model> {
    return await this.databaseAdapter.create({
      objectToCreate: objectToCreate,
      schema: this.model,
    })
  }

  public async find({ id }: { id: string }): Promise<model> {
    return this.databaseAdapter.findById({ id, schema: this.model })
  }

  public async update({
    id,
    updatedObject,
  }: {
    id: string
    updatedObject: entity
  }): Promise<model> {
    return await this.databaseAdapter.update({
      id,
      objectToUpdate: updatedObject,
      schema: this.model,
    })
  }

  async delete({ objectToDelete }: { objectToDelete: model }): Promise<any> {
    return await this.databaseAdapter.delete({
      objectToDelete,
      schema: this.model,
    })
  }
}
