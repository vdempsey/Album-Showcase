function BandInfo(name, album, year) {
  this.bandName = name;
  this.albumName= album;
  this.year = year;
}

BandInfo.prototype.fullInfo = function() {
  return this.bandName + "-" + this.albumName + "-" + this.year;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputBandName = $("input#band").val();
    var inputTitle = $("input#title").val();
    var inputYear = $("input#year").val();
    var inputUrl = $("input#url").val();
    var newBandInfo = new BandInfo(inputBandName, inputTitle, inputYear);


    $(".output").append('<div class="album-container"><span>' + newBandInfo.fullInfo() + '</span>' + '<div class="img"><img src=' + inputUrl + '></div></div>');

  });
});
