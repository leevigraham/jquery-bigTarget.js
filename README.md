# jquery-bigTarget.js v2.0

jquery-bigTarget.js takes an anchor and expands it's clickzone by adding an onclick action to a parent element (defined in the clickzone plugin option) improving user accessibility.

## Status

Stable, no longer developed

## Usage

``` js

# Simple Example

$(".big-target-link").bigTarget();

# Complete Example

$("#example2 .big-target-link").bigTarget({
    clickZone: '#example2',
    clickZoneClass: 'custom-big-target-click-zone',
    clickZoneHoverClass: 'custom-big-target-click-zone-hover',
    anchorClass: 'custom-big-target-anchor',
    anchorHoverClass: 'custom-big-target-anchor-hover',
    copyTitleToClickZone: false,
    openRelExternalInNewWindow: false
});
```

## Plugin options

* `clickZone: 'div:eq(0)' - parent element selector. The element will be the big target clickzone
* `clickZoneClass`: 'big-target-click-zone' - class added to the clickzone
* `clickZoneHoverClass`: 'big-target-click-zone-hover' - class add on clickzone hover
* `anchorClass`: 'big-target-anchor' - class added the the bigTarget anchor
* `anchorHoverClass`: 'big-target-anchor-hover' - class added the the bigTarget anchor on hover
* `copyTitleToClickZone`: true - copy the anchors title element to the clickzone
* `openRelExternalInNewWindow`: true - open rel="external" in a new window / tab

## Examples

See the index.html file for examples.

## Credits

Created by [Leevi Graham](http://leevigraham.com)
