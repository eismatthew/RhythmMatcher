// 4 beats - 1.45
// 2 beats - .725
// 1 beat - .3625


var a = {
  color: 'rgba(219, 68, 55, 1)',
  next: 0,
  notes: [
    { duration: 3.33, delay: .1 },
    
  ]
};

var s = {
  color: 'rgba(15, 157, 88, 1)',
  next: 0,
  notes: [
  { duration: 3.33, delay: 1.55 },
 
  ]
};

var k = {
  color: 'rgba(66, 133, 244, 1)',
  next: 0,
  notes: [
    { duration: 3.33, delay: 3.1 },
   
  ]
};


var l = {
  color: 'rgba(244, 180, 0, 1)',
  next: 0,
  notes: [
  { duration: 3.33, delay: 4.65},
  ]
};



var song = {
  duration: 212,
  sheet: [a, s, k, l]
};

