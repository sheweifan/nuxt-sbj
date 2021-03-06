import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql'

import { cityModel } from '../city/model'
import { metaModal, typeModel } from '../types/model'

export let quoteModel = new GraphQLObjectType({
  name: 'quote',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLFloat
    },
    city: {
      type: cityModel
    },
    area: {
      type: cityModel
    },
    state: {
      type: typeModel
    },
    mark: {
      type: GraphQLString
    },
    meta: {
      type: metaModal
    }
  }
})

export let quotesModel = new GraphQLObjectType({
  name: 'quotes',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    list: {
      type: new GraphQLList(quoteModel)
    }
  }
})

export let quoteInput = new GraphQLInputObjectType({
  name: 'quoteInput',
  fields: {
    state: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLFloat
    },
    city: {
      type: GraphQLInt
    },
    area: {
      type: GraphQLInt
    },
    mark: {
      type: GraphQLString
    }
  }
})
