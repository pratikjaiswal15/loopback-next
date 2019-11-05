// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {expect} from '@loopback/testlab';
import {
  BelongsToDefinition,
  Entity,
  ModelDefinition,
  RelationType,
} from '../../..';
import {resolveBelongsToMetadata} from '../../../relations/belongs-to/belongs-to.helpers';

describe('resolveBelongsToMetadata', () => {
  it('throws if the wrong metadata type is used', async () => {
    expect(() => {
      resolveBelongsToMetadata(Category.definition.relations[
        'category'
      ] as BelongsToDefinition);
    }).to.throw(
      /Invalid hasOne definition for Category#category: relation type must be BelongsTo/,
    );
  });

  /******  HELPERS *******/
  class Category extends Entity {}

  Category.definition = new ModelDefinition('Category')
    .addProperty('id', {type: 'number', id: true, required: true})
    // need <unknown> to avoid Type 'RelationType.hasOne' is not comparable
    // to type 'RelationType.belongsTo'
    .addRelation(<BelongsToDefinition>(<unknown>{
      name: 'category',
      type: RelationType.hasOne,
      targetsMany: false,
      source: Category,
      keyFrom: 'id',
      target: () => Category,
      keyTo: 'categoryId',
    }));
});
