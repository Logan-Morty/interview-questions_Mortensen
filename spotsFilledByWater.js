/*
Write a function called spotsFilledByWater that takes as input an array of numbers. Each element of this array represents
the amount of bricks that are stacked on top of each other at that position. So this array [2, 0, 1] means there are two
bricks stacked on each other on the left, then in the middle there are no bricks, and on the right there is one brick.
This function needs to return a number representing the amount of empty spots that would be filled if somebody were to pour water onto this structure.
*/

function spotsFilledByWater(bricks){
	//variable to keep track of total filled spots
	numFilled = 0;
	//loop through each space that can possibly be filled (first and last spaces cannot)
	for(let i = 1; i < bricks.length-1; i++){
		//find the highest wall to the left of the current spot
		let left = 0;
		for(let j = i-1; j >= 0; j--){
			if(bricks[j] > left)
				left = bricks[j];
		}
		//find the highest wall to the right of the current spot
		let right = 0;
		for(let j = i+1; j < bricks.length; j++){
			if(bricks[j] > right)
				right = bricks[j];
		}
		//find the lowest of the two walls
		const lowest = Math.min(left, right);
		//calculate the differenc between the lowest wall and the current spot, and if greater than 0, add to total
		numFilled += Math.max(0, lowest - bricks[i]);
	}
	//return the total
	return numFilled;
}

//console.log("output: " + spotsFilledByWater([1,0,2]));

// ex.
// const bricks = [1, 0, 1]
// spotsFilledByWater(bricks) == 1
console.log("number filled for array [1, 0, 1]: " + spotsFilledByWater([1, 0, 1]));
/*
  H = brick
  _ = empty, no bricks
  ~ = water

  brick structure:
   
  H_H
  
  after pouring water:
   
  H~H
  
  meaning:
  
  One spot would be filled after pouring water
   |
   |
   v
  H_H
  
  
  The function returns 1.
*/

// ex.
// const bricks = [1, 0, 0, 2];
// spotsFilledByWater(bricks) == 2
console.log("number filled for array [1, 0, 0, 2]: " + spotsFilledByWater([1, 0, 0, 2]));

/*
  brick structure:
  
     H
  H__H

  after pouring water:
  
     H
  H~~H
  
  meaning:

  Two spots in the middle would be filled after pouring water 
   ||
   ||
   vv
     H  <-- No water stays on this level because it all pours out
  H__H
  
  The function returns 2.
*/

// ex.
// const bricks = [1, 0];
// spotsFilledByWater(bricks) == 0
console.log("number filled for array [1, 0]: " + spotsFilledByWater([1, 0]));

/*
  brick structure:
  
  H_

  after pouring water:
  
  H_
  
  meaning:

  Water did not fill this spot because there was nothing to contain it on the right. 
   |
   |
   v
  H_
  
  The function returns 0.
*/

// hard ex:
console.log("number filled for array [0,1,2,3,0,0,2,3,2,0]: " + spotsFilledByWater([0,1,2,3,0,0,2,3,4,0]));
/*brick structure:
	        H
	   H   HH
	  HH  HHH
	_HHH__HHH_
	
	after pouring water:
	        H
	   H~~~HH
	  HH~~HHH
	_HHH~~HHH_
*/