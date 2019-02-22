let url = "http://0.0.0.0:5001/api/v1/status/"
$('document').ready(function () {
  const amenityChecked = {};
  const amenityCheckboxArray = Array.from($('div.amenities input:checkbox'));
  for (let i = 0; i < amenityCheckboxArray.length; i++) {
    amenityCheckboxArray[i].addEventListener('change', () => {
      if ($(amenityCheckboxArray[i]).is(':checked')) {
        amenityChecked[$(amenityCheckboxArray[i]).attr('data-id')] = $(amenityCheckboxArray[i]).attr('data-name');
      } else {
        delete amenityChecked[$(amenityCheckboxArray[i]).attr('data-id')];
      }
      // update h4 amenities list (ordered)
      let list = [];
      for (id in amenityChecked) {
        list.push(amenityChecked[id]);
      }
      list.sort();
      if (list.length !== 0) {
        $('div.amenities h4').html(list.join(', '));
      } else {
        $('div.amenities h4').html('&nbsp;');
      }
    });
  }
  $.get(url, function (data, statusText, xhr) {
    console.log(data);
    console.log(statusText);
    console.log(xhr.status);
    if (statusText === "success")
    {
      console.log("here");
      $("DIV#api_status").toggleClass("available");
    } else {
      $("DIV#api_status").toggleClass("available");
    }
  });
});
