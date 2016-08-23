import Ember from 'ember';

export default Ember.Component.extend({
  tagTypes: [null, 'senate', 'house', 'joint'],
  tagType: null,
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    recentBills() {
      this.sendAction('recentBills');
    },
    committees() {
      this.sendAction('committees', this.tagType);
    },
    selectTagType() {
      const selectedEl = this.$('#tag-type-select')[0]
      const selectedIndex = selectedEl.selectedIndex;
      const options = $('#tag-type-select option');
      const selectedValue = options[selectedIndex].value;
      // console.log(selectedValue);
      var params = {
        chamber: selectedValue
      };
      this.sendAction('committees', params)
    }
  }
});
