import Ember from 'ember'
import L from 'leaflet'
import layout from 'pinpoint-ui/templates/components/test-comp/print-comp'

const {Component} = Ember

export default Component.extend({
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================
  layout,
  classNames: ['print-comp'],

  // == Properties ============================================================

  // == PropTypes =============================================================
  propTypes: {

  },

  getDefaultProps () {
    return {

    }
  },

  // == Computed Propertys ======================================================

  // == Functions =============================================================

  // == Tasks =================================================================

  // == Lifecycle Hooks =======================================================
  init () {
    this._super(...arguments)
  },

  // == Actions ===============================================================
  actions: {

  }
})
