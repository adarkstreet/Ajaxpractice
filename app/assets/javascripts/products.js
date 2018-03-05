$(document).ready( function(){
  $('#show_all').on('click', function() {
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products',
      type: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      var list = $('#listy');
      list.empty();
      products.forEach( function(a){
        var li = '<li>' + a.name + ', ' + a.description + ' ' + a.id + ', ' +'</li>'       
        list.append(li)
      });
    });
  });
});