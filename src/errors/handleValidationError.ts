import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'
import { IGenericErrorResponse } from '../interfaces/commonErrorRes'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(ele => {
    return {
      path: ele?.path,
      message: ele?.message,
    }
  })
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation  Error',
    errorMeesages: errors,
  }
}

export default handleValidationError
