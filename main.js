
  $( document ).ready( function() {
    var jbTime = 900;
    $( '.logo > img' ).animate( {opacity: '1', paddingTop: '0'}, jbTime, function() {
      $('.hello').animate( {opacity: '1', marginTop : '0'}, jbTime, function () {
        $('.name').animate( {opacity: '1', marginTop: '0'})
      })
    });
  });
