var tiles = []
var rowCount = 0;
var columnCount = tiles.length;
var defaultWidth = 0;
var previousSliderVal = 0;
var currentSize = defaultWidth;
var lastSize = 0;

function notifyMosaicComplete() {
    var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    $('.rowholder').empty()
    tiles = animosaic.getLatest()
    rowCount = tiles[0].length
    columnCount = tiles.length;

    var itemWidth = (100 / rowCount * .9)
    var estimatedWidth = itemWidth * vw
    var itemHeight = itemWidth * (4 / 3)
    var estimatedHeight = columnCount * itemHeight * vw / 100

    if (estimatedHeight > (vh * .70)) {
        itemWidth = itemWidth * ((vh * .70) / estimatedHeight)
    }

    defaultWidth = itemWidth;
    previousSliderVal = 0;
    currentSize = defaultWidth;
    lastSize = -1;
     $(".bottom-control").show()
    createPage()
}

function setWidth(width) {
    $(".rowholder").css({
        "display": "grid",
        "grid-template-columns": "repeat(" + rowCount + "," + width + "vw)",
        "grid-template-rows": "repeat(" + columnCount + "," + (width * (4 / 3)) + "vw)"
    });

    var size = $(".mosaic-tile").first().width()
    size = Math.ceil((size + 1) / 25) * 25;

    if (size != lastSize) {
        lastSize = size
        $(".mosaic-tile").filter(function() {
            return isInViewport($(this));
        }).each(function() {
            var imgTag = $(this)
            var name = imgTag.attr("img-name");
            imgTag.attr("src", name + "?w=" + size + "&format=webp");
        });
    }
}

function isInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
    let x = el.getBoundingClientRect().left;
    let y = el.getBoundingClientRect().top;
    let ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let w = el.clientWidth;
    let h = el.clientHeight;
    return ((y < hw && y + h > 0) && (x < ww && x + w > 0));
}

function createPage() {
    tiles.forEach(function(row) {
        row.forEach(function(item) {
            var itemHtml = document.createElement("a");
            itemHtml.classList.add("item");
            itemHtml.setAttribute("href", item.link);
            itemHtml.setAttribute("target", "_blank");
            var itemImage = document.createElement("img");
            itemImage.classList.add("mosaic-tile");
            itemImage.setAttribute("img-name", item.image);
            itemHtml.appendChild(itemImage);
            $(".rowholder").first().append(itemHtml);
        });
    });
    setWidth(defaultWidth);
}

function checkScroll() {
    var size = $(".mosaic-tile").first().width()
    size = Math.ceil((size + 1) / 25) * 25;

    $(".mosaic-tile").filter(function() {
        var tile = $(this)
        var src = tile.attr("src")
        var name = tile.attr("img-name");
        var expectedName = name + "?w=" + size + "&format=webp"
        return isInViewport($(this)) && $(this).attr("src") != expectedName;
    }).each(function() {
        var tile = $(this)
        var name = tile.attr("img-name");
        tile.attr("src", name + "?w=" + size + "&format=webp");
    });
}

$(document).ready(function() {
    $("#slider-horizontal").slider({
        orientation: "horizontal",
        range: "min",
        min: -4,
        max: 20,
        value: 0,
        slide: function(event, ui) {
            var newSliderVal = ui.value;
            var diff = newSliderVal - previousSliderVal;
            previousSliderVal = newSliderVal;
            var newSize = currentSize;
            if (diff > 0) {
                newSize = currentSize * Math.pow(1.25, diff);
            } else if (diff < 0) {
                newSize = currentSize * Math.pow(.8, diff * -1);
            }
            currentSize = newSize;
            setWidth(currentSize);
            checkScroll();
        }
    });

    $('.rowholder').on('scroll', function() {
        checkScroll()
    })

    createPage();

    $('.animosaic-form-file-input').each(function() {
        var input = $(this).get(0);
		var label = input.nextElementSibling;
	    var labelVal = label.innerHTML;
		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 ) {
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			} else {
				fileName = e.target.value.split( '\\' ).pop();
            }

			if( fileName ) {
				label.innerHTML = fileName;
			} else {
				label.innerHTML = labelVal;
            }
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });    })
});

function getInputImage() {
    return $('#imageInput').prop('files')[0];
}

function getInputUsername() {
    return $('#usernameInput')[0].value
}

function printImage() {
    var width = $('#width-input')[0].value / rowCount

    var clone = $(".rowholder").first().clone().removeClass("rowholder").addClass("duplicate")
    clone.css({
        "display": "grid",
        "grid-template-columns": "repeat(" + rowCount + "," + width + "px)",
        "grid-template-rows": "repeat(" + columnCount + "," + (width * (4 / 3)) + "px)",
        "z-index": "-1"
    });

    var size = Math.ceil((width + 1) / 25) * 25;

    clone.find(".mosaic-tile").each(function() {
        var imgTag = $(this)
        var name = imgTag.attr("img-name");
        imgTag.attr("src", name + "?w=" + size + "&format=webp");
    });

    $('body').append(clone)

     html2canvas(clone, {
     logging: true,
     letterRendering: 1,
     allowTaint: false,
     useCORS: true,
     onrendered: function (canvas) {
            canvas.toBlob(function(blob) {
                console.log("got blob")
                console.log(blob)
                var objectUrl = window.URL.createObjectURL(blob, {
                      type: "application/octet-stream"
                })
                saveAs(objectUrl, 'animosaic.png');
                $('.duplicate').remove()
            });
         }
     });
}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}