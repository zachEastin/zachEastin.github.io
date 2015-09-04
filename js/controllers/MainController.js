app.controller('MainController',['$scope', function($scope){

  $scope.images = [
    {
      className: 'snowman',
      highRes: 'images/portfolio/bigPic/snowman.jpg',
      medRes: 'images/portfolio/medium/snowman.jpg'
    },{
      className: 'robotLightbulb',
      highRes: 'images/portfolio/bigPic/Robot-lightbulbBetter.jpg',
      medRes: 'images/portfolio/medium/Robot-lightbulbBetter.jpg'
    },{
      className: 'model',
      highRes: 'images/portfolio/bigPic/woodenModel.jpg',
      medRes: 'images/portfolio/medium/woodenModel.jpg'
    },{
      className: 'oldMan',
      highRes: 'images/portfolio/bigPic/oldManAwesome.jpg',
      medRes: 'images/portfolio/medium/oldManAwesome.jpg'
    },{
      className: 'elf',
      highRes: 'images/portfolio/bigPic/elfNew.jpg',
      medRes: 'images/portfolio/medium/elfNew.jpg'
    },{
      className: 'minicoop',
      highRes: 'images/portfolio/bigPic/MiniCoop.jpg',
      medRes: 'images/portfolio/medium/MiniCoop.jpg'
    },{
      className: 'bike',
      highRes: 'images/portfolio/bigPic/bike.jpg',
      medRes: 'images/portfolio/medium/bike.jpg'
    },{
      className: 'ornament',
      highRes: 'images/portfolio/bigPic/OrnamentBetter.jpg',
      medRes: 'images/portfolio/medium/OrnamentBetter.jpg'
    },{
      className: 'pumpkin',
      highRes: 'images/portfolio/bigPic/pumpkin.jpg',
      medRes: 'images/portfolio/medium/pumpkin.jpg'
    },{
      className: 'cellphone',
      highRes: 'images/portfolio/bigPic/cellphone.jpg',
      medRes: 'images/portfolio/medium/cellphone.jpg'
    },{
      className: 'dinnerware',
      highRes: 'images/portfolio/bigPic/dinnerware.jpg',
      medRes: 'images/portfolio/medium/dinnerware.jpg'
    },{
      className: 'balloons',
      highRes: 'images/portfolio/bigPic/balloons.jpg',
      medRes: 'images/portfolio/medium/balloons.jpg'
    },{
      className: 'butGod',
      highRes: 'images/portfolio/bigPic/butGod.jpg',
      medRes: 'images/portfolio/medium/butGod.jpg'
    },{
      className: 'africa',
      highRes: 'images/portfolio/bigPic/africa.jpg',
      medRes: 'images/portfolio/medium/africa.jpg'
    }
  ];
  $scope.videos = [
    {
      className: 'demoReel',
      href: 'https://www.youtube.com/embed/xPy3sxANlnU',
      img: 'vids/small/demoReel.jpg',
      hover: 'vids/small/demoReelHover.jpg'
    },{
      className: 'WMUH',
      href: 'https://www.youtube.com/embed/WpeABiRH7TE',
      img: 'vids/small/WMUH.jpg',
      hover: 'vids/small/WMUHHover.jpg'
    },{
      className: 'WMUHvfx',
      href: 'https://www.youtube.com/embed/-SEdbHP8L6U',
      img: 'vids/small/vfxReel.jpg',
      hover: 'vids/small/vfxReelHover.jpg'
    },{
      className: 'nineteenEightyFour',
      href: 'https://player.vimeo.com/video/120224592',
      img: 'vids/small/1984.jpg',
      hover: 'vids/small/1984Hover.jpg'
    },{
      className: 'fnf',
      href: 'https://www.youtube.com/embed/HatbXlfNC2g?rel=0',
      img: 'vids/small/feathersNflowers.jpg',
      hover: 'vids/small/feathersNflowersHover.jpg'
    },{
      className: 'littleThings',
      href: 'https://www.youtube.com/embed/-kfeno5kcEE?rel=0',
      img: 'vids/small/littleThings.jpg',
      hover: 'vids/small/littleThingsHover.jpg'
    }
  ];

}]);
