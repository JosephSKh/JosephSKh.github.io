/*    
@licstart  The following is the entire license notice for the 
JavaScript code in this page.

Copyright (C) 2016  Joseph Safwat Khella

The JavaScript code in this page is free software: you can
redistribute it and/or modify it under the terms of the GNU
General Public License (GNU GPL) as published by the Free Software
Foundation, either version 3 of the License, or (at your option)
any later version.  The code is distributed WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

As additional permission under GNU GPL version 3 section 7, you
may distribute non-source (e.g., minimized or compacted) forms of
that code without the copy of the GNU GPL normally required by
section 4, provided you include this license notice and a URL
through which recipients can access the Corresponding Source.   


@licend  The above is the entire license notice
for the JavaScript code in this page.
*/

var ImagesHelper = {
	//Adjusts Images to fill it's parent container
	AdjustImages: function (imgParentSelector, imgSelector){
	    $(imgParentSelector).each(function () {
	        if ($(this).find(imgSelector).height() >= $(this).find(imgSelector).width()) {
	            $(this).find(imgSelector).css("height", "auto");
	            $(this).find(imgSelector).css("width", "100%");
	        } else {
	            $(this).find(imgSelector).css("height", "100%");
	            $(this).find(imgSelector).css("width", "auto");
	        }
	    }).promise().done(function () {
	        $(imgParentSelector).each(function () {
	            if ($(this).height() > $(this).find(imgSelector).height()) {
	                $(this).find(imgSelector).css("height", "100%");
	                $(this).find(imgSelector).css("width", "auto");
	            } else if ($(this).width() > $(this).find(imgSelector).width()) {
	                $(this).find(imgSelector).css("height", "auto");
	                $(this).find(imgSelector).css("width", "100%");
	            }
	        });
	    });
	},
	//
};