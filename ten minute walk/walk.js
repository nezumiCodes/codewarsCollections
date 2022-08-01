function isValidWalk(walk) {
  let sum = 0
  let direct = {'n':0, 's':0, 'w':0, 'e':0}
  if (!(walk.length === 10) ){
    return false
  }
  else {
    for(i=0; i<walk.length; i++) direct[walk[i]] +=1
    return (direct['n'] === direct['s'] && direct['w'] === direct['e']) ? true : false
  }
}
