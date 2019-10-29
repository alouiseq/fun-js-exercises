/* TODO: Write the task */

function solution(N) {
  for(let i=0; i<N-1; i++){
      console.log('L');
  }
  let chars = Array.from({length: N}, () => 'L');
  console.log(chars.join(''));
}
