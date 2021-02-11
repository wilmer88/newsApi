var searchButton = document.getElementById("sbutton");
var deletebutton = document.getElementById("dbutton");
var llave = "t2H8QEgLqUNC08Pyh1327WAB5fjQEfxs";
var rl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm 
var sYear 
var eYear 

function noPerams() {
    var searchTerm = $("#inputSearch").val();
    $.ajax({
      url:
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=" +
        searchTerm +
        "&api-key=" +
        llave,

      method: "GET",
    }).then(function (res) {
      var ress = res.response.docs;

      for (var i = 0; i < ress.length; i++) {
        console.log(ress[i]);
        var otro = ress[i].byline.original;
        var esto = ress[i].headline.main;
        var $lista = $("<ul>");
        var poruno = $("<li>");
        $lista.addClass("list-group");
        poruno.addClass("list-group-item articleHeadline");

        poruno.append("<strong> " + esto + "</strong>");
        poruno.append($lista);
        poruno.append(otro);

        $("#apme").append(poruno);
      }
    });
  }

function searchForMe() {
    var searchTerm = $("#inputSearch").val();
var sYear = $("#startYear").val() + "0101";
var eYear = $("#endYear").val() + "1231";

  $.ajax({
    url:
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" +
      sYear +
      "&end_date=" +
      eYear +
      "&q=" +
      searchTerm +
      "&api-key=" +
      llave,
    method: "GET",
  }).then(function (res) {
    var ress = res.response.docs;

    for (var i = 0; i < ress.length; i++) {
      console.log(ress[i]);
      var otro = ress[i].byline.original;
      var esto = ress[i].headline.main;
      var $lista = $("<ul>");
      var poruno = $("<li>");
      $lista.addClass("list-group");
      poruno.addClass("list-group-item articleHeadline");

      poruno.append("<strong> " + esto + "</strong>");
      poruno.append($lista);
      poruno.append(otro);

      $("#apme").append(poruno);
    }
  });
}

function borraResultados() {
  $("#apme").empty();
}

$(document).ready(function () {
    searchButton.addEventListener("click", function (event) {
        $("#apme").empty();
        event.preventDefault();
       
        if (sYear === !null && eYear === !null) {
          searchForMe();}else{
              noPerams()
          }
        
    
    
      });
    

});
 
  deletebutton.addEventListener("click", function (event) {
    event.preventDefault();
    borraResultados();
  });