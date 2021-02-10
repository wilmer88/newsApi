var searching = document.getElementById("inputSearch");
var ysp = document.getElementById("startYear");
var eyp = document.getElementById("endYear");
var nRecords = document.getElementById("records");
var searchButton = document.getElementById("sbutton");
var deletebutton = document.getElementById("dbutton");
// var canva = document.getElementById("apme");
var llave = "t2H8QEgLqUNC08Pyh1327WAB5fjQEfxs";
var rl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"





$(document).ready(function(){
    $.ajax({

        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=president&api-key="+ llave,
        method: "GET"
    }).then(function(res){
   
        var ress = res.response.docs
       
        for(var i = 0; i < ress.length; i++){
            console.log(ress[i])
            var otro = ress[i].byline.original;
            var esto = ress[i].headline.main;
            var $lista = $("<ul>");
            var poruno = $("<li>");
            $lista.addClass("list-group articleHeadline");
            poruno.addClass( "list-group-item articleHeadline" )
            $("#apme").append($lista)
            $lista.append(esto)
        poruno.append(otro)
       
        $lista.append(poruno)
      
        }
       
    })

})