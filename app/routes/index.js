import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    recentBills() {
      this.transitionTo('recentbills');
    },
    committees(params) {
      this.transitionTo('committees', params.chamber)
    },
    billfinder(params) {
      this.transitionTo('bills', params.bill)
    }
  }
});
