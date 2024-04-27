 // log Analysis는 한방에 통과!
 // 요청 별 할당되지 않은 서버의 개수 구하기
function getStaleServerCount(n: number, log_data: number[][], query: number[], X: number): number[] {
    let res: number[] = [];
    
    for (let i = 0; i < query.length; i++) {
        let customSet = new Set();
        // 이미 성공한 서버에 대해서는 아래 과정 생략 가능
        // 어차피 쿼리를 하나도 받지 못한 서버의 개수를 찾는 것이 목표니까
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