hackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, NewsFactory, UtilitiesFactory){
    $scope.news=UtilitiesFactory.findById(NewsFactory.news, $stateParams.articleId)
    $scope.addComment=function(){
        $scope.news.comments.push({content: $scope.commentContent});
        $scope.commentContent=null;
        
    }

});

hackerNews.controller('articleContentCtrl', function articleContentCtrl($scope, $stateParams, NewsFactory, UtilitiesFactory){
    $scope.news=UtilitiesFactory.findById(NewsFactory.news, $stateParams.articleId)
});
