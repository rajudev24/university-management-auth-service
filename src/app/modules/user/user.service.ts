import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //  auto generated incremental id
  const id = await generatedUserId()
  user.id = id
  // Default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Falied to create User')
  }
  return createdUser
}

export default {
  createUser,
}
