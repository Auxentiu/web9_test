
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view

// function addMockedData() {
// 		var articles = [{
// 			title:"Title1",
// 			content:"Content1",
// 			id:1
// 		},{
// 			title:"Title2",
// 			content:"Content2",
// 			id:2
// 		},{
// 			title:"Title3",
// 			content:"Content3",
// 			id:3
// 		},{
// 			title:"Title4",
// 			content:"Content4",
// 			id:4
// 		},{
// 			title:"Title5",
// 			content:"Content5",
// 			id:5
// 		}];

// 		var stringifiedData = JSON.stringify(articles);
// 		localStorage.setItem("articles",stringifiedData);
// }
// addMockedData();

function onHtmlLoaded() {
	var articles = new Articles();
	articles.getAll().done(function(){
		var container = $("#container");
		for(var i = 0; i<articles.models.length; i++) {
		//	var articleElem = $("<li data-value="+articles.models[i].id+"></li>");
		var articleElem = $("<li>"+articles.models[i].title+"</li></br> <li>"+articles.models[i].content+ "</li> </br> <li>"+articles.models[i].creation_date+ "</li>");
		//	articleElem.html(articles.models[i].title)
			articleElem.on("click", goToArticlePage);
			container.append(articleElem);
			console.log(articles.models[i])
		}	
	});
}

 var uploadBtn = $("#upload_btn");
    var articleModel;
    uploadBtn.on("click", function() {
        var titleValue = $("[title='title']").val();
        var contentValue =$("[content='cotent']").val();
        var categoryValue =$("[category_id='category']").val();
        var userValue =$("[user_id='user']").val();
        
        articleModel = new Upload({
            title: titleValue,
            content: contentValue,
        });
        var artReq = articleModel.save();
        artReq.done(redirectUserToArticlesPage);
    });
    // goToArticlePage();

function goToArticlePage() {
	var currentArticleId = $(this).attr("data-value");
	window.location.href = "https://web9-auxentiu.c9users.io/blog/UI/pages/articles.html?id="+currentArticleId;
}