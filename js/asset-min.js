var winHeight,winWidth,DivHeight,PrevGetToolBarHeight,ThisDiv,ParentSub,SubComp,ShowHideSpeed=500,BreakPoint=1159,ShowHidePointer=2,ShowHideBottomLess=0,FadeSpeed="moderate";function HideOthers(e){jQuery.each(["st_mobile_follow_2","st_mobile_donate_2","st_mobile_share_2","st_mobile_buybook_2","st_desktop_donate_pop","st_desktop_book_pop","st_desktop_products_pop"],function(o,i){e!=i&&jQuery("."+i).is(":visible")&&jQuery("."+i).hide("slide",{direction:"down"},ShowHideSpeed)})}function GetToolBarHeight(){return jQuery(window).width()>=BreakPoint?(jQuery.each(["st_desktop_donate_pop","st_desktop_book_pop","st_desktop_products_pop"],function(e,o){if(jQuery("."+o).is(":visible"))return ThisDiv=jQuery("."+o).outerHeight(),!1;ThisDiv=""}),jQuery("#st_desktop").outerHeight()+ThisDiv):(jQuery.each(["st_mobile_follow_2","st_mobile_donate_2","st_mobile_share_2","st_mobile_buybook_2"],function(e,o){if(jQuery("."+o).is(":visible"))return ThisDiv=jQuery("."+o).outerHeight(),!1;ThisDiv=""}),jQuery("#st_mobile").outerHeight()+ThisDiv)}function ShowHideSocialToolbar(){jQuery(window).width()!=BreakPoint&&jQuery(window).width()!=BreakPoint-1||HideOthers(),2==ShowHidePointer&&(jQuery(window).width()>=BreakPoint?(jQuery.each(["st_mobile_follow_2","st_mobile_donate_2","st_mobile_share_2","st_mobile_buybook_2"],function(e,o){jQuery("."+o).is(":visible")&&jQuery("."+o).hide("slide",{direction:"down"},ShowHideSpeed)}),jQuery("#st_mobile").hide("slide",{direction:"down"},ShowHideSpeed),jQuery("#st_desktop").show("slide",{direction:"down"},ShowHideSpeed)):(jQuery.each(["st_desktop_donate_pop","st_desktop_book_pop","st_desktop_products_pop"],function(e,o){jQuery("."+o).is(":visible")&&jQuery("."+o).hide("slide",{direction:"down"},ShowHideSpeed)}),jQuery("#st_desktop").hide("slide",{direction:"down"},ShowHideSpeed),jQuery("#st_mobile").show("slide",{direction:"down"},ShowHideSpeed)))}function RecalibrateShowMeBtn(){2==ShowHidePointer&&jQuery(".showhide").css({bottom:GetToolBarHeight()-ShowHideBottomLess})}function FadeShowHideIcon(){jQuery("#showhide_icon").fadeOut(FadeSpeed)}function FadedRecalibrateShowMeBtn(){RecalibrateShowMeBtn(),jQuery("#showhide_icon").fadeIn(FadeSpeed)}jQuery(document).ready(function(){ShowHideSocialToolbar(),jQuery(".showhide").delay(2e3).css("bottom",GetToolBarHeight()-ShowHideBottomLess).fadeIn(FadeSpeed)}),jQuery(window).resize(function(){ShowHideSocialToolbar(),RecalibrateShowMeBtn()}),jQuery(".st_desktop_donate").on("click",function(){FadeShowHideIcon(),HideOthers("st_desktop_donate_pop"),jQuery(".st_desktop_donate_pop").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery(".st_desktop_book").on("click",function(){FadeShowHideIcon(),HideOthers("st_desktop_book_pop"),jQuery(".st_desktop_book_pop").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery(".st_desktop_products").on("click",function(){FadeShowHideIcon(),HideOthers("st_desktop_products_pop"),jQuery(".st_desktop_products_pop").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery(".st_mobile_follow").on("click",function(){FadeShowHideIcon(),HideOthers("st_mobile_follow_2"),jQuery(".st_mobile_follow_2").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery(".st_mobile_donate").on("click",function(){FadeShowHideIcon(),HideOthers("st_mobile_donate_2"),jQuery(".st_mobile_donate_2").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery(".st_mobile_share").on("click",function(){FadeShowHideIcon(),HideOthers("st_mobile_share_2"),jQuery(".st_mobile_share_2").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery(".st_mobile_buybook").on("click",function(){FadeShowHideIcon(),HideOthers("st_mobile_buybook_2"),jQuery(".st_mobile_buybook_2").toggle("slide",{direction:"down"},ShowHideSpeed,function(){FadedRecalibrateShowMeBtn()})}),jQuery("#showhide_icon").on("click",function(){1==ShowHidePointer?(jQuery(this).fadeOut(FadeSpeed,function(){RecalibrateShowMeBtn(),jQuery(this).removeClass("rotate0").addClass("rotate180").fadeIn(FadeSpeed)}),ShowHidePointer=2):(jQuery("#st_mobile").is(":visible")&&(jQuery.each(["st_mobile_follow_2","st_mobile_donate_2","st_mobile_share_2","st_mobile_buybook_2"],function(e,o){if(jQuery("."+o).is(":visible"))return jQuery("."+o).hide("slide",{direction:"down"},ShowHideSpeed,function(){jQuery("#st_mobile").hide("slide",{direction:"down"},ShowHideSpeed)}),SubComp=1,!1;SubComp=""}),SubComp||jQuery("#st_mobile").hide("slide",{direction:"down"},ShowHideSpeed)),jQuery("#st_desktop").is(":visible")&&(jQuery.each(["st_desktop_donate_pop","st_desktop_book_pop","st_desktop_products_pop"],function(e,o){if(jQuery("."+o).is(":visible"))return jQuery("."+o).hide("slide",{direction:"down"},ShowHideSpeed,function(){jQuery("#st_desktop").hide("slide",{direction:"down"},ShowHideSpeed)}),ParentSub=1,!1;ParentSub=""}),ParentSub||jQuery("#st_desktop").hide("slide",{direction:"down"},ShowHideSpeed)),jQuery(this).fadeOut(FadeSpeed,function(){jQuery(".showhide").css("bottom","0"),jQuery(this).removeClass("rotate180").addClass("rotate0").fadeIn(FadeSpeed)}),ShowHidePointer=1),ShowHideSocialToolbar()});