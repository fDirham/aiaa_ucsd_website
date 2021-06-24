function resetform() {
    setTimeout(function(){ document.getElementById('email').value = ""; }, 100);
}

window.onload = (event) => {
    document.getElementById('email').value = "";
  };

  //open calendar new tab
  jQuery('.eo-fullcalendar').on( 'click', '.fc-event', function(e){
    e.preventDefault();
    window.open( jQuery(this).attr('href'), '_blank' );
});