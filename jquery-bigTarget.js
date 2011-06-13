/**
* jquery-bigTarget.js - enlarge an anchors clickzone
* https://github.com/leevigraham/jquery-bigTarget
* Written by: Leevi Graham <http://leevigraham.com>
* Requires: jQuery v1.3.2 or later
*
* jquery-bigTarget.js takes an anchor and expands it's clickzone by adding an onclick action to a parent element (defined in the clickzone plugin option)  improving user accessibility.
*
* Plugin options:
* 
* clickZone: 'div:eq(0)', // parent element selector. The element will be the big target clickzone
* clickZoneClass: 'big-target-click-zone', // class added to the clickzone
* clickZoneHoverClass: 'big-target-click-zone-hover', // class add on clickzone hover
* anchorClass: 'big-target-anchor', // class added the the bigTarget anchor
* anchorHoverClass: 'big-target-anchor-hover', // class added the the bigTarget anchor on hover
* copyTitleToClickZone: true, // copy the anchors title element to the clickzone
* openRelExternalInNewWindow: true // open rel="external" in a new window / tab
*
* Example Usage:
*
* $("#example2 .big-target-link").bigTarget({
*     clickZone: '#example2',
*     clickZoneClass: 'custom-big-target-click-zone',
*     clickZoneHoverClass: 'custom-big-target-click-zone-hover',
*     anchorHoverClass: 'custom-big-target-link-hover',
*     copyTitleToClickZone: false,
*     openRelExternalInNewWindow: false
* });
*/

;(function($) {

	var ver = '2.0';

	$.fn.bigTarget = function(options) {
		var settings = $.extend({}, $.fn.bigTarget.defaults, options)
		return this.each(function(index) {

			var $a = $(this),
				href = this.href || false,
				title = this.title || false;

			if(!href) {
				return;
			}

			var o = $.metadata ? $.extend({}, settings, $a.metadata()) : settings;

			$a
				.addClass(o['anchorClass'])
				.hover(function() {
					$a.toggleClass(o['anchorHoverClass']);
				})
				.parents(o['clickZone'])
				.each(function(index) {
					var $clickZone = $(this);
					if(title && o['copyTitleToClickZone']) {
						$clickZone.attr('title', title);
					}
					$clickZone
						.addClass(o['clickZoneClass'])
						.hover(function() {
							$clickZone.toggleClass(o['clickZoneHoverClass']);
						})
						.click(function() {
							if(getSelectedText() == "") {
								($a.is('[rel*=external]') && o["openRelExternalInNewWindow"]) 
									? window.open(href) 
									: window.location = href;
							}
						});
				});
		});
	}

	function getSelectedText(){ 
		var t = false;
		 if(window.getSelection) {
			 t = window.getSelection().toString();
		 } else if(document.getSelection) {
		   t = document.getSelection();
		 } else if(document.selection) {
		   t = document.selection.createRange().text;
		 }
		 return t;
	}

	$.fn.bigTarget.ver = function() { return ver; };

	$.fn.bigTarget.defaults = {
		clickZone : 'div:eq(0)',
		clickZoneClass : 'big-target-click-zone',
		clickZoneHoverClass : 'big-target-click-zone-hover',
		anchorClass : 'big-target-anchor',
		anchorHoverClass : 'big-target-anchor-hover',
		copyTitleToClickZone : true,
		openRelExternalInNewWindow: true
	};

})(jQuery);