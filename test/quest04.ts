 // log Analysis는 한방에 통과!
 function getStaleServerCount(n: number, log_data: number[][], query: number[], X: number): number[] {
    let res: number[] = [];
    
    for (let i = 0; i < query.length; i++) {
        let customSet = new Set();
        for (let j =0; j < log_data.length; j++) {
            if (log_data[j][1] >= query[i] - X && log_data[j][1] <= query[i]) {
                customSet.add(log_data[j][0]);
            }
        }
        res.push(n - customSet.size);
        console.log(res);
    }
    
    return res;
}