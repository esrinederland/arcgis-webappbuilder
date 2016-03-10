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

define([
    'dojo/_base/declare',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/BaseWidgetSetting',
    'dijit/form/TextBox',
    'jimu/dijit/CheckBox'
  ],
  function(
    declare,
    _WidgetsInTemplateMixin,
    BaseWidgetSetting) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
      //these two properties is defined in the BaseWidget
      baseClass: 'jimu-widget-exit-setting',

      startup: function() {
        this.inherited(arguments);

        if (!this.config.url) {
            this.config.url = "http://www.esri.nl";
        }
        if (!this.config.urlParameter) {
            this.config.urlParameter = null;
        }
  
        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.config = config;
        if (config.url) {
            this.url.set('value', config.url);
        }
        if (config.urlParameter) {
            this.urlParameter.set('value', config.urlParameter);
        }
      
      },

      getConfig: function() {
          if (!this.url.value) {
          alert(this.nls.warning);
          return false;
        }
          this.config.url = this.url.value;

          if (this.urlParameter.value) {
              this.config.urlParameter = this.urlParameter.value;
          }

      
        return this.config;
      }

    });
  });