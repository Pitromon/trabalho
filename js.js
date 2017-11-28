$(function() {
    var linkPesquisa = "https://opentdb.com/api.php?amount=10";

    $.get( linkPesquisa, function( data ) {
        $( ".result" ).html( data.results[0].question );
    });

});
