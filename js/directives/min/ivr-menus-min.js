app.directive("ivrMenus",function(){return{restrict:"E",templateUrl:"templates/ivr-menu.html",controller:function(e,t,i,n,u){t.ipsum=u.ipsum,n.get("ivr").then(function(e){t.ivrMenus=e}),t.activeCapsule=null,t.setActive=function(e){return t.activeCapsule===e?void(t.activeCapsule=null):void(t.activeCapsule=e)},t.isActive=function(e){return t.activeCapsule===e}}}});