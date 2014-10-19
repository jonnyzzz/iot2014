this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["auth"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"header no-auth\">\r\n    <a href=\"#\" class=\"logo navbar-brand\"><img src=\"./assets/images/logo.png\"/></a>\r\n    <div class=\"right-buttons\">\r\n\r\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"logout\"><span class=\"icon-log-out\"></span></div>\r\n\r\n    </div>\r\n</div>\r\n\r\n");
  data.buffer.push(escapeExpression((helper = helpers['app-notification'] || (depth0 && depth0['app-notification']),options={hash:{
    'opts': ("notification")
  },hashTypes:{'opts': "ID"},hashContexts:{'opts': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "app-notification", options))));
  data.buffer.push("\r\n<div class=\"body\">\r\n	<div class=\"main-content\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["auth/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"content-wrapper\">\n	\n	<div id=\"highcharts-container\" style=\"padding-top: 10px;height: 400px; width: 600px; background:#fff; border-radius:20px;display:inline-block;float:left;\">\n	</div>\n		\n	<div style=\"width: 300px; background:#fff;padding: 10px 0; border-radius:20px;display:inline-block;float:left;margin-left: 10px;\">\n		<h1 style=\"font-family: Signika, serif;color: #000;font-size: 32px;font-weight: bold;fill: #000;\">Visitors</h1>\n\n		<div style=\"color:#7798BF;font-size: 150px;font-weight: bold;padding: 30px 0;\">\n			");
  stack1 = helpers._triageMustache.call(depth0, "controller.nrVisitors", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n\n	</div>\n\n	<div style=\"clear:both;\"></div>\n\n	<div id=\"columns-highcharts-container\" style=\"padding-top: 10px;height: 400px; width: 910px; background:#fff; border-radius:20px;display:inline-block;float:left;margin: 10px 0 80px 0;\">\n	</div>\n\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["auth/loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "loading", options) : helperMissing.call(depth0, "partial", "loading", options))));
  
});

this["Ember"]["TEMPLATES"]["book"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"book\"> ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/app-notification"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("opts.type :message")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    <div class=\"message-icon\"><img src=\"../assets/images/icons/message.png\"/></div>\r\n    <div class=\"message-text\">\r\n        <div class=\"message-text-title\">");
  stack1 = helpers._triageMustache.call(depth0, "opts.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n        <div class=\"message-text-description\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "opts.content", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/auto-complete"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("autocomplete"),
    'value': ("currentValue")
  },hashTypes:{'class': "STRING",'value': "ID"},hashContexts:{'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  
});

this["Ember"]["TEMPLATES"]["components/date-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"datepicker-element\"></div>");
  
});

this["Ember"]["TEMPLATES"]["components/driver-autocomplete"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("autocomplete"),
    'value': ("currentDriverCO")
  },hashTypes:{'class': "STRING",'value': "ID"},hashContexts:{'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  
});

this["Ember"]["TEMPLATES"]["components/floating-icons"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"icons-container container-top\"></div>\r\n<div class=\"icons-container container-bottom\"></div>");
  
});

this["Ember"]["TEMPLATES"]["components/image-upload"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n	    	<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imageData")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n	    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n	    	");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	    	<div class=\"upload-info\">\r\n	    		<p>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.imageDragAndDrop", options) : helperMissing.call(depth0, "t", "general.imageDragAndDrop", options))));
  data.buffer.push("</p>\r\n	    	</div>\r\n    	");
  return buffer;
  }

  data.buffer.push("<a id=\"delete\" class=\"icon-trash-can\"></a>\r\n<div class=\"drop-zone\">\r\n    <div class=\"upload-image\">\r\n	    ");
  stack1 = helpers['if'].call(depth0, "imageData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	    ");
  stack1 = helpers['if'].call(depth0, "fileReaderSupported", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>\r\n<input type=\"file\" id=\"file-upload\">");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/input-checkbox"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"input-checkbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCheck", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\r\n    <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":checkbox-icon checkedValue:icon-marked:icon-unmarked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("checkedValue")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/input-date"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<label>");
  data.buffer.push(escapeExpression((helper = helpers.tRaw || (depth0 && depth0.tRaw),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "label", options) : helperMissing.call(depth0, "tRaw", "label", options))));
  data.buffer.push("</label>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("formattedDate")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers['date-picker'] || (depth0 && depth0['date-picker']),options={hash:{
    'selectedDate': ("date"),
    'isVisible': ("isDatepickerVisible"),
    'minDate': ("minDate"),
    'maxDate': ("maxDate")
  },hashTypes:{'selectedDate': "ID",'isVisible': "ID",'minDate': "ID",'maxDate': "ID"},hashContexts:{'selectedDate': depth0,'isVisible': depth0,'minDate': depth0,'maxDate': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/input-radio-tick"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n		<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "select", "option.value", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("option.value")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n            <span class=\"tick\"></span>\r\n            <label>");
  stack1 = helpers._triageMustache.call(depth0, "option.displayTranslated", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n        </li>\r\n    ");
  return buffer;
  }

  data.buffer.push("<ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("name")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers.each.call(depth0, "option", "in", "options", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</ul>\r\n\r\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/input-radio"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "select", "option.value", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("option.value")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "option.display", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("name")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    ");
  stack1 = helpers.each.call(depth0, "option", "in", "options", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/input-slider"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"slider-element\">\r\n    <label class=\"min\">0</label>\r\n    <label class=\"max\">100</label>\r\n</div>");
  
});

this["Ember"]["TEMPLATES"]["components/opening-timepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"popup-layer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closePricingTimepickerPopup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\r\n<div  class=\"popup datetimepicker-popup default\">\r\n	<div class=\"popup-header\">\r\n		<span class=\"popup-triangle popup-triangle-left\"></span>\r\n		<span class=\"popup-triangle popup-triangle-right\"></span>\r\n	</div>\r\n	<table class=\"datetimepicker-wrapper\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doNothing", {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n		<tr>\r\n			<td>\r\n				<div class=\"timepicker\"></div>\r\n			</td>\r\n			<td>\r\n				<div class=\"timepicker\"></div>\r\n			</td>\r\n		</tr>\r\n	</table>\r\n	<div class=\"popup-footer\">\r\n		<span class=\"popup-triangle-down popup-triangle-left\"></span>\r\n		<span class=\"popup-triangle-down popup-triangle-right\"></span>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/pagination-buttons"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	<div class=\"buttons\">\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['input-radio'] || (depth0 && depth0['input-radio']),options={hash:{
    'value': ("pageNumber"),
    'options': ("pageButtons")
  },hashTypes:{'value': "ID",'options': "ID"},hashContexts:{'value': depth0,'options': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-radio", options))));
  data.buffer.push("\r\n	</div>\r\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "hasPagination", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/popup-box"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"popup-header\">\r\n	<span class=\"popup-triangle popup-triangle-center\"></span>\r\n</div>\r\n<div class=\"popup-content\">\r\n");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n<div class=\"popup-footer\">\r\n	<span class=\"popup-triangle-down popup-triangle-center\"></span>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/pricing-timepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"popup-layer\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closePricingTimepickerPopup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\r\n<div  class=\"popup datetimepicker-popup default\">\r\n	<div class=\"popup-header\">\r\n		<span class=\"popup-triangle popup-triangle-left\"></span>\r\n		<span class=\"popup-triangle popup-triangle-right\"></span>\r\n	</div>\r\n	<table class=\"datetimepicker-wrapper\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doNothing", {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n		<tr>\r\n			<td>\r\n				<div class=\"timepicker\"></div>\r\n			</td>\r\n			<td>\r\n				<div class=\"timepicker\"></div>\r\n			</td>\r\n		</tr>\r\n	</table>\r\n	<div class=\"popup-footer\">\r\n		<span class=\"popup-triangle-down popup-triangle-left\"></span>\r\n		<span class=\"popup-triangle-down popup-triangle-right\"></span>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/search-field"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<span class=\"icon-magnifier\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></span>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholderTranslation': ("placeholder.search"),
    'value': ("value")
  },hashTypes:{'type': "STRING",'placeholderTranslation': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholderTranslation': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/user-autocomplete"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<input class=\"autocomplete\" type=\"text\"/>");
  
});

this["Ember"]["TEMPLATES"]["components/user-helper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <div class=\"help-point-wrapper\" style=\"top: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "top", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("px; left: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "left", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("px; \">\r\n            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":help-text className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n            <span class=\"help-point\" style=\"margin: 0px; left: 0; top: 0;\">");
  stack1 = helpers._triageMustache.call(depth0, "number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n        </div>\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <div class=\"arrow-link-wrapper\" style=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "style", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\r\n            <div class=\"link\" style=\"width: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("px; height: ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "size", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("px;\"></div>\r\n            <img class=\"arrow\" src=\"/assets/images/link-arrow.png\"/>\r\n        </div>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"help-overlay-bg\"></div>\r\n<div class=\"help-overlay\">\r\n    <div class=\"help-title\">");
  stack1 = helpers._triageMustache.call(depth0, "pageTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n	<div class=\"help-closer icon-close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\r\n    ");
  stack1 = helpers.each.call(depth0, "points", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    ");
  stack1 = helpers.each.call(depth0, "links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["components/user-roles"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleRole", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isActive:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "display", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "loading", options) : helperMissing.call(depth0, "partial", "loading", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

  data.buffer.push("<div class=\"header no-auth\">\r\n    <a href=\"#\" class=\"logo navbar-brand\"><img src=\"./assets/images/logo.png\"/></a>\r\n	<div class=\"right-buttons\">\r\n\r\n	</div>\r\n</div>\r\n\r\n<div class=\"body\">\r\n	<div class=\"main-content\">\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['app-notification'] || (depth0 && depth0['app-notification']),options={hash:{
    'opts': ("notification")
  },hashTypes:{'opts': "ID"},hashContexts:{'opts': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "app-notification", options))));
  data.buffer.push("\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>\r\n");
  stack1 = helpers['if'].call(depth0, "App.Modules.Server.isProcessingRequest", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/accounttype"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n							<div class=\"admin-inner-button icon-user\">\r\n								<img src=\"/assets/images/glass-cover.png\" class=\"glass-cover\"/>\r\n							</div>\r\n							<div class=\"admin-label-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.one", options) : helperMissing.call(depth0, "t", "users.one", options))));
  data.buffer.push("</div>\r\n                        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n							<div class=\"admin-inner-button icon-building\">\r\n								<img src=\"/assets/images/glass-cover.png\" class=\"glass-cover\"/>\r\n							</div>\r\n							<div class=\"admin-label-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.companyButton", options) : helperMissing.call(depth0, "t", "users.register.companyButton", options))));
  data.buffer.push("</div>\r\n                        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<span class=\"small-icon icon-prev\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.back", options) : helperMissing.call(depth0, "t", "users.register.back", options))));
  return buffer;
  }

  data.buffer.push("<div class=\"accounttype\">\r\n    <div class=\"welcome\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.accountTypeTitle", options) : helperMissing.call(depth0, "t", "users.register.accountTypeTitle", options))));
  data.buffer.push("</div>\r\n    <form class=\"inputs\">\r\n		<table>\r\n			<tr>\r\n				<td>\r\n					<div class=\"admin-button-wrapper\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("admin-button")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.user", options) : helperMissing.call(depth0, "link-to", "home.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n					</div>\r\n				</td>\r\n				<td class=\"buttonRight\">\r\n					<div class=\"admin-button-wrapper\">\r\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("admin-button")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.registration", options) : helperMissing.call(depth0, "link-to", "home.registration", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n					</div>\r\n				</td>\r\n			</tr>\r\n		</table>\r\n    </form>\r\n	<div class=\"buttons-footer\">\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("slide-inner-footer-prev")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.login", options) : helperMissing.call(depth0, "link-to", "home.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>\r\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/createdemo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div id=\"registration\" class=\"registration\">\r\n	<div class=\"registration-body\">\r\n		<div class='iosslider'>\r\n			<!-- slider -->\r\n			<div class='slider'>\r\n\r\n				<div class='slide'>\r\n					<div class=\"slide-inner create-demo\">\r\n						<div class=\"slide-inner-header\">\r\n							<div class=\"slide-inner-header-title\">\r\n								Demo System\r\n							</div>\r\n						</div>\r\n						<div class=\"slide-inner-body\">\r\n							<table>\r\n								<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.propertyIsInvalid.gender:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n									<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.gender", options) : helperMissing.call(depth0, "t", "users.details.gender", options))));
  data.buffer.push("</td>\r\n									<td>\r\n										<div class=\"input-field\">\r\n                                            ");
  data.buffer.push(escapeExpression((helper = helpers['input-radio'] || (depth0 && depth0['input-radio']),options={hash:{
    'value': ("gender"),
    'options': ("App.Modules.Storage.genders")
  },hashTypes:{'value': "ID",'options': "ID"},hashContexts:{'value': depth0,'options': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-radio", options))));
  data.buffer.push("\r\n											<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.errors.gender", options) : helperMissing.call(depth0, "getTranslatedFirstError", "model.errors.gender", options))));
  data.buffer.push("</span>\r\n										</div>\r\n									</td>\r\n								</tr>\r\n								<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.propertyIsInvalid.firstname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n									<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.firstname", options) : helperMissing.call(depth0, "t", "users.register.firstname", options))));
  data.buffer.push("</span></td>\r\n									<td class=\"input-field\">\r\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("firstname"),
    'type': ("text"),
    'value': ("firstname"),
    'id': ("firstname"),
    'titleTranslation': ("titles.firstnameRegistration"),
    'placeholder': ("")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n										<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.errors.firstname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "model.errors.firstname", options))));
  data.buffer.push("</span>\r\n									</td>\r\n								</tr>\r\n								<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.propertyIsInvalid.lastname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n									<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.lastname", options) : helperMissing.call(depth0, "t", "users.register.lastname", options))));
  data.buffer.push("</span></td>\r\n									<td class=\"input-field\">\r\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("lastname"),
    'type': ("text"),
    'value': ("lastname"),
    'id': ("lastname"),
    'titleTranslation': ("titles.lastnameRegistration"),
    'placeholder': ("")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n										<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.errors.lastname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "model.errors.lastname", options))));
  data.buffer.push("</span>\r\n									</td>\r\n								</tr>\r\n								<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.propertyIsInvalid.name:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n									<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.companyname", options) : helperMissing.call(depth0, "t", "users.register.companyname", options))));
  data.buffer.push("</span></td>\r\n									<td class=\"input-field\">\r\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("company"),
    'type': ("text"),
    'value': ("name"),
    'id': ("company"),
    'titleTranslation': ("titles.companyRegistration")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n										<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.errors.name", options) : helperMissing.call(depth0, "getTranslatedFirstError", "model.errors.name", options))));
  data.buffer.push("</span>\r\n									</td>\r\n								</tr>\r\n								<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.propertyIsInvalid.email:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n									<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.email", options) : helperMissing.call(depth0, "t", "users.register.email", options))));
  data.buffer.push("</span></td>\r\n									<td class=\"input-field\">\r\n										");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("email"),
    'type': ("text"),
    'value': ("email"),
    'id': ("email"),
    'titleTranslation': ("titles.emailRegistration"),
    'placeholderTranslation': ("users.register.exampleEmail")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n										<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.errors.email", options) : helperMissing.call(depth0, "getTranslatedFirstError", "model.errors.email", options))));
  data.buffer.push("</span>\r\n									</td>\r\n								</tr>\r\n\r\n							</table>\r\n\r\n						</div>\r\n\r\n						<div class=\"slide-inner-footer\">\r\n\r\n							<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createDemo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"medium-button blue-button\">\r\n                                <span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.create", options) : helperMissing.call(depth0, "t", "users.register.create", options))));
  data.buffer.push("</span>\r\n                            </button>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n			</div>\r\n			<div class=\"registration-info\"></div>\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/forgotpassword"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("medium-button blue-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.login", options) : helperMissing.call(depth0, "link-to", "home.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "login.backToLogin", options) : helperMissing.call(depth0, "t", "login.backToLogin", options))));
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n		  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendEmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"medium-button blue-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.sendemail", options) : helperMissing.call(depth0, "t", "users.details.sendemail", options))));
  data.buffer.push("</button>\r\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<span class=\"small-icon icon-prev\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.back", options) : helperMissing.call(depth0, "t", "users.register.back", options))));
  return buffer;
  }

  data.buffer.push("<div id=\"forgotpassword\">\r\n	<div class=\"forgotpassword-form\">\r\n		<div class=\"forgotpassword-form-welcome\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login.forgot", options) : helperMissing.call(depth0, "t", "login.forgot", options))));
  data.buffer.push("</div>\r\n		<form class=\"forgotpassword-form-inputs\">\r\n			<table ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("errorMessage:error:noError")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<tr>\r\n					<td><span class=\"forgotpassword-thumbnail icon-user\"></span></td>\r\n					<td>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'type': ("email"),
    'class': ("form-control flat"),
    'value': ("email"),
    'id': ("email"),
    'placeholder': ("E-mail")
  },hashTypes:{'name': "STRING",'type': "STRING",'class': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'name': depth0,'type': depth0,'class': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\r\n				</tr>\r\n			</table>\r\n        </form>\r\n        ");
  stack1 = helpers['if'].call(depth0, "emailSent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        <div class=\"forgot-password-footer\">\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("slide-inner-footer-prev")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.login", options) : helperMissing.call(depth0, "link-to", "home.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/inviteduser-page1"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"slide-inner profile\">\r\n	<div class=\"slide-inner-header\">\r\n		<div class=\"slide-inner-header-title\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registration", options) : helperMissing.call(depth0, "t", "users.register.registration", options))));
  data.buffer.push("\r\n		</div>\r\n		<div class=\"slide-inner-header-description\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.profile", options) : helperMissing.call(depth0, "t", "users.register.profile", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"slide-inner-body\">\r\n		<table>\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.propertyIsInvalid.gender:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.gender", options) : helperMissing.call(depth0, "t", "users.details.gender", options))));
  data.buffer.push("</span></td>\r\n                <td>\r\n                    <div class=\"input-field\">\r\n						");
  data.buffer.push(escapeExpression((helper = helpers['input-radio'] || (depth0 && depth0['input-radio']),options={hash:{
    'value': ("gender"),
    'options': ("App.Modules.Storage.genders")
  },hashTypes:{'value': "ID",'options': "ID"},hashContexts:{'value': depth0,'options': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-radio", options))));
  data.buffer.push("\r\n                        <span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.errors.gender", options) : helperMissing.call(depth0, "getTranslatedFirstError", "model.errors.gender", options))));
  data.buffer.push("</span>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.firstname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.firstname", options) : helperMissing.call(depth0, "t", "users.register.firstname", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("firstname"),
    'type': ("text"),
    'value': ("firstname"),
    'id': ("firstname"),
    'titleTranslation': ("titles.firstnameRegistration"),
    'placeholder': ("")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.firstname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.firstname", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.lastname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.lastname", options) : helperMissing.call(depth0, "t", "users.register.lastname", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("lastname"),
    'type': ("text"),
    'value': ("lastname"),
    'id': ("lastname"),
    'titleTranslation': ("titles.lastnameRegistration"),
    'placeholder': ("")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.lastname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.lastname", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.email:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.email", options) : helperMissing.call(depth0, "t", "users.register.email", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'disabled': ("disabled"),
    'class': ("iosslider-unselectable"),
    'name': ("email"),
    'type': ("text"),
    'value': ("email"),
    'id': ("email"),
    'titleTranslation': ("titles.emailRegistration"),
    'placeholderTranslation': ("users.register.exampleEmail")
  },hashTypes:{'disabled': "STRING",'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'disabled': depth0,'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.email", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.email", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.password:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.password", options) : helperMissing.call(depth0, "t", "users.details.password", options))));
  data.buffer.push("</td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("password"),
    'type': ("password"),
    'value': ("password"),
    'id': ("password"),
    'titleTranslation': ("titles.passwordRegistration"),
    'placeholderTranslation': ("users.register.passwordRule")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.password", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.password", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.language:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.language", options) : helperMissing.call(depth0, "t", "users.details.language", options))));
  data.buffer.push("</td>\r\n                <td>\r\n                    <div class=\"input-field\">\r\n						");
  data.buffer.push(escapeExpression((helper = helpers['input-radio'] || (depth0 && depth0['input-radio']),options={hash:{
    'value': ("language"),
    'name': ("language"),
    'options': ("App.Modules.Storage.languages")
  },hashTypes:{'value': "ID",'name': "STRING",'options': "ID"},hashContexts:{'value': depth0,'name': depth0,'options': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-radio", options))));
  data.buffer.push("\r\n                        <span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.language", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.language", options))));
  data.buffer.push("</span>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n		</table>\r\n	</div>\r\n	<div class=\"slide-inner-footer\">\r\n\r\n        <a class=\"slide-inner-footer-next\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateFirstPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.next", options) : helperMissing.call(depth0, "t", "users.register.next", options))));
  data.buffer.push("\r\n            <span class=\"small-icon icon-next\"></span></a>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/inviteduser-page2"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"slide-inner profile\">\r\n	<div class=\"slide-inner-header\">\r\n		<div class=\"slide-inner-header-title\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registration", options) : helperMissing.call(depth0, "t", "users.register.registration", options))));
  data.buffer.push("\r\n		</div>\r\n		<div class=\"slide-inner-header-description\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.profile", options) : helperMissing.call(depth0, "t", "users.register.profile", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"slide-inner-body\">\r\n		<table>\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.phone:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.phone", options) : helperMissing.call(depth0, "t", "users.details.phone", options))));
  data.buffer.push("</td>\r\n                <td>\r\n                    <div class=\"input-field\">\r\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("phone"),
    'name': ("phone"),
    'placeholderTranslation': ("placeholder.phone")
  },hashTypes:{'type': "STRING",'value': "ID",'name': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'type': depth0,'value': depth0,'name': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        <span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.phone", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.phone", options))));
  data.buffer.push("</span>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.cellphone:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.cellphone", options) : helperMissing.call(depth0, "t", "users.details.cellphone", options))));
  data.buffer.push("</td>\r\n                <td>\r\n                    <div class=\"input-field\">\r\n						");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cellphone"),
    'name': ("cellphone"),
    'placeholderTranslation': ("placeholder.cellphone")
  },hashTypes:{'type': "STRING",'value': "ID",'name': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'type': depth0,'value': depth0,'name': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                        <span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.cellphone", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.cellphone", options))));
  data.buffer.push("</span>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.agb:validation-error :terms")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td colspan=\"2\" class=\"agb-wrapper\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['input-checkbox'] || (depth0 && depth0['input-checkbox']),options={hash:{
    'checkedValue': ("agb")
  },hashTypes:{'checkedValue': "ID"},hashContexts:{'checkedValue': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-checkbox", options))));
  data.buffer.push("\r\n					<div class=\"input-field\">\r\n						<label>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.agree_tac_privacy", options) : helperMissing.call(depth0, "t", "users.register.agree_tac_privacy", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.agb", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.agb", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n		</table>\r\n	</div>\r\n	<div class=\"slide-inner-footer\">\r\n		<a class=\"slide-inner-footer-prev\"><span class=\"small-icon icon-prev\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.back", options) : helperMissing.call(depth0, "t", "users.register.back", options))));
  data.buffer.push("\r\n		</a>\r\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "register", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"medium-button blue-button\">\r\n			<span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.create", options) : helperMissing.call(depth0, "t", "users.register.create", options))));
  data.buffer.push("</span>\r\n		</button>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/inviteduser"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"registration\" class=\"registration\">\r\n    <div class=\"registration-body\">\r\n        <div class='iosslider'>\r\n            <div class='slider'>\r\n                <div class='slide'>\r\n					");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home/inviteduser-page1", options) : helperMissing.call(depth0, "partial", "home/inviteduser-page1", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class='slide'>\r\n					");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home/inviteduser-page2", options) : helperMissing.call(depth0, "partial", "home/inviteduser-page2", options))));
  data.buffer.push("\r\n                </div>\r\n            </div>\r\n            <div class=\"registration-info\"></div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"loginbox\">\r\n	<div class=\"inpt_container\">\r\n		<form method=\"post\" accept-charset=\"utf-8\">\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("identity"),
    'value': ("controller.usermail"),
    'id': ("identity"),
    'class': ("inpt")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n			<br>\r\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'name': ("identity"),
    'value': ("controller.userpassword"),
    'id': ("password"),
    'class': ("inpt")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n			<input type=\"checkbox\" name=\"remember\" value=\"1\" id=\"remember\" class=\"bau\" />\r\n			<div style=\"margin-top:9px;float:right;margin-right:35px;\">\r\n				<input type=\"submit\" name=\"submit\" value=\"Login\" class=\"stitched stitched_submit\" />\r\n			</div>\r\n		</form>\r\n	</div>\r\n	<div id=\"infoMessage\" style=\"font-weight:bold;color:red;\">\r\n		");
  stack1 = helpers._triageMustache.call(depth0, "infoMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/registration-company"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n			<span class=\"small-icon icon-prev\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.back", options) : helperMissing.call(depth0, "t", "users.register.back", options))));
  return buffer;
  }

  data.buffer.push("<div class=\"slide-inner company\">\r\n	<div class=\"slide-inner-header\">\r\n		<div class=\"slide-inner-header-title\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registration", options) : helperMissing.call(depth0, "t", "users.register.registration", options))));
  data.buffer.push("\r\n		</div>\r\n		<div class=\"slide-inner-header-description\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.company", options) : helperMissing.call(depth0, "t", "users.register.company", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"slide-inner-body\">\r\n\r\n		<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":registration-form-inputs isDirty:dirty:clean")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\r\n			<table>\r\n				<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.name:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n					<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.companyname", options) : helperMissing.call(depth0, "t", "users.register.companyname", options))));
  data.buffer.push("</span></td>\r\n					<td>\r\n						<div class=\"input-field\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable fp-validate"),
    'name': ("company"),
    'type': ("text"),
    'value': ("name"),
    'id': ("company"),
    'titleTranslation': ("titles.companyRegistration")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n							<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.name", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.name", options))));
  data.buffer.push("</span>\r\n						</div>\r\n					</td>\r\n				</tr>\r\n				<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.street:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n					<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.address", options) : helperMissing.call(depth0, "t", "users.register.address", options))));
  data.buffer.push("</span></td>\r\n					<td>\r\n						<div class=\"input-field\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable fp-validate"),
    'name': ("street"),
    'type': ("text"),
    'value': ("street"),
    'id': ("street"),
    'titleTranslation': ("titles.streetRegistration"),
    'placeholderTranslation': ("users.register.street")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n							<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.street", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.street", options))));
  data.buffer.push("</span>\r\n						</div>\r\n					</td>\r\n				</tr>\r\n				<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.zip:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n					<td></td>\r\n					<td>\r\n						<div class=\"input-field\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable fp-validate"),
    'name': ("zip"),
    'type': ("text"),
    'value': ("zip"),
    'id': ("zip"),
    'titleTranslation': ("titles.postalCodeRegistration"),
    'placeholderTranslation': ("users.register.postalCode")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n							<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.zip", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.zip", options))));
  data.buffer.push("</span>\r\n						</div>\r\n					</td>\r\n				</tr>\r\n\r\n				<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.city:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n					<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.city", options) : helperMissing.call(depth0, "t", "general.city", options))));
  data.buffer.push("</td>\r\n					<td>\r\n						<div class=\"input-field\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable fp-validate"),
    'name': ("city"),
    'type': ("text"),
    'value': ("city"),
    'id': ("city"),
    'titleTranslation': ("titles.cityRegistration"),
    'placeholderTranslation': ("users.register.city")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n							<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.city", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.city", options))));
  data.buffer.push("</span>\r\n						</div>\r\n					</td>\r\n				</tr>\r\n				<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.country:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n					<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.country", options) : helperMissing.call(depth0, "t", "general.country", options))));
  data.buffer.push("</td>\r\n					<td>\r\n						<div class=\"input-field\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['auto-complete'] || (depth0 && depth0['auto-complete']),options={hash:{
    'list': ("countryList"),
    'property': ("country"),
    'placeholderTranslation': ("general.country"),
    'classNames': ("iosslider-unselectable inputCountry")
  },hashTypes:{'list': "ID",'property': "ID",'placeholderTranslation': "STRING",'classNames': "STRING"},hashContexts:{'list': depth0,'property': depth0,'placeholderTranslation': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-complete", options))));
  data.buffer.push("\r\n							<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.country", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.country", options))));
  data.buffer.push("</span>\r\n						</div>\r\n					</td>\r\n				</tr>\r\n			</table>\r\n		</div>\r\n\r\n	</div>\r\n	<div class=\"slide-inner-footer\">\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("slide-inner-footer-prev")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.accounttype", options) : helperMissing.call(depth0, "link-to", "home.accounttype", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		<a class=\"slide-inner-footer-next\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validateFirstPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.next", options) : helperMissing.call(depth0, "t", "users.register.next", options))));
  data.buffer.push("\r\n			<span class=\"small-icon icon-next\"></span></a>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/registration-thankyou"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<button class=\"medium-button blue-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.done", options) : helperMissing.call(depth0, "t", "users.register.done", options))));
  data.buffer.push("</button>");
  return buffer;
  }

  data.buffer.push("<div class=\"slide-inner thank-you\">\r\n	<div class=\"slide-inner-header\">\r\n		<div class=\"slide-inner-header-title\">\r\n			<div class=\"title-background\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registrationComplete", options) : helperMissing.call(depth0, "t", "users.register.registrationComplete", options))));
  data.buffer.push("\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class=\"slide-inner-body\">\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registrationCompleteDescription", options) : helperMissing.call(depth0, "t", "users.register.registrationCompleteDescription", options))));
  data.buffer.push("\r\n	</div>\r\n	<div class=\"slide-inner-footer\">\r\n        <a class=\"go-to-website icon-arrow_up\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("view.parentView.controller.fleetsterWebsite")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">&nbsp;&nbsp;");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.goToWebsite", options) : helperMissing.call(depth0, "t", "users.register.goToWebsite", options))));
  data.buffer.push("</a>\r\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.login", options) : helperMissing.call(depth0, "link-to", "home.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/registration-user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"slide-inner profile\">\r\n	<div class=\"slide-inner-header\">\r\n		<div class=\"slide-inner-header-title\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registration", options) : helperMissing.call(depth0, "t", "users.register.registration", options))));
  data.buffer.push("\r\n		</div>\r\n		<div class=\"slide-inner-header-description\">\r\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.profile", options) : helperMissing.call(depth0, "t", "users.register.profile", options))));
  data.buffer.push("\r\n		</div>\r\n	</div>\r\n	<div class=\"slide-inner-body\">\r\n		<table>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.firstname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.firstname", options) : helperMissing.call(depth0, "t", "users.register.firstname", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("firstname"),
    'type': ("text"),
    'value': ("firstname"),
    'id': ("firstname"),
    'titleTranslation': ("titles.firstnameRegistration"),
    'placeholder': ("")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.firstname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.firstname", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.lastname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.lastname", options) : helperMissing.call(depth0, "t", "users.register.lastname", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("lastname"),
    'type': ("text"),
    'value': ("lastname"),
    'id': ("lastname"),
    'titleTranslation': ("titles.lastnameRegistration"),
    'placeholder': ("")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.lastname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.lastname", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.phone:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.phone", options) : helperMissing.call(depth0, "t", "users.register.phone", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("phone"),
    'type': ("text"),
    'value': ("phone"),
    'id': ("phone"),
    'placeholder': (""),
    'titleTranslation': ("titles.phoneRegistration")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING",'titleTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0,'titleTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.phone", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.phone", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.email:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td><span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.email", options) : helperMissing.call(depth0, "t", "users.register.email", options))));
  data.buffer.push("</span></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("email"),
    'type': ("text"),
    'value': ("email"),
    'id': ("email"),
    'titleTranslation': ("titles.emailRegistration"),
    'placeholderTranslation': ("users.register.exampleEmail")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.email", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.email", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.password:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.password", options) : helperMissing.call(depth0, "t", "users.details.password", options))));
  data.buffer.push("</td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("iosslider-unselectable"),
    'name': ("password"),
    'type': ("password"),
    'value': ("password"),
    'id': ("password"),
    'titleTranslation': ("titles.passwordRegistration"),
    'placeholderTranslation': ("users.register.passwordRule")
  },hashTypes:{'class': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'id': "STRING",'titleTranslation': "STRING",'placeholderTranslation': "STRING"},hashContexts:{'class': depth0,'name': depth0,'type': depth0,'value': depth0,'id': depth0,'titleTranslation': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.password", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.password", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("propertyIsInvalid.agb:validation-error :terms")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td colspan=\"2\" class=\"agb-wrapper\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['input-checkbox'] || (depth0 && depth0['input-checkbox']),options={hash:{
    'checkedValue': ("agb")
  },hashTypes:{'checkedValue': "ID"},hashContexts:{'checkedValue': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input-checkbox", options))));
  data.buffer.push("\r\n					<div class=\"input-field\">\r\n						<label>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.agree_tac_privacy", options) : helperMissing.call(depth0, "t", "users.register.agree_tac_privacy", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "errors.agb", options) : helperMissing.call(depth0, "getTranslatedFirstError", "errors.agb", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n		</table>\r\n	</div>\r\n	<div class=\"slide-inner-footer\">\r\n		<a class=\"slide-inner-footer-prev\"><span class=\"small-icon icon-prev\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.back", options) : helperMissing.call(depth0, "t", "users.register.back", options))));
  data.buffer.push("\r\n		</a>\r\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "register", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"medium-button blue-button\">\r\n			<span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.create", options) : helperMissing.call(depth0, "t", "users.register.create", options))));
  data.buffer.push("</span>\r\n		</button>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/registration"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"registration\" class=\"registration\">\r\n	<div class=\"registration-body\">\r\n		<div class='iosslider'>\r\n			<div class='slider'>\r\n				<div class='slide'>\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home/registration-company", options) : helperMissing.call(depth0, "partial", "home/registration-company", options))));
  data.buffer.push("\r\n				</div>\r\n				<div class='slide'>\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home/registration-user", options) : helperMissing.call(depth0, "partial", "home/registration-user", options))));
  data.buffer.push("\r\n				</div>\r\n			</div>\r\n			<div class=\"thankyou-slide\" style=\"display: none\">\r\n				<div class='slide'>\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home/registration-thankyou", options) : helperMissing.call(depth0, "partial", "home/registration-thankyou", options))));
  data.buffer.push("\r\n				</div>\r\n			</div>\r\n			<div class=\"registration-info\"></div>\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["home/user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n								<span class=\"small-icon icon-prev\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.back", options) : helperMissing.call(depth0, "t", "users.register.back", options))));
  return buffer;
  }

  data.buffer.push("<div id=\"registration\" class=\"registration\">\r\n	<div class=\"registration-body\">\r\n		<div class='iosslider'>\r\n			<!-- slider -->\r\n			<div class='slider'>\r\n				<!-- slides -->\r\n				<div class='slide'>\r\n					<div class=\"slide-inner company\">\r\n						<div class=\"slide-inner-header create-user-bg\">\r\n							<div class=\"slide-inner-header-title\">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.registration", options) : helperMissing.call(depth0, "t", "users.register.registration", options))));
  data.buffer.push("\r\n							</div>\r\n							<div class=\"slide-inner-header-description\">\r\n\r\n							</div>\r\n						</div>\r\n						<div class=\"slide-inner-body\">\r\n\r\n							<div class=\"create-user-body\">\r\n								<div>\r\n                                    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.newUserIntroduction", options) : helperMissing.call(depth0, "t", "users.register.newUserIntroduction", options))));
  data.buffer.push("\r\n								</div>\r\n                                <div>\r\n                                    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.newUserDescription", options) : helperMissing.call(depth0, "t", "users.register.newUserDescription", options))));
  data.buffer.push("\r\n								</div>\r\n\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.newUserBestWishes", options) : helperMissing.call(depth0, "t", "users.register.newUserBestWishes", options))));
  data.buffer.push("\r\n								<br/>\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.register.newUserYourFleetsterTeam", options) : helperMissing.call(depth0, "t", "users.register.newUserYourFleetsterTeam", options))));
  data.buffer.push("\r\n\r\n							</div>\r\n\r\n						</div>\r\n						<div class=\"slide-inner-footer\">\r\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("slide-inner-footer-prev")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home.login", options) : helperMissing.call(depth0, "link-to", "home.login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n						</div>\r\n					</div>\r\n\r\n				</div>\r\n\r\n			</div>\r\n			<div class=\"registration-info\"></div>\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"spinner\">\r\n	<div class=\"spinner-bg\"></div>\r\n	<div class=\"spinner-image\">\r\n		<img class=\"spinner-logo\" src=\"/assets/images/spinner-logo.png\"/>\r\n		<img class=\"spinner-text\" src=\"/assets/images/spinner-text.png\"/>\r\n	</div>\r\n</div>");
  
});

this["Ember"]["TEMPLATES"]["menu/actions_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	<div class=\"option\"><span class=\"mid-icon icon-settings icon-print\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.printlist", options) : helperMissing.call(depth0, "t", "actions.printlist", options))));
  data.buffer.push("</div>\r\n	<div class=\"option\"><span class=\"mid-icon icon-settings icon-excel\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.export", options) : helperMissing.call(depth0, "t", "actions.export", options))));
  data.buffer.push("</div>\r\n\r\n	<div class=\"list-separator\">\r\n        <span class=\"line\"></span>\r\n        <span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.printlist", options) : helperMissing.call(depth0, "t", "actions.printlist", options))));
  data.buffer.push("</span>\r\n    </div>\r\n\r\n	<div class=\"option\"><span class=\"mid-icon icon-settings icon-mail\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.sendascalender", options) : helperMissing.call(depth0, "t", "actions.sendascalender", options))));
  data.buffer.push("</div>\r\n	<div class=\"option\"><span class=\"mid-icon icon-settings icon-link\"></span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.sendaslink", options) : helperMissing.call(depth0, "t", "actions.sendaslink", options))));
  data.buffer.push("</div>\r\n");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("actions-popup popup")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/company_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n	<ul>\r\n        ");
  stack1 = helpers.each.call(depth0, "option", "in", "App.Modules.Storage.companies", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</ul>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n			<li>\r\n				<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeCompany", "option._id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n					<span class=\"text\">");
  stack1 = helpers._triageMustache.call(depth0, "option.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n				</a>\r\n			</li>\r\n        ");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("companies-popup popup")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/language_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n	<ul>\r\n        ");
  stack1 = helpers.each.call(depth0, "option", "in", "App.Modules.Storage.languages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</ul>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n			<li>\r\n				<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeLanguage", "option.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\r\n					<span class=\"text\">");
  stack1 = helpers._triageMustache.call(depth0, "option.display", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n				</a>\r\n			</li>\r\n        ");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("languages-popup popup")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/notifications_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	<div class=\"filter\">\r\n        <span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.open", options) : helperMissing.call(depth0, "t", "notifications.open", options))));
  data.buffer.push("</span>\r\n		<span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.cancel", options) : helperMissing.call(depth0, "t", "notifications.cancel", options))));
  data.buffer.push("</span>\r\n		<span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.approved", options) : helperMissing.call(depth0, "t", "notifications.approved", options))));
  data.buffer.push("</span>\r\n		<span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.request", options) : helperMissing.call(depth0, "t", "notifications.request", options))));
  data.buffer.push("</span>\r\n	</div>\r\n    <div class=\"list\">\r\n		<div class=\"list-separator\">\r\n			<span class=\"line\"></span>\r\n			<span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.today", options) : helperMissing.call(depth0, "t", "notifications.today", options))));
  data.buffer.push("</span>\r\n		</div>\r\n        <ul>\r\n			<li>\r\n                <span class=\"mid-icon icon-vehicle-status\">\r\n                    <span class=\"icon-question-status\">\r\n                    </span>\r\n                </span>\r\n                <span class=\"info\">\r\n                    <div class=\"car-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.tesla", options) : helperMissing.call(depth0, "t", "notifications.tesla", options))));
  data.buffer.push("</div>\r\n                    <div class=\"booking-info\">\r\n						<span class=\"date-start\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time1", options) : helperMissing.call(depth0, "t", "notifications.time1", options))));
  data.buffer.push("</span>\r\n						");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.bis", options) : helperMissing.call(depth0, "t", "notifications.bis", options))));
  data.buffer.push("\r\n						<span class=\"date-end\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time2", options) : helperMissing.call(depth0, "t", "notifications.time2", options))));
  data.buffer.push("</span><br>\r\n						<span class=\"what\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.trip", options) : helperMissing.call(depth0, "t", "notifications.trip", options))));
  data.buffer.push(" </span>\r\n						");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.from", options) : helperMissing.call(depth0, "t", "notifications.from", options))));
  data.buffer.push("\r\n						<span class=\"who\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.name", options) : helperMissing.call(depth0, "t", "notifications.name", options))));
  data.buffer.push(" </span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.to", options) : helperMissing.call(depth0, "t", "notifications.to", options))));
  data.buffer.push("\r\n						<span class=\"where\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.ag", options) : helperMissing.call(depth0, "t", "notifications.ag", options))));
  data.buffer.push("</span>\r\n						<div class=\"notification-date\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.today", options) : helperMissing.call(depth0, "t", "notifications.today", options))));
  data.buffer.push("\r\n						</div>\r\n					</div>\r\n                </span>\r\n			</li>\r\n			<li>\r\n                <span class=\"mid-icon icon-vehicle-status\">\r\n                    <span class=\"icon-question-status\">\r\n                    </span>\r\n                </span>\r\n                <span class=\"info\">\r\n                    <div class=\"car-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.tesla", options) : helperMissing.call(depth0, "t", "notifications.tesla", options))));
  data.buffer.push("</div>\r\n                    <div class=\"booking-info\">\r\n                        <span class=\"date-start\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time1", options) : helperMissing.call(depth0, "t", "notifications.time1", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.bis", options) : helperMissing.call(depth0, "t", "notifications.bis", options))));
  data.buffer.push("\r\n                        <span class=\"date-end\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time2", options) : helperMissing.call(depth0, "t", "notifications.time2", options))));
  data.buffer.push("</span><br>\r\n                        <span class=\"what\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.trip", options) : helperMissing.call(depth0, "t", "notifications.trip", options))));
  data.buffer.push("  </span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.from", options) : helperMissing.call(depth0, "t", "notifications.from", options))));
  data.buffer.push("\r\n                        <span class=\"who\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.name", options) : helperMissing.call(depth0, "t", "notifications.name", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.to", options) : helperMissing.call(depth0, "t", "notifications.to", options))));
  data.buffer.push("\r\n                        <span class=\"where\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.ag", options) : helperMissing.call(depth0, "t", "notifications.ag", options))));
  data.buffer.push("</span>\r\n						<div class=\"notification-date\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.today", options) : helperMissing.call(depth0, "t", "notifications.today", options))));
  data.buffer.push("\r\n						</div>\r\n                    </div>\r\n                </span>\r\n			</li>\r\n			<li>\r\n                <span class=\"mid-icon icon-vehicle-status\">\r\n                    <span class=\"icon-question-status\">\r\n                    </span>\r\n                </span>\r\n                <div class=\"info\">\r\n                    <div class=\"car-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.tesla", options) : helperMissing.call(depth0, "t", "notifications.tesla", options))));
  data.buffer.push("</div>\r\n                    <div class=\"booking-info\">\r\n						<span class=\"date-start\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time1", options) : helperMissing.call(depth0, "t", "notifications.time1", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.bis", options) : helperMissing.call(depth0, "t", "notifications.bis", options))));
  data.buffer.push("\r\n						<span class=\"date-end\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time2", options) : helperMissing.call(depth0, "t", "notifications.time2", options))));
  data.buffer.push("</span><br>\r\n						<span class=\"what\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.trip", options) : helperMissing.call(depth0, "t", "notifications.trip", options))));
  data.buffer.push(" </span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.from", options) : helperMissing.call(depth0, "t", "notifications.from", options))));
  data.buffer.push("\r\n						<span class=\"who\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.name", options) : helperMissing.call(depth0, "t", "notifications.name", options))));
  data.buffer.push(" </span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.to", options) : helperMissing.call(depth0, "t", "notifications.to", options))));
  data.buffer.push("\r\n						<span class=\"where\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.ag", options) : helperMissing.call(depth0, "t", "notifications.ag", options))));
  data.buffer.push("</span>\r\n                        <div class=\"notification-date\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.today", options) : helperMissing.call(depth0, "t", "notifications.today", options))));
  data.buffer.push("\r\n                        </div>\r\n					</div>\r\n                </div>\r\n			</li>\r\n        </ul>\r\n\r\n    </div>\r\n	<div class=\"list\">\r\n		<div class=\"list-separator\">\r\n			<span class=\"line\"></span>\r\n			<span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.yesterday", options) : helperMissing.call(depth0, "t", "notifications.yesterday", options))));
  data.buffer.push("</span>\r\n		</div>\r\n		<ul>\r\n			<li>\r\n                <span class=\"mid-icon icon-vehicle-status\">\r\n                    <span class=\"icon-question-status\">\r\n                    </span>\r\n                </span>\r\n                <span class=\"info\">\r\n                    <div class=\"user-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.newmarkus", options) : helperMissing.call(depth0, "t", "notifications.newmarkus", options))));
  data.buffer.push("</div>\r\n                    <div class=\"booking-info\">\r\n						<span class=\"user\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.name", options) : helperMissing.call(depth0, "t", "notifications.name", options))));
  data.buffer.push("</span>\r\n						");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.has", options) : helperMissing.call(depth0, "t", "notifications.has", options))));
  data.buffer.push("\r\n						<span class=\"user-action\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.access", options) : helperMissing.call(depth0, "t", "notifications.access", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.new", options) : helperMissing.call(depth0, "t", "notifications.new", options))));
  data.buffer.push("\r\n						<div class=\"notification-date\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.yesterday", options) : helperMissing.call(depth0, "t", "notifications.yesterday", options))));
  data.buffer.push("\r\n						</div>\r\n					</div>\r\n                </span>\r\n			</li>\r\n			<li>\r\n                <span class=\"mid-icon icon-vehicle-status\">\r\n                    <span class=\"icon-question-status\">\r\n                    </span>\r\n                </span>\r\n                <span class=\"info\">\r\n                    <div class=\"car-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.tesla", options) : helperMissing.call(depth0, "t", "notifications.tesla", options))));
  data.buffer.push("</div>\r\n                    <div class=\"booking-info\">\r\n						<span class=\"date-start\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time1", options) : helperMissing.call(depth0, "t", "notifications.time1", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.bis", options) : helperMissing.call(depth0, "t", "notifications.bis", options))));
  data.buffer.push("\r\n						<span class=\"date-end\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time2", options) : helperMissing.call(depth0, "t", "notifications.time2", options))));
  data.buffer.push("</span><br>\r\n						<span class=\"what\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.trip", options) : helperMissing.call(depth0, "t", "notifications.trip", options))));
  data.buffer.push(" </span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.from", options) : helperMissing.call(depth0, "t", "notifications.from", options))));
  data.buffer.push("\r\n						<span class=\"who\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.name", options) : helperMissing.call(depth0, "t", "notifications.name", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.to", options) : helperMissing.call(depth0, "t", "notifications.to", options))));
  data.buffer.push("\r\n						<span class=\"where\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.ag", options) : helperMissing.call(depth0, "t", "notifications.ag", options))));
  data.buffer.push("</span>\r\n						<div class=\"notification-date\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time3", options) : helperMissing.call(depth0, "t", "notifications.time3", options))));
  data.buffer.push("\r\n						</div>\r\n					</div>\r\n                </span>\r\n			</li>\r\n			<li>\r\n                <span class=\"mid-icon icon-vehicle-status\">\r\n                    <span class=\"icon-question-status\">\r\n                    </span>\r\n                </span>\r\n				<div class=\"info\">\r\n					<div class=\"car-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.tesla", options) : helperMissing.call(depth0, "t", "notifications.tesla", options))));
  data.buffer.push("</div>\r\n					<div class=\"booking-info\">\r\n						<span class=\"date-start\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time1", options) : helperMissing.call(depth0, "t", "notifications.time1", options))));
  data.buffer.push("</span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.bis", options) : helperMissing.call(depth0, "t", "notifications.bis", options))));
  data.buffer.push("\r\n						<span class=\"date-end\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time2", options) : helperMissing.call(depth0, "t", "notifications.time2", options))));
  data.buffer.push("</span><br>\r\n						<span class=\"what\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.trip", options) : helperMissing.call(depth0, "t", "notifications.trip", options))));
  data.buffer.push(" </span>\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.from", options) : helperMissing.call(depth0, "t", "notifications.from", options))));
  data.buffer.push("\r\n						<span class=\"who\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.name", options) : helperMissing.call(depth0, "t", "notifications.name", options))));
  data.buffer.push("</span>\r\n						");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.to", options) : helperMissing.call(depth0, "t", "notifications.to", options))));
  data.buffer.push("\r\n						<span class=\"where\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.ag", options) : helperMissing.call(depth0, "t", "notifications.ag", options))));
  data.buffer.push("</span>\r\n						<div class=\"notification-date\">\r\n							");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notifications.time3", options) : helperMissing.call(depth0, "t", "notifications.time3", options))));
  data.buffer.push("\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n		</ul>\r\n\r\n	</div>\r\n");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("notifications-popup popup")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/profile_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n	<div class=\"user-avatar\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "user.picture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		<!-- <div class=\"button-change-picture\">Change Picture</div> -->\r\n	</div>\r\n	<table ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":my-profile isDirty:dirty:clean")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n		<thead>\r\n		<tr>\r\n			<td colspan=\"2\">\r\n				<div class=\"list-separator\">\r\n					<span class=\"line\"></span>\r\n					<span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.myprofile", options) : helperMissing.call(depth0, "t", "profile.myprofile", options))));
  data.buffer.push("</span>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n		</thead>\r\n		<tbody>\r\n		<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.firstname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.firstname", options) : helperMissing.call(depth0, "t", "profile.firstname", options))));
  data.buffer.push("</td>\r\n			<td>\r\n                ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</td>\r\n		</tr>\r\n		<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.lastname:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.lastname", options) : helperMissing.call(depth0, "t", "profile.lastname", options))));
  data.buffer.push("</td>\r\n			<td>\r\n                ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</td>\r\n		</tr>\r\n		<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.email:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.email", options) : helperMissing.call(depth0, "t", "profile.email", options))));
  data.buffer.push("</td>\r\n			<td>\r\n                ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</td>\r\n		</tr>\r\n		</tbody>\r\n	</table>\r\n\r\n    ");
  stack1 = helpers['if'].call(depth0, "hasFeature.Europcar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    ");
  stack1 = helpers['if'].call(depth0, "hasFeature.Traka", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    ");
  stack1 = helpers['if'].call(depth0, "hasFeature.CostCenter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	<table class=\"buttons\">\r\n		<tbody>\r\n		<tr>\r\n			<td>\r\n			</td>\r\n			<td>\r\n                ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(37, program37, data),fn:self.program(35, program35, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n			</td>\r\n		</tr>\r\n		</tbody>\r\n	</table>\r\n\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n			<img class=\"user-picture-big\" src=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "user.picture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\r\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n			<div class=\"user-picture-big-text\">");
  data.buffer.push(escapeExpression((helper = helpers.initials || (depth0 && depth0.initials),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "user.firstname", "user.lastname", options) : helperMissing.call(depth0, "initials", "user.firstname", "user.lastname", options))));
  data.buffer.push("</div>\r\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.firstname")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.errors.firstname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "user.errors.firstname", options))));
  data.buffer.push("</span>\r\n					</div>\r\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "user.firstname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.lastname")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.errors.lastname", options) : helperMissing.call(depth0, "getTranslatedFirstError", "user.errors.lastname", options))));
  data.buffer.push("</span>\r\n					</div>\r\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "user.lastname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.email")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.errors.email", options) : helperMissing.call(depth0, "getTranslatedFirstError", "user.errors.email", options))));
  data.buffer.push("</span>\r\n					</div>\r\n                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		<table class=\"authentication\">\r\n			<thead>\r\n			<tr>\r\n				<td colspan=\"2\">\r\n					<div class=\"list-separator\">\r\n						<span class=\"line\"></span>\r\n						<span class=\"text\">Europcar</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			</thead>\r\n			<tbody>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.extended.Europcar.driverId:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.driverId", options) : helperMissing.call(depth0, "t", "profile.driverId", options))));
  data.buffer.push("</td>\r\n				<td>\r\n                    ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				</td>\r\n			</tr>\r\n\r\n			</tbody>\r\n		</table>\r\n    ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.extended.Europcar.driverId")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "user.extended.Europcar.driverId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		<table class=\"authentication\">\r\n			<thead>\r\n			<tr>\r\n				<td colspan=\"2\">\r\n					<div class=\"list-separator\">\r\n						<span class=\"line\"></span>\r\n						<span class=\"text\">Traka</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			</thead>\r\n			<tbody>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.extended.Traka.pin:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.keyboxpin", options) : helperMissing.call(depth0, "t", "profile.keyboxpin", options))));
  data.buffer.push("</td>\r\n				<td>\r\n                    ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				</td>\r\n			</tr>\r\n\r\n			</tbody>\r\n		</table>\r\n    ");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.extended.Traka.pin")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "user.extended.Traka.pin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		<table class=\"authentication\">\r\n			<thead>\r\n			<tr>\r\n				<td colspan=\"2\">\r\n					<div class=\"list-separator\">\r\n						<span class=\"line\"></span>\r\n						<span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.costcenter", options) : helperMissing.call(depth0, "t", "users.details.costcenter", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			</thead>\r\n			<tbody>\r\n			<tr>\r\n				<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.details.costcenter", options) : helperMissing.call(depth0, "t", "users.details.costcenter", options))));
  data.buffer.push("</td>\r\n				<td>\r\n                    ");
  stack1 = helpers['if'].call(depth0, "userEditMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				</td>\r\n			</tr>\r\n			</tbody>\r\n		</table>\r\n    ");
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.extended.CostCenter.value"),
    'placeholderTranslation': ("placeholder.costcenter")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholderTranslation': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "user.extended.CostCenter.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n		<table class=\"authentication\">\r\n			<thead>\r\n			<tr>\r\n				<td colspan=\"2\">\r\n					<div class=\"list-separator\">\r\n						<span class=\"line\"></span>\r\n						<span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.authentication", options) : helperMissing.call(depth0, "t", "profile.authentication", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			</thead>\r\n			<tbody>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.passwordNew:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.password", options) : helperMissing.call(depth0, "t", "profile.password", options))));
  data.buffer.push("</td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("user.passwordNew"),
    'placeholderTranslation': ("profile.newPassword")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholderTranslation': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.errors.passwordNew", options) : helperMissing.call(depth0, "getTranslatedFirstError", "user.errors.passwordNew", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			<tr ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("user.propertyIsInvalid.passwordNewConfirmation:validation-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n				<td></td>\r\n				<td>\r\n					<div class=\"input-field\">\r\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("user.passwordNewConfirmation"),
    'placeholderTranslation': ("profile.newPasswordRepeat")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholderTranslation': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholderTranslation': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n						<span class=\"validation-hint\">");
  data.buffer.push(escapeExpression((helper = helpers.getTranslatedFirstError || (depth0 && depth0.getTranslatedFirstError),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.errors.passwordNewConfirmation", options) : helperMissing.call(depth0, "getTranslatedFirstError", "user.errors.passwordNewConfirmation", options))));
  data.buffer.push("</span>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n\r\n			</tbody>\r\n		</table>\r\n    ");
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n					<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"medium-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.cancel", options) : helperMissing.call(depth0, "t", "actions.cancel", options))));
  data.buffer.push("</button>\r\n					<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveUser", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"medium-button blue-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.save", options) : helperMissing.call(depth0, "t", "actions.save", options))));
  data.buffer.push("</button>\r\n                ");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n					<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editUser", "user", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"medium-button blue-button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "actions.edit", options) : helperMissing.call(depth0, "t", "actions.edit", options))));
  data.buffer.push("</button>\r\n                ");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("user-popup popup manualPosition")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/services-shopping-cart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    ");
  stack1 = helpers['if'].call(depth0, "servicesBookings.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n		<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":services-shopping-cart view.shoppingCartOpen:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n			<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showCart", {hash:{
    'target': ("view"),
    'bubbles': (false)
  },hashTypes:{'target': "STRING",'bubbles': "BOOLEAN"},hashContexts:{'target': depth0,'bubbles': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\" icon-shopping-cart\"></div>\r\n			<span class=\"counter\">");
  stack1 = helpers._triageMustache.call(depth0, "servicesBookings.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n\r\n			<div class=\"cart-content\">\r\n				<h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "serviceFeature.shoppingCart", options) : helperMissing.call(depth0, "t", "serviceFeature.shoppingCart", options))));
  data.buffer.push("</h3>\r\n\r\n				<div class=\"symbol-button icon-forward\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "serviceFeature.checkOut", options) : helperMissing.call(depth0, "t", "serviceFeature.checkOut", options))));
  data.buffer.push("</div>\r\n				<ul>\r\n                    ");
  stack1 = helpers.each.call(depth0, "booking", "in", "servicesBookings", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n					<li class=\"total\">\r\n						<span class=\"label\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "serviceFeature.total", options) : helperMissing.call(depth0, "t", "serviceFeature.total", options))));
  data.buffer.push("</span>\r\n						<span class=\"price icon-open-front\">");
  data.buffer.push(escapeExpression((helper = helpers.localeNumber || (depth0 && depth0.localeNumber),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "totalCostZeroPadded", options) : helperMissing.call(depth0, "localeNumber", "totalCostZeroPadded", options))));
  data.buffer.push(" €</span>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n		</div>\r\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n						<li>\r\n                            ");
  stack1 = helpers['with'].call(depth0, "booking.Vehicle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n							<span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":arwe-symbol booking.buttonClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\r\n							<span class=\"price icon-open-front\">");
  data.buffer.push(escapeExpression((helper = helpers.localeNumber || (depth0 && depth0.localeNumber),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "booking.costZeroPadded", options) : helperMissing.call(depth0, "localeNumber", "booking.costZeroPadded", options))));
  data.buffer.push(" €</span>\r\n						</li>\r\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                                ");
  stack1 = helpers['if'].call(depth0, "imageID", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n								<div class=\"description\">\r\n									<strong>");
  stack1 = helpers._triageMustache.call(depth0, "brand", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\r\n									<small>");
  stack1 = helpers._triageMustache.call(depth0, "numberPlate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>\r\n								</div>\r\n                            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n									<div class=\"vehicle-pic image-mask\">\r\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers.imageUrl || (depth0 && depth0.imageUrl),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "imageUrl", "", options))));
  data.buffer.push("\r\n									</div>\r\n                                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n									<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":vehicle-pic :car-icon booking.vehicleCategoryIcon booking.type")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\r\n                                ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "hasFeature.Service", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/settings_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.popup", options) : helperMissing.call(depth0, "t", "settings.popup", options))));
  data.buffer.push("\r\n");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("settings-popup popup")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["menu/sync_popup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n    <span class=\"mid-icon icon-sync\"></span><h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sync.progress", options) : helperMissing.call(depth0, "t", "sync.progress", options))));
  data.buffer.push("</h2>\r\n	<p>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sync.loading", options) : helperMissing.call(depth0, "t", "sync.loading", options))));
  data.buffer.push("</p>\r\n	<div class=\"loader-wrapper\">\r\n		<div class=\"loader-progress\"></div>\r\n	</div>\r\n");
  return buffer;
  }

  stack1 = (helper = helpers['popup-box'] || (depth0 && depth0['popup-box']),options={hash:{
    'classNames': ("sync-popup popup")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "popup-box", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

this["Ember"]["TEMPLATES"]["pageNotFound"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"page-not-found\">\r\n    <div class=\"main-banner-wrapper\" role=\"main\">\r\n        <div class=\"main-banner\">\r\n            <h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.sorryBut", options) : helperMissing.call(depth0, "t", "general.sorryBut", options))));
  data.buffer.push(" <strong>\"");
  stack1 = helpers._triageMustache.call(depth0, "path", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</strong> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.notFound", options) : helperMissing.call(depth0, "t", "general.notFound", options))));
  data.buffer.push("</h1>\r\n            <p class=\"main-content\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.pageIsNotThere", options) : helperMissing.call(depth0, "t", "general.pageIsNotThere", options))));
  data.buffer.push("<br><br>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "general.nextSteps", options) : helperMissing.call(depth0, "t", "general.nextSteps", options))));
  data.buffer.push("\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});