$(document).ready(onHtmlLoaded);
function onHtmlLoaded() {
    $("#save_article").on("click", function(){
        var articleTitle = $("input[name='title']").val();
        var articleContent = $("textarea[name='content']").val();
        
        var articles = new Articles();
       var saveOperation = articles.save({
            title: articleTitle,
            content: articleContent,
            img: imgFile,
        })
        saveOperation.done(redirectUserToArticlesPage);
    });
    
    function redirectUserToArticlesPage() {
        window.location.href = "https://web9-auxentiu.c9users.io/blog/UI/pages/articles.html"
    }
}