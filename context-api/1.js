var arr = [1,2,4,6,0,2];

function closet(arr) {
    if(arr.length < 1) {
        console.log("no one");
    }
    var left = 0; 
    var rigth = 1;
    var sum = 0;
    var minsum = arr[0] + arr[1];

    for(var i = 0; i < arr.length; i++) {
        for(var j = i+1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if(Math.abs(minsum) > Math.abs(sum)) {
                minsum =sum;
                left = i;
                rigth = j;
            }
        }
    }
    console.log(arr[left], arr[rigth]);
 }



 var arr = [1,2,4,6,0,2];
 let n = arr.length;
 

function findMinSum(arr, n) {
	for(let i = 1; i < n; i++){
		if (!(Math.abs(arr[i - 1]) < Math.abs(arr[i])))	{
			let temp = arr[i - 1];
			arr[i - 1] = arr[i];
			arr[i] = temp;
		}
	}
	let min = Number.MAX_VALUE;
	let x = 0, y = 0;

	for(let i = 1; i < n; i++) {
if (Math.abs(arr[i - 1] + arr[i]) <= min)	{
			
min = Math.abs(arr[i - 1] + arr[i]);
x = i - 1;
y = i;
	}
	}
console.log(arr[x])
		
}

findMinSum(arr, n);




var str = "abcd";
str.split("");
var out = "";
for(var i = str.length-1; i >=0; i--) {
    out = out + str[i];
}
console.log(out);