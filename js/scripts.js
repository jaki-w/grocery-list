$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    var listItem1 = $(one).val();
    var listItem2 = $(two).val();
    var listItem3 = $(three).val();
    var listItems = [listItem1, listItem2, listItem3];
    listItems.sort();

    var newList = listItems.map(function(listItems){
      return listItems.toUpperCase();
    });

    alert(newList);

    $(".container").hide();
  });
});
