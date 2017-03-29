/* global Article */
/* global $ */
function Articles(){
	this.models = [];
	
}


Articles.prototype.findArticleById = function(id) {
	var result;
	for (var i=0; i<this.models.length; i++) {
		if (this.models[i].id == id) {
			result = this.models[i];
		}
	}
	return result;
}
Articles.prototype.getAll = function() {
// 	//get all article items from server/localStorage
// 	var articlesStr = localStorage.getItem("articles");
// 	var articles = JSON.parse(articlesStr);
// 	if (articles) {
// 		for (var i=0; i<articles.length; i++) {
// 			var article = new Article(articles[i]);
// 			this.models.push(article);
// 		}

// 		console.log(articles);
// 		console.log(this.models);

    var that=this;
        var config = {
            url: "https://web9-auxentiu.c9users.io/blogapi2/articles",
            method: "GET",
            // dataType:"json",
            success: function(resp) {
                for (var i=0; i<resp.length; i++) {
			    var article = new Article(resp[i]);
		    	that.models.push(article);
                }
                console.log("dawdawd");
            },
            
            error: function() {
                console.log("dawdadawd");
            }
        }
        return $.ajax(config);

	}


Articles.prototype.removeArticle = function(articleId) {
	//here we will search for article model by id
	//and we remove it from models array and from 
	//server/localStorage
}

Articles.prototype.save = function(articleData) {
	    
	var formData = new FormData();
	formData.append("main_image_url",articleData.img);
	formData.append("title", articleData.title);
	formData.append("content", articleData.content);
	formData.append("user_id", "1");
	formData.append("category_id", "1");
   
        var config = {
            url: "https://web9-auxentiu.c9users.io/blogapi2/comments/add",
            method: "POST",
            data: formData,
            
            processData: false,
            contentType: false,
            success: function(resp) {
                console.log ("succes");            
                
            },
            
        
        error: function(xhr, status, error) {
            alert("Oops!Something is wrong " + error);
        },
        }
        return $.ajax(config);

	}


