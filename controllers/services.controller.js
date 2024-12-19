exports.services = function(req, res, next) {
    res.render('list', {
      title: 'ListServices',
      caption: 'List of Services',
      link: 'GitHub',
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
      img1_ref: 'https://github.com/domvito55',
      img1_alt: 'Non-web development logos',
      img1_src: '/images/NonWeb.png',
      row1_title: 'Non-web applications development',
      row1_desc: 'I have a background in Mechatronic\'s engineering. The very first language' +
      ' That I leard about 15 years ago was C. I also have worked with Assembly MIPS and' +
      ' Assembly 8085, and I have written code in Python for a on-board computer for a NASA mission.'+
      ' So I can help you to develop any kind of application, even using low level language for' +
      ' embeded systems.',
      img2_ref: 'https://github.com/domvito55',
      img2_alt: 'Web development logos',
      img2_src: '/images/WebDev.png',
      row2_title: 'Web design and development',
      row2_desc: 'I can design a complete responsive websites and web applications,' +
      ' using all the modern best practices.' +
      ' I can develop the front-end, the back-end side, design, and manage databases.',
      userName: req.user ? req.user.username : ''
    });
  }