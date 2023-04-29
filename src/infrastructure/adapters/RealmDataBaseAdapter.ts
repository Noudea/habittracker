import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

class RealmDataBaseAdapter {
  private database: any

  constructor({ database }: { database: any }) {
    this.database = database
  }

  async create({
    objectToCreate,
    schema,
  }: {
    objectToCreate: object
    schema: string
  }): Promise<any> {
    const id = uuidv4()
    const _objectToCreate = { ...objectToCreate, _id: id }
    const createdObject = this.database.write(() => {
      return this.database.create(schema, _objectToCreate)
    })
    return createdObject.toJSON()
  }

  async findById({ id, schema }: { id: string; schema: string }) {
    const object = await this.database.objectForPrimaryKey(schema, id)
    if (!object) {
      return undefined
    }
    return object.toJSON()
  }

  async update({
    id,
    objectToUpdate,
    schema,
  }: {
    id: string
    objectToUpdate: object
    schema: string
  }) {
    const _objectToUpdate = { ...objectToUpdate, _id: id }
    const updatedObject = await this.database.write(() => {
      return this.database.create(schema, _objectToUpdate, 'modified')
    })

    return updatedObject.toJSON()
  }

  async delete({
    objectToDelete,
    schema,
  }: {
    objectToDelete: { _id: string }
    schema: string
  }) {
    await this.database.write(() => {
      const _objectToDelete = this.database.objectForPrimaryKey(
        schema,
        objectToDelete._id
      )
      this.database.delete(_objectToDelete)
    })

    return {
      success: true,
      _deleted: {
        ...objectToDelete,
      },
    }
  }
}

export default RealmDataBaseAdapter
