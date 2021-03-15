angular
  .module('profileApp', [])
  .controller('mainCtrl', function($scope){
  
  $scope.users = [
    {username: "@4trio19",
     name: 'Nick Burress',
     country: 'USA',
     completedChallenges: 389,
     completedProjects: 8,
     certificates: 0,
     description: "Student of the Web.  Working through DailyUI and Free Code Camp",
     profilePic: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/167922/profile/profile-512_4.jpg",
     skills: ["Javascript", "CSS", "HTML"],
     background: 'http://www.lirent.net/wp-content/uploads/2014/10/Google-Now-Wallpaper-1-800x450.png',
     currentStreak: 0,
     status: 'online'
    }
  ];
})
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});