hackerNews.factory('NewsFactory', function NewsFactory(){
    var factory={};
    factory.news=[];
    factory.addNews=function(){
        factory.news.push({articleTitle: this.title, id: this.news.length+1, comments:[], articleContent: this.content });
        this.title=null;
        this.content=null;

    }

    return factory;
});
