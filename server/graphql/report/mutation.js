import {
  GraphQLID
} from 'graphql'

import mongoose from 'mongoose'

import {
  reportInput
} from './model'

import cud from '../utils/CUD'

const Report = mongoose.model('report')

const reportCud = cud(Report, reportInput, GraphQLID)

export default {
  reportUpdate: reportCud.update,
  reportRemove: reportCud.remove,
  reportCreate: reportCud.create
}
