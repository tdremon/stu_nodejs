class Packet {
  request: number[][];
  rate: number;
  max_packets: number;
  left: number;
  index: number;
  time: number;
  drop: number;

  constructor(request: number[][], rate: number, max_packets: number) {
    this.request = request;
    this.rate = rate;
    this.max_packets = max_packets;
    this.left = 0;
    this.index = 0;
    this.time = 0;
    this.drop = 0;
    // console.log(this.request.length);
  };

  step() {
    // step 01
    this.time += 1;
    if (this.index < this.request.length && this.request[this.index][0] == this.time) {
      this.left += this.request[this.index][1]
      // console.log(`Add new data : ${this.left}`);
      this.index++;
    }
    // console.log(`left : ${this.left}`);
    // step 02
    if (this.left > this.max_packets) {
      this.drop += this.left - this.max_packets;
      // console.log(`New Drop : ${this.left}`);
      this.left -= this.left - this.max_packets;
      // console.log(`After Drop : ${this.left}`);
    }
    // step 03
    this.left = this.left - this.rate;
    console.log(`time : ${this.time}, left : ${this.left}, drop : ${this.drop}`);
  }

  getLeftPacket(): number {
    return this.left
  }

  getDrops(): number {
    return this.drop;
  };
}

// case 01
// const request: number[][] = [[1,8],[4,9],[6,7]];
// const rate: number = 2;
// const max_packets: number = 10;
// case 02
const request: number[][] = [[2,8],[1,10],[3,4]];
const rate: number = 5;
const max_packets: number = 7;

let packet = new Packet(request.sort(), rate, max_packets);
// let packet = new Packet([[1,8],[4,9],[6,7]], 2, 10);

let time = 1;
while (true) {
  // let packet = new Packet(request, rate, max_packets);
  packet.step();
  if (packet.getLeftPacket() <= 0) {
    break;
  } else {
    time += 1;
  }
}
let result = packet.getDrops();
console.log(`total drop : ${result}`);