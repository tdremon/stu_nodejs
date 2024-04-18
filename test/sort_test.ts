const temp: number[][] = [[2, 8], [1, 10], [3, 4], [11, 12]];
temp.sort((comp1, comp2) => comp1[0] - comp2[0]);
// temp.sort()
for (let i = 0; i < temp.length; i++) {
  console.log(temp[i][0]);
}