import Ember from 'ember';

export default Ember.Component.extend({
  tagTypes: [null, 'strategic', 'racial', 'monetary'],
  actions: {
    selectBillType() {
      const selectedEl = this.$('#tag-bill-select')[0]
      const selectedIndex = selectedEl.selectedIndex;
      const options = $('#tag-bill-select option');
      const selectedValueBill = options[selectedIndex].value;
      var params = {
        bill: selectedValueBill
      };
      console.log(selectedValueBill)
      this.sendAction('billfinder', params)
    }
  }
});
