var rover = {
  position: [0,0], 
  direction: ['North', 'East', 'South', 'West'],
  currentDirection: 0,
  obstacle: [[1, 2], [4, 5]],
  toStop: false 
};


function getInstructions(commands){
  var instructions = commands.split(" ");
  return instructions;
}




function movements(instructions){
  for (var i = 0; i < instructions.length; i++){

    if (rover.toStop === false){ 

    switch (instructions[i]){
      case 'f':
      move('f');
      break;

      case 'b':
      move('b');
      break;

      case 'l':
      rotateLeft();
      break;

      case 'r':
      rotateRight();
      break;
    }
  }
}
}


function rotateRight(r){
  if (rover.currentDirection +1 <= 3){
      rover.currentDirection++;
  } else {
      rover.currentDirection = 0;
  }
}

function rotateLeft(l){
  if (rover.currentDirection -1 >= 1){
      rover.currentDirection--;
  } else {
      rover.currentDirection = 0;
  }
}


function move(where){
  switch (rover.currentDirection){

    case 0: 
    if (where === 'f'){ 
      if (rover.position[0] + 1 <=9){
         if (!obstacleDetector(true, rover.position[0] + 1)) {
        rover.position[0]++;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(true, 0)){  
        rover.position[0] = 0;
        } else {
          break;
        }
      }
        
    } else { 
      if (rover.position[0] - 1 >=0){
         if (!obstacleDetector(true, rover.position[0] - 1)) {
        rover.position[0]--;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(true, 9)){  
        rover.position[0] = 9;
        } else {
          break;
        }
      }
    } 
    break;

    case 1: 
    if (where === 'f'){ 
      if (rover.position[1] + 1 <=9){
         if (!obstacleDetector(false, rover.position[1] + 1)) {
        rover.position[1]++;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(false, 0)){ 
        rover.position[1] = 0;
        } else {
          break;
        }
      }
        
    } else { 
      if (rover.position[1] - 1 >=0){
         if (!obstacleDetector(false, rover.position[1] - 1)) {
        rover.position[1]--;
        } else {
          break;
        }
      } else {
        if (!obstacleDetect(false, 9)){ 
        rover.position[1] = 9;
        } else {
          break;
        }
      }
    } 
    break;

    case 2: 
    if (where === 'f'){ 
      if (rover.position[0] - 1 >=0){
         if (!obstacleDetector(true, rover.position[0] - 1)) {
        rover.position[0]--;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(true, 9)){  
        rover.position[0] = 9;
        } else {
          break;
        }
      }
        
    } else { 
      if (rover.position[0] + 1 <=9){
         if (!obstacleDetector(true, rover.position[0] + 1)) {
        rover.position[0]++;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(true, 0)){  
        rover.position[0] = 0;
        } else {
          break;
        }
      }
    } 
    break;

    case 3:
    if (where === 'f'){
      if (rover.position[1] - 1 >=0){
         if (!obstacleDetector(false, rover.position[1] - 1)) {
        rover.position[1]--;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(false, 9)){ 
        rover.position[1] = 9;
        } else {
          break;
        }
      }
        
    } else { 
      if (rover.position[1] + 1 <=9){
         if (!obstacleDetector(false, rover.position[1] + 1)) {
        rover.position[1]++;
        } else {
          break;
        }
      } else {
        if (!obstacleDetector(false, 0)){ 
        rover.position[1] = 0;
        } else {
          break;
        }
      }
    } 
    break;
  }
}

function obstacleDetector(yPosition, futurePosition){

  if (yPosition === true){
    for (var i = 0; i < rover.obstacle.length; i++){
      if (rover.obstacle[i][0] === futurePosition && rover.obstacle[i][1] === rover.position[1]){
        console.log('The rover has reached an obstacle in ' + rover.obstacle[i] + '. It is not able to continue');
        rover.toStop = true;
        return rover.toStop       
      }
    }
  }

  if (yPosition === false){
    for (var i = 0; i < rover.obstacle.length; i++){
      if (rover.obstacle[i][0] === rover.position[0] && rover.obstacle[i][1] === futurePosition){
        console.log('The rover has reached an obstacle in [' + rover.obstacle[i] + ']. It is not able to continue.');
        rover.toStop = true;
        return rover.toStop       
      }
    }
  }
}


movements('fffrflbbrf'); 
console.log("Current rover position: [" + rover.position[0] + ", " + rover.position[1] + "]")
console.log("Current rover direction: " + rover.direction[rover.currentDirection])