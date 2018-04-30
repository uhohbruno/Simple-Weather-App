$(document).ready(function (){
  
  let lat, lon, tempF, tempC;
  navigator.geolocation.getCurrentPosition(function(position) {
    
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    do_something(position);
  });
  
function do_something(position) {
     
    
    $.ajax({
      url: "http://api.apixu.com/v1/current.json?key=25a4da6f2ca8453d89e223519182904&q=" + lat + "," + lon,
      success: function(file) {
        tempF = file.current.temp_f;
        tempC = file.current.temp_c;
        $(".icon").attr('src', "http:" + file.current.condition.icon);
        $(".icon").on("load", function () {
          
          
      
        $("h3").html(file.location.name);
        if (file.current.is_day == 0) {
          $(".boundary").css({"background": "rgb(61, 78, 135)"});
          $("body").css({"background": "rgb(61, 78, 135)"});
          $('.arrow').attr('src', './icons/doublearrow.svg')
          $("#condition p").html(file.current.condition.text);
          $("#temperature p").html(file.current.temp_c + "&#176;C")
            $("#temperature span").html("&#176;F");
        } else {
          
          $(".boundary").css({"background": "rgb(54, 151, 200)"});
          $("body").css({"background": "rgb(54, 151, 200)"});
          $('.arrow').attr('src', './icons/doublearrow.svg')
          $("#condition p").html(file.current.condition.text);
          $("#temperature p").html(file.current.temp_c + "&#176;C")
            $("#temperature span").html("&#176;F");
        }
    })
        
      
      }, error: function(jqxhr, status, exception) {
        console.log(status);
        console.log(jqxhr);
        console.log(exception);
      }, complete: function() {
        $("#loading").hide();
        $(".boundary").addClass("boundaryscale");
      }
  
    })
  
}




  
  
$("#switch").click(function() { 
  
  
  
  if($("#temperature p").html().match(/C/g
)) {
  
  $("#temperature p").html(tempF + "&#176;F")
    $("#temperature span").html("&#176;C")
  } 
  
  
  else {
    $("#temperature p").html(tempC + "&#176;C")
      $("#temperature span").html("&#176;F")
  }
    
})
  
  
  
})