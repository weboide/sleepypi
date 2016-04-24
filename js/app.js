jQuery(document).ready(function( $ ) {
  var url = require('url');
  var url_parts = url.parse(window.location.href, true);
  console.log(url_parts);
  $('webview').attr('src', url_parts.query.url);
});
 
