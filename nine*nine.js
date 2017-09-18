/**
 * 2017-9-18 Xu JiXin
 */
console.log('\t1\t2\t3\t4\t5\t6\t7\t8\t9\t');
for(var a = 1; a <= 9; a ++) {
    var arr = [];
    for(var b = 1; b <= a; b ++){
        arr = arr + `${a * b}\t`;
    }
    arr = `${a}\t` + arr;
    console.log(arr);
}

/*for(var c = 1; c <= 9; c ++){
    var line = ''
    for(var d = 1; d <= c; d ++){
        line = line + `${c * d}\t`;
    }
    console.log(line);
}*/

