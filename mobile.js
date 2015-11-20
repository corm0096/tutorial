document.addEventListener("DOMContentLoaded",function()
{
	$("#startbutton").on("click", function(event)
	{
		event.preventDefault();

		//Check for data.		
		var pageref=localStorage.getItem("lastpage");
		if (!pageref)
		{
			//This will only happen in the event of no key existing.
			pageref="page1";
		}
		$.mobile.pageContainer.pagecontainer("change", "#"+pageref);
	});
});


$(document).on('pagechange', function (event1, pageloaded)
{
	var curpage=pageloaded.toPage.attr('id');

	//Only interested in storing tutorial pages, all of which have an id that starts with "p".
	if (curpage.substring(0,1)==="p")
	{
		localStorage.setItem("lastpage",curpage);
	}
	
	//Intercept and change default "back" icons to "close" functionality.
	$("#"+curpage+" .ui-icon-delete").removeAttr("data-rel");
	$("#"+curpage+" .ui-icon-delete").attr("href","#start");
});

