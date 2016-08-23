import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var billsURL = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&query=' + params.bill;
    return Ember.RSVP.hash({
      bills: Ember.$.getJSON(billsURL).then(function(responseJSON) {
        console.log(responseJSON)
        return responseJSON.results;
      })
    })
  }
});
