$(document).ready(function () {
  const amen = {};
  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
	amen[$(this).data('id')] = $(this).data('name');
      } else {
	delete amen[$(this).data('id')];
      }
    ]);
    if (Object.values(amen).length > 0) {
      $('.amenities h4').text(object.values(amen).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  console.log(data);
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('available');
  }
});
