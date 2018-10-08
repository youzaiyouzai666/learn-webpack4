const loaderUtils = require('loader-utils');
module.exports =  function loader(source) {
  const options = loaderUtils.getOptions(this) || '空';

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${ JSON.stringify(source) }`;
}