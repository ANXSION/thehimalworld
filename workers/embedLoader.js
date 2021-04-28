function embedLoad(){
  console.log('Message received. Starting Work');
  document.getElementById("embed1").innerHTML="<iframe loading='lazy' width='560' height='315' src='https://www.youtube.com/embed/cWPsLvrF3MM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  document.getElementById("embed2").innerHTML="<iframe loading='lazy' width='560' height='315' src='https://www.youtube.com/embed/iwvOREzipjE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  

}
embedLoad();
