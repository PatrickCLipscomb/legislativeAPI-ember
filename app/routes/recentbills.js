import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?apikey=1398b34605a145bdb69ed57432b196a4';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results
    })
  }
});
