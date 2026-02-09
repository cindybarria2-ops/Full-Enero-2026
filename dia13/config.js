const config = require('config');

const dbConfig = config.get('Customer.dbConfig');
dbConfig.connect();

if (config.has('optionalFeature.detail')) {
  const detail = config.get('optionalFeature.detail');
    // Use the detail for some optional feature
}