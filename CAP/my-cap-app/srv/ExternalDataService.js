const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {
  const { ExternalItems } = this.entities;

  this.on('READ', ExternalItems, async () => {
    return [
      { ID: '1', Name: 'Test item', Description: 'Dit is dummy data' },
      { ID: '2', Name: 'Nog iets', Description: 'Meer testdata' }
    ];
  });
});
