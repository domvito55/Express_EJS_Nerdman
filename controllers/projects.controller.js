exports.projects = function(req, res, next) {
    res.render('list', {
      title: 'ListProjects',
      caption: 'List of Projects',
      link: 'Check it live and running',
      img2_ref: 'http://studentweb.cencol.ca/mferre39/index.html',
      img2_alt: 'COMP 125 Projects',
      img2_src:'/images/JavaScript.png',
      row2_title: 'Front-end Javascript projects',
      row2_desc: 'This is the second version of an website that compiles my final project,' +
      ' assignments, and laboratory exercises made during' +
      ' my Software Engineering Program at Centennial College.' +
      ' The navigation bar holds a link to the old version of this same website with first semester' +
      ' work only. You will also find a link to the Front-end side JavaScript projects made' +
      ' during the second-semester',
      img1_ref: 'http://studentweb.cencol.ca/mferre39/Comp213/index.html',
      img1_alt: 'COMP 213 Projects',
      img1_src:'/images/HTML.png',
      row1_title: 'Pure HTML & CSS projects',
      row1_desc: 'This website compiles the final project, all the assignments, and some'+
      ' of the laboratory exercises that I made during the first semester' +
      ' of my Software Engineering Program at Centennial College. You can see how'+
      ' much cool stuff can be done with HMTL and CSS only and you can check' +
      ' how fast I evolved through the assignments. The homepage is the very first' +
      ' assignment, you can access the other assignments and the Final project using' +
      ' the navigation bar. It also holds a link to a newer website that collects' +
      ' not only the first-semester assignments but also the second-semester' +
      ' assignments.',
      img0_ref: 'https://github.com/domvito55/SnakeGame',
      img0_alt: 'Snake game',
      img0_src:'/images/Snake.png',
      row0_title: 'Snake Game Project',
      row0_desc: 'One of my very first programs ever made was a Snake Game.'+
      ' If you are old enough to have had a old Nokia phone, you must have played this game' +
      ' During my bachelor I\' made a version of this game using C language in a Linux environment' +
      ' you can find the code on my GitHub repository. I have recently compiled the game under' +
      ' my machine, so, if you have a Windows 10 or Windows 11, you may be able to run the executable' +
      ' available there and have fun',
      userName: req.user ? req.user.username : ''
    });
  }