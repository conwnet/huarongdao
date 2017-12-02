/**
 * 
 * 
 * 0 空位
 * 1 实体
 * 2 单兵
 * 3 竖行
 * 4 横行
 * 5 BOSS
 */

 /**
  * 交换数组的中元素，如果数字是两个数字，则交换 arr[i] 和 arr[j]
  * 如果参数是两个数组，需要保证两数组长度相等，将数组中所有 index 依次替换
  * @param {Number | Array} i
  * @param {Number | Array} j
  */
Array.prototype.swap = function (i, j) {
    if (typeof i === 'number' && typeof j === 'number') {
        let tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    } else if (i.length === j.length) {
        i.forEach((_, k) => {
            let tmp = this[i[k]];
            this[i[k]] = this[j[k]];
            this[j[k]] = tmp;
        });
    }
    return this;
}

/**
 * pos 位置的棋子向上移动，返回移动后的棋盘状态
 * @param {string} state 棋盘状态
 * @param {number} pos 位置
 */
let moveUp = (state, pos) => {
    if (state[pos] === '2') return state[pos - 4] === '0' &&
        state.split('').swap(pos, pos - 4).join('');
    else if (state[pos] === '3') return state[pos - 4] === '0' &&
        state.split('').swap([pos, pos + 4], [pos - 4, pos]).join('');
    else if (state[pos] === '4') return state[pos - 4] === '0' && state[pos - 3] === '0' &&
        state.split('').swap([pos, pos + 1], [pos - 4, pos - 3]).join('');
    else if (state[pos] === '5') return state[pos - 4] === '0' && state[pos - 3] === '0' &&
        state.split('').swap([pos, pos + 1, pos + 4, pos + 5], [pos - 4, pos - 3, pos, pos + 1]).join('');
    return false;
}

/**
 * pos 位置的棋子向下移动，返回移动后的棋盘状态
 * @param {string} state 棋盘状态
 * @param {number} pos 位置
 */
let moveDown = (state, pos) => {
    if (state[pos] === '2') return state[pos + 4] === '0' &&
        state.split('').swap(pos, pos + 4).join('');
    else if (state[pos] === '3') return state[pos + 8] === '0' &&
        state.split('').swap([pos + 4, pos], [pos + 8, pos + 4]).join('');
    else if (state[pos] === '4') return state[pos + 4] === '0' && state[pos + 5] === '0' &&
        state.split('').swap([pos, pos + 1], [pos + 4, pos + 5]).join('');
    else if (state[pos] === '5') return state[pos + 8] === '0' && state[pos + 9] === '0' &&
        state.split('').swap([pos + 4, pos + 5, pos, pos + 1], [pos + 8, pos + 9, pos + 4, pos + 5]).join('');
    return false;
}

/**
 * pos 位置的棋子向左移动，返回移动后的棋盘状态
 * @param {string} state 棋盘状态
 * @param {number} pos 位置
 */
let moveLeft = (state, pos) => {
    if (state[pos] === '2') return state[pos - 1] === '0' && pos % 4 &&
        state.split('').swap(pos, pos - 1).join('');
    else if (state[pos] === '3') return state[pos - 1] === '0' && state[pos + 3] === '0' && pos % 4 &&
        state.split('').swap([pos, pos + 4], [pos - 1, pos + 3]).join('');
    else if (state[pos] === '4') return state[pos - 1] === '0' && pos % 4 &&
        state.split('').swap([pos, pos + 1], [pos - 1, pos]).join('');
    else if (state[pos] === '5') return state[pos - 1] === '0' && state[pos + 3] === '0' && pos % 4 &&
        state.split('').swap([pos, pos + 4, pos + 1, pos + 5], [pos - 1, pos + 3, pos, pos + 4]).join('');
    return false;
}

/**
 * pos 位置的棋子向右移动，返回移动后的棋盘状态
 * @param {string} state 棋盘状态
 * @param {number} pos 位置
 */
let moveRight = (state, pos) => {
    if (state[pos] === '2') return state[pos + 1] === '0' && (pos + 1) % 4 &&
        state.split('').swap(pos, pos + 1).join('');
    else if (state[pos] === '3') return state[pos + 1] === '0' && state[pos + 5] === '0' && (pos + 1) % 4 &&
        state.split('').swap([pos, pos + 4], [pos + 1, pos + 5]).join('');
    else if (state[pos] === '4') return state[pos + 2] === '0' && (pos + 2) % 4 &&
        state.split('').swap([pos + 1, pos], [pos + 2, pos + 1]).join('');
    else if (state[pos] === '5') return state[pos + 2] === '0' && state[pos + 6] === '0' && (pos + 2) % 4 &&
        state.split('').swap([pos + 1, pos + 5, pos, pos + 4], [pos + 2, pos + 6, pos + 1, pos + 5]).join('');
    return false;
}

/**
 * 使用 Array 实现的队列，本以为 Array 做队列可能会影响性能，
 * 实际尝试发现没啥影响，主要是由于棋盘状态数太少了，一般不到十万
 */
class Queue extends Array {
    constructor(size) {
        super();
        this.front = this.tail = 0;
        this.fullFlag = false;
        this.size = size || 1048576;
    }

    push (data) {
        if (this.fullFlag)
            throw new Error('Can not push a value into a full queue!');
        this[this.tail++] = data;
        this.tail === this.size && (this.tail = 0);
        this.tail === this.front && (this.fullFlag = true);
        return 1;
    }

    shift () {
        if (this.front === this.tail && !this.fullFlag)
            throw new Error('Can not shift a value from a empty queue!');
        let ret = this[this.front++];
        this.front === this.size && (this.front = 0)
        this.fullFlag && (this.fullFlag = false);
        return ret;
    }

    empty () {
        return !this.fullFlag && this.front === this.tail;
    }
}

/**
 * pos 位置的棋子向右移动，返回移动后的棋盘状态
 * @param {string} state 棋盘状态
 * @param {number} pos 位置
 */
let getSolve = function (state) {
    let que = [state], vst = {[state]: 1}, result = [];
    
    while(que.length) {
        let cur = que.shift(), res = false;

        if (cur[13] === '5') {
            for(; cur !== 1; cur = vst[cur])
                result.push(cur);
            result.pop();
            break;
        }

        for(let i = 0; i < cur.length; i++) {
            (res = moveUp(cur, i)) && !vst[res] && que.push(res) && (vst[res] = cur);
            (res = moveDown(cur, i)) && !vst[res] && que.push(res) && (vst[res] = cur);
            (res = moveLeft(cur, i)) && !vst[res] && que.push(res) && (vst[res] = cur);
            (res = moveRight(cur, i)) && !vst[res] && que.push(res) && (vst[res] = cur);
        }
    }
    return result;
}

export default {
    moveUp, moveDown, moveLeft, moveRight, getSolve
}

/*

// 部分测试数据

// 十八步
22222512211222222002

// 横刀立马
35131111341312212002

// 罂粟
35131111241222222002


*/