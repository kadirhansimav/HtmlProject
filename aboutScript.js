$(document).ready(function () {
  var links = document.getElementsByTagName("a");


  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", check);
  }

  function check(event) {
    var title = event.target.getAttribute("title");
    console.log(title);
     


    $.ajax({
      url:   title + ".json",
      dataType: 'json',
      success: function (data) {
        var $mainElement = $('#content');
        var $imageElement = $('.fotorama');
        console.log( data["artists"][0]["biography"]);

        $mainElement.empty();
        $imageElement.empty();

        
        var mtTitle = document.querySelector("p");
        mtTitle.innerHTML = data["artists"][0]["biography"];

               
        var name = document.querySelector("h1");
        name.innerHTML = data["artists"][0]["name"];
         

               
        var myType = document.querySelector("h2");
        myType.innerHTML = data["artists"][0]["type"];
         
               
        var myImage = document.querySelector("img");
        myImage.setAttribute("src", data["artists"][0]["image"]);
         
         
      


      },
      error: function (jqXHR, textStatus, errorThrown) {

        console.error(errorThrown);
      }
    });

  }





  // Diğer JSON dosyaları için aynı adımları tekrarlayın...

}); // end ready