import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var committeesUrl = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&per_page=all';
    var keywordCommitteesUrl = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + '&chamber=' + params.chamber;
    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(committeesUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),
      keywordCommittees: Ember.$.getJSON(keywordCommitteesUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    })
  },
});
