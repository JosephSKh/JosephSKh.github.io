#Last Commit: 28 Jul 2016
#***STILL UNDER CONSTRUCTION***
# Images Helper
A JavaScript class that helps in the user interface dealing with images and difficulties that UI developers face during development.

# Getting Started:
##### Include JQuery
Download and include `ImagesHelper.js`

##Functions:
- `ImagesHelper.AdjustImages(imgParentSelector, imgSelector)` Adjusts the images to fill it's parent regarldess the ratio.

####EX:

```javascript
$(window).load(function () {
    ImagesHelper.AdjustImages(".img-album-holder",".album-img");
});
$( window ).resize(function() {
    ImagesHelper.AdjustImages(".img-album-holder",".album-img");
});
```

#CDNs:
##JS:
###JQuery:
```html
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
```