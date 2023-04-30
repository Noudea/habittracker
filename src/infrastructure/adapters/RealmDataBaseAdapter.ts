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
    const createdObject = await this.database.write(() => {
      return this.database.create(schema, objectToCreate)
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

  async findAll({ schema }: { schema: string }): Promise<[] | undefined> {
    const objects = await this.database.objects(schema)
    if (!objects) {
      return undefined
    }
    return objects.toJSON()
  }

  async update({
    objectToUpdate,
    schema,
  }: {
    objectToUpdate: object
    schema: string
  }) {
    const updatedObject = await this.database.write(() => {
      return this.database.create(schema, objectToUpdate, 'modified')
    })
    return updatedObject.toJSON()
  }

  async delete({
    objectToDelete,
    schema,
  }: {
    objectToDelete: { id: string }
    schema: string
  }) {
    await this.database.write(() => {
      const _objectToDelete = this.database.objectForPrimaryKey(
        schema,
        objectToDelete.id
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
