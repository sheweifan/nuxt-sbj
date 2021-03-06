import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql'

import { cityModel } from '../city/model'
import { metaModal } from '../types/model'

export let reportModel = new GraphQLObjectType({
  name: 'report',
  fields: {
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    context: {
      type: GraphQLString
    },
    city: {
      type: cityModel
    },
    meta: {
      type: metaModal
    }
  }
})

export let reportsModel = new GraphQLObjectType({
  name: 'reports',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    list: {
      type: new GraphQLList(reportModel)
    }
  }
})

export let reportInput = new GraphQLInputObjectType({
  name: 'reportInput',
  fields: {
    title: {
      type: GraphQLString
    },
    context: {
      type: GraphQLString
    },
    city: {
      type: GraphQLInt
    }
  }
})
