import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  repository: belongsTo('githubRepository'),
  author: belongsTo('githubUser')
});
