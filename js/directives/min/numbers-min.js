app.directive("numbers",function(){return{restrict:"E",templateUrl:"templates/numbers.html",controller:function(t,e,n,i){e.activeCapsule=null,e.activeTab=null,i.get("numbers").then(function(t){e.numbers=t}),i.get("brands").then(function(t){e.brands=t}),i.get("greetings").then(function(t){e.greetings=t}),i.get("months").then(function(t){e.months=t}),i.get("groups").then(function(t){e.groups=t}),i.get("ivr").then(function(t){e.ivrs=t}),e.toggleIvr=function(t){t.ivr=t.ivr===!0?!1:!0},e.setActive=function(t){return e.activeCapsule===t?void(e.activeCapsule=null):void(e.activeCapsule=t)},e.isActive=function(t){return e.activeCapsule===t},e.setTab=function(t){e.activeTab=t},e.isActiveTab=function(t){return e.activeTab===t}}}});