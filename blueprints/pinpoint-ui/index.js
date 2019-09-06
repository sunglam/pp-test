'use strict'

module.exports = {
  normalizeEntityName: function () {},
  description: '',

  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'leaflet', target: '^1.5.1'}
    ])
  }
}
