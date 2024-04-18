// The UDP pipeline은 성능 이슈 해결!
function getNumberOfDroppedPackets(requests: number[][], max_packets: number, rate: number): number {
    let drop: number = 0;
    let left: number = 0;
    let time: number = 1;
    let reqIndex: number = 0;
    
    let sortReq = requests.sort((comp1, comp2) => comp1[0] - comp2[0]);
    console.log(sortReq);
    let reqLen = requests.length;
    console.log('len : ' + reqLen)
    
    while(true) {
        
        if (reqIndex < reqLen && sortReq[reqIndex][0] == time) {
            left += sortReq[reqIndex][1];
            reqIndex++;
        }
        if (left > max_packets) {
            drop += left - max_packets;
            left = max_packets;
        }
        left = left - rate;
        if (left < 0) {
            left = 0;
        }
        console.log(`time : ${time}, left : ${left}, drop : ${drop}`);
        
        
        if (time > sortReq[reqLen-1][0]) {
            break;
        } else {
            time++;
        }
        
        // skip
        if (reqIndex < reqLen) {
            let skipCount = sortReq[reqIndex][0] - time;
            console.log('skipCount : ' + skipCount)
            time += skipCount
            left = left - (rate * skipCount);
            if (left < 0) {
                left = 0;
            }
        }
    }

    return drop;
}