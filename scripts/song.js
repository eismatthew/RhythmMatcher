// 4 beats - 1.55
// 2 beats - .775
// 1 beat - .3875
var one_beat = .3875
var two_beat = .775
var three_beat = 1.1625
var four_beat = 1.55
var five_beat = 1.9375
var eight_beat = 3.1
var one_bar = 6.2
var two_bar = 12.4
var four_bar = 24.8
var eight_bar = 49.6
var sixteen_bar = 99.2

var a = {
  color: 'rgba(219, 68, 55, 1)',
  next: 0,
  notes: [
    { duration: 3.33, delay: 0 }, //1
    { duration: 3.33, delay: 1.55 }, //2
    { duration: 3.33, delay: 6.2}, //3
    { duration: 3.33, delay: 7.75 }, //4
    { duration: 3.33, delay: 9.3 }, //5
    { duration: 3.33, delay: 10.85}, //6
    { duration: 3.33, delay: 12.4}, //7
    { duration: 3.33, delay: 0 + two_bar }, //8
    { duration: 3.33, delay: 1.55 + two_bar  }, //9
    { duration: 3.33, delay: 3.1 + two_bar }, //10
    { duration: 3.33, delay: 4.65 + two_bar  }, //11
    { duration: 3.33, delay: 6.2 + two_bar }, //12
    { duration: 3.33, delay: 12.4 + two_bar }, //13

    //break
    { duration: 3.33, delay: 0 + four_bar}, 
    // { duration: 3.33, delay: 6.2 + four_bar}, 
    { duration: 3.33, delay: 12.4 + four_bar}, 
    
  ]
};

var s = {
  color: 'rgba(15, 157, 88, 1)',
  next: 0,
  notes: [
    { duration: 3.33, delay: 3.1}, //1
    { duration: 3.33, delay: 4.65 }, //2
    // { duration: 3.33, delay: 6.2 + two_beat}, //11
    // { duration: 3.33, delay: 7.75 + two_beat }, //15
    // { duration: 3.33, delay: 9.3 + two_beat }, //19
    // { duration: 3.33, delay: 10.85 + two_beat}, //23
    // { duration: 3.33, delay: 12.4 + two_beat}, //27

    { duration: 3.33, delay: 6.2 + two_beat}, //10
    { duration: 3.33, delay: 7.75 + two_beat }, //14


    { duration: 3.33, delay: 0 + four_bar - eight_beat}, 
    // { duration: 3.33, delay: 6.2 + four_bar - five_beat + one_bar  }, //11
    // { duration: 3.33, delay: 7.75 + four_bar - five_beat + one_bar }, //15

  
  

    
    // { duration: 3.33, delay: 9.3 + two_beat  + two_bar }, //19
    // { duration: 3.33, delay: 10.85 + two_beat + two_bar }, //23
    // { duration: 3.33, delay: 12.4 + two_beat + two_bar }, //27
    // // { duration: 3.33, delay: 7.75 + two_bar  }, //13
    // // { duration: 3.33, delay: 9.3 + two_bar   }, //17
    
    // //break
    // { duration: 3.33, delay: 3.1 + four_bar},

  ]
};

var k = {
  color: 'rgba(66, 133, 244, 1)',
  next: 0,
  notes: [
    { duration: 3.33, delay: 0  + two_beat}, //2
    { duration: 3.33, delay: 1.55  + two_beat}, //4
    { duration: 3.33, delay: 3.1  + two_beat}, //6
    { duration: 3.33, delay: 4.65  + two_beat}, //8
    // { duration: 3.33, delay: 6.2 + two_beat}, //10
    // { duration: 3.33, delay: 7.75 + two_beat }, //14
    { duration: 3.33, delay: 9.3 + two_beat }, //18
    { duration: 3.33, delay: 10.85 + two_beat}, //22
    // { duration: 3.33, delay: 12.4 + two_beat}, //26
    // { duration: 3.33, delay: 1.55  + two_beat + two_bar }, //4
    { duration: 3.33, delay: 3.1  + two_beat + two_bar }, //6
    { duration: 3.33, delay: 4.65 + two_beat + two_bar }, //8
    // { duration: 3.33, delay: 6.2 + two_beat + two_bar }, //10
    // { duration: 3.33, delay: 7.75 + two_beat + two_bar }, //14
    // { duration: 3.33, delay: 9.3 + one_beat  + two_bar }, //18
    // { duration: 3.33, delay: 10.85 + one_beat + two_bar }, //22
    // { duration: 3.33, delay: 12.4 + one_beat + two_bar }, //26


    //break
     { duration: 3.33, delay: 6.2 + four_bar}, 
    
  ]
};


var l = {
  color: 'rgba(244, 180, 0, 1)',
  next: 0,
  notes: [
    // { duration: 3.33, delay: 0 + one_beat }, 
    // { duration: 3.33, delay: 1.55 + one_beat }, 
    // { duration: 3.33, delay: 0 + five_beat }, 
    // { duration: 3.33, delay: 1.55 + five_beat }, 








    // { duration: 3.33, delay: 9.3 + four_bar + two_bar}, 
    // { duration: 3.33, delay: 10.85 + four_bar + two_bar}, 



     { duration: 3.33, delay: 0  + one_beat}, //2
    { duration: 3.33, delay: 1.55  + one_beat}, //4
    { duration: 3.33, delay: 3.1  + one_beat}, //6
    { duration: 3.33, delay: 4.65  + one_beat}, //8
    { duration: 3.33, delay: 6.2 + one_beat}, //10
    { duration: 3.33, delay: 7.75 + one_beat }, //14
    { duration: 3.33, delay: 9.3 + one_beat }, //18
    { duration: 3.33, delay: 10.85 + one_beat}, //22
    { duration: 3.33, delay: 12.4 + one_beat}, //26
   
    

    //break
    { duration: 3.33, delay: 4.65 + two_beat + two_bar - eight_beat }, //8
  ]
};



var song = {
  duration: 212,
  sheet: [a, s, k, l]
};

