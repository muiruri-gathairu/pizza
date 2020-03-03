var sizeOfPizza = $(".size option:selected").val();
var crustOfPizza = $(".crust option:selected").val();
var toppingsOfPizza = $(".toppings option:selected").val();
var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza);
var order = 0;
var grandTotal = 0;

function Pizza(size, crust, toppings, total, orderNo) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
    this.orderNo = orderNo;
  }

  $(document).ready(function(){
    $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    $("#total").html(total);
  });

 