$(document).ready(() => {
  axios.get("https://random-wallpaper-utsav.herokuapp.com")
    .then((response) => {
      const title = response.data['alt_description']
      const srcurl = response.data['urls']['full']
      const zoomurl = srcurl

      $("#title").text(title)
      $("#source").attr("src", srcurl)

      $("#zoom").attr("href", zoomurl)
      $("#zoom").attr("target", "_blank")

      var x = srcurl
      var splitedstring = x.split('?')
      const photoidwithurl = splitedstring[0]
      const photoid = photoidwithurl.substr(28, photoidwithurl.length)


      const domain = "https://images.unsplash.com/";
      const picname = "?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=wallpaper.jpg";
      const downloadrul = domain + photoid + picname

      $("#download").attr("href", downloadrul)
    })
    .catch((err) => {
      $("#source").attr("src", "./notfound.svg")
      console.log("error occured");
      console.log(err);
    });


})


function reload(){
  location.reload();
}
