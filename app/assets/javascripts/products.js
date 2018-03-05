$(document).ready( function(){
  function getProduct(id) {
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products' + id,
      type: 'GET',
      dataType: 'JSON',
      type: 'GET'
    }).done( function(products) {
      if (editingProduct) {
        var li = $("[data-id='" + id + "'")
        $(li).replaceWith(product)
        editingProducts = null;
      } else {
        $('#products-list').append(products);
      };
    });
  };
});
  
