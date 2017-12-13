export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:4001/' : 'https://protected-bastion-85199.herokuapp.com/';

  // const inDevelopment = window.location.hostname === 'localhost';
  // return inDevelopment ? 'http://localhost:4001/' : '/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
