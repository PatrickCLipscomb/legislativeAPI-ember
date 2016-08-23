import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('recentbills');
  this.route('committees', {path: '/committees/:chamber'});
  this.route('bills', {path: '/bills/:bill'});
});

export default Router;
