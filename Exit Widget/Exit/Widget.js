///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
function getParam(sname) {
    var params = window.location.search.substr(window.location.search.indexOf("?") + 1);
    console.log(params)
    var sval = "";
    params = params.split("&");
    // split param and value into individual pieces
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}

define([
    'dojo/_base/declare',
    'jimu/BaseWidget',
    'dojo/_base/html',
    'dojo/on',
    'dojo/_base/lang',
    'jimu/dijit/Message',
    'dojo/touch'
  ],
  function(
    declare,
    BaseWidget,
    html,
    on,
    lang) {
    var clazz = declare([BaseWidget], {

      name: 'Exit',
      baseClass: 'jimu-widget-exit',

      startup: function() {
        this.inherited(arguments);
        this.placehoder = html.create('div', {
          'class': 'place-holder'
        }, this.domNode);

           this.own(on(this.placehoder, 'click', lang.hitch(this, this.onExitClick)));
      },

      

      onExitClick: function () {
          if (this.config && this.config.url)

              urlParameter = "";
           
          if (this.config.urlParameter) {
              urlParameter = "?" + this.config.urlParameter + "=" + getParam(this.config.urlParameter);
              }
              console.log(this.config.url + urlParameter)
              window.location.href = this.config.url + urlParameter;
          
      },     

      destroy: function() {      
        this.inherited(arguments);
      }
    });
    clazz.inPanel = false;
    clazz.hasUIFile = false;
    return clazz;
  });