import Ember from 'ember';

var Router = Ember.Router.extend({
  location: D3c3ENV.locationType
});

Router.map(function() {
  this.route('application');
});

export default Router;
