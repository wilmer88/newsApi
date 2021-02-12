var searchButton = document.getElementById("sbutton");
var deletebutton = document.getElementById("dbutton");
var llave = "t2H8QEgLqUNC08Pyh1327WAB5fjQEfxs";
var rl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm;
var sYear;
var eYear;

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
      var articleCount = i + 1;
      console.log(ress[i]);
      var webi = ress[i].web_url;
      var otro = ress[i].byline.original;
      var esto = ress[i].headline.main;
      var $lista = $("<ul>");
      var poruno = $("<li>");
      $lista.addClass("list-group");
      poruno.addClass("list-group-item articleHeadline");
      poruno.attr("data-name", esto);

      poruno.append(articleCount + "<strong> " + esto + "</strong>");
      $lista.append(poruno);
      poruno.append(otro + "<br>" + "<a href='" + webi + "'>" + webi + "</a>");

      $("#apme").append($lista);
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
      var articleCount = i + 1;
      console.log(ress[i]);
      var otro = ress[i].byline.original;
      var esto = ress[i].headline.main;
      var $lista = $("<ul>");
      var poruno = $("<li>");
      $lista.addClass("list-group");
      poruno.addClass("list-group-item articleHeadline");

      poruno.append(articleCount + "<strong> " + esto + "</strong>");
      poruno.append($lista);
      poruno.append(otro);

      $("#apme").append(poruno);
    }
  });
}

function borraResultados() {
  $("#apme").empty();
}
function clickSelector() {}

$(document).ready(function () {
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    $("#apme").empty();

    if (sYear === !null && eYear === !null) {
      searchForMe();
    } else {
      noPerams();
    }
  });
  document.addEventListener("click", function (element) {
    // console.log(document.attr("data-name"))

    console.log($(element).data("name"));
  });
});

deletebutton.addEventListener("click", function (event) {
  event.preventDefault();
  borraResultados();
});
