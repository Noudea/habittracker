import { v4 as uuidv4 } from 'uuid'

class RealmDataBaseAdapter {
  private database: any

  constructor({ database }: { database: any }) {
    this.database = database
  }

  async create({
    data,
    schema,
  }: {
    data: object
    schema: string
  }): Promise<any> {
    const id = uuidv4()
    const objectToCreate = { ...data, _id: id }
    const createdObject = await this.database.write(() => {
      return this.database.create(schema, objectToCreate)
    })
    return createdObject.toJSON()
  }
}

export default RealmDataBaseAdapter
