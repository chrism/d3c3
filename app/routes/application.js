import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
  }
});
