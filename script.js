var searching = document.getElementById("inputSearch");
var ysp = document.getElementById("startYear");
var eyp = document.getElementById("endYear");
var nRecords = document.getElementById("records");
var searchButton = document.getElementById("sbutton");
var deletebutton = document.getElementById("dbutton");
var canva = document.getElementById("apme");
var vwriter = document.getElementById("arth");
var llave = "t2H8QEgLqUNC08Pyh1327WAB5fjQEfxs";
var rl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
console.log(canva);




$(document).ready(function(){
    $.ajax({

        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=president&api-key="+ llave,
        method: "GET"
    }).then(function(res){
        for(var i = 0)
        console.log(res.response);
        console.log(res.response.docs[0].headline.main);
     var r1 = res.response.docs[0].headline.main
     var writers = res.response.docs[0].byline.original
     console.log(r1)
     canva.append(r1)
     vwriter.append(writers)

       
        
    })

    // searchButton.addEventListener("submit", function(event){
    //     event.preventDefault();

     
    // })

})