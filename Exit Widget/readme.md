# Exit Widget

The Exit Widget leaves the Web App and opens a new url. A paramater can be passed to the new URL.

For example, if the webapp builder app was called with the parameter id=5
eg. http://domain/webappbuilder/myApp?id=5

the new url will be  http://www.esri.nl?id=5

config.json
{
  "url": "http://www.esri.nl",
  "urlParameter": "id"
}

## Requirements

Requires Web AppBuilder for ArcGIS version 1.3



## Instructions Deploying Widgets.


To use the widgets with you should copy any of the widgets to the stemapp/widget directory. This is located in %webappbuilder_install%/client directory.