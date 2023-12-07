import type { IGraphQLConfig } from 'graphql-config';
import type { GraphQLTagPluckOptions } from '@graphql-tools/graphql-tag-pluck';

const config: IGraphQLConfig = {
  projects: {
    firstProject: {
      schema: 'schema.first-project.graphql',
      documents: 'query.js',
      extensions: {
        pluckConfig: {
          modules: [{ name: 'graphql-tag', identifier: 'gql' }],
          globalGqlIdentifierName: 'gql',
          gqlMagicComment: 'GraphQL',
        } satisfies GraphQLTagPluckOptions,
      },
    },
    secondProject: {
      schema: 'schema.second-project.graphql',
      documents: 'query.js',
      extensions: {
        pluckConfig: {
          modules: [{ name: 'custom-graphql-tag', identifier: 'custom' }],
          globalGqlIdentifierName: 'custom',
          gqlMagicComment: 'MyGraphQL',
        } satisfies GraphQLTagPluckOptions,
      },
    },
  },
};

export default config;
