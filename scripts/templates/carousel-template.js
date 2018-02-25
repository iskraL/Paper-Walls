const carouselTemplate = function () {
    return `<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
    </a>
    <button id="dln" class="btn btn-primary">Download!</button>
    <a id="link" href="" download="paperWallsWallpaper"></a>
</div>
      `;
};