$( document ).ready(function() {
    $("#menu").load("nav.html");
});

$( document ).ready(function() {
    $("#footer").load("footer.html");
});

//relative? file:///C:/Users/Leeds/Downloads/html5up-spectral/assets/json/calendar.json
/*$.getJSON('assets/json/calendar.json', function(data) {
  $.each(data.items.reverse(), function(i,item){
    var start = new Date(item.start.dateTime);
    var end = new Date(item.end.dateTime);
    $("#two").html("<section class=\"spotlight\"> <div class=\"image\"><img src=\"images/pic01.jpg\" /></div><div class=\"content\"><h2>"+ item.summary +"</h2><p>"+ item.description +"</p><p>"+ start.getDate() + "/" + ( start.getMonth() + 1 ) + "/" + start.getFullYear() +" - "+ end.getDate() + "/" + ( end.getMonth() + 1 ) + "/" + end.getFullYear() + "</p></div></section>"+$("#two").html());
    
  });
});
*/
/*
<section class="spotlight">
    <div class="image"><img src="images/pic01.jpg" alt="" /></div><div class="content">
        <h2>item.summary</h2>
        <p>item.description</p>
        <p>{start} - {end}</p>
    </div>
</section>
*/

$("#ContactButton").click(function () {
    $header = $(this);
    $content = $("#ContactSection");
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Contact";
        });
    });

});


$("#ContactFrame").load(function(){
    $content = $("#ContactSection");
    $content.slideToggle(500)
})