$("#madLibIt").click(madLibIt);


function madLibIt() {
  let name = $("#name").val();
  let adjective = $("#adj").val();
  let verb = $("#verb").val();
  let noun = $("#noun").val();

  $("#output").html("Hello " + name + ". Would you like to eat a(n) " + adjective + " banana. We could eat it after we " + verb + " on a " + noun + ".");
}
