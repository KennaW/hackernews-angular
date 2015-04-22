hackerNews.controller('NewsCtrl', function NewsCtrl($scope, NewsFactory){
    $scope.news= NewsFactory.news;
    $scope.NewsFactory= NewsFactory;
})
