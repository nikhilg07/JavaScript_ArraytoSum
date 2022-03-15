

// ------------- helper function -------------------

const __displayOnScreen = (value) => {
  const valueBeautify = JSON.stringify(value, undefined, 2);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h1><pre>${valueBeautify}</pre></h1>`;
};

// ----------- end helper function -------------------

const myArray = [[7, 12], 8, [5, [3, 10], [4, 2]], 3, [1, [2]]];


function helper(arr , multiplier){
    const val = arr.reduce(function reducer(acc,ele){
        if( typeof(ele)== "object"){
            const temp= helper(ele,multiplier+1);
            acc+=temp;
            return acc;
        }
        else{
            acc+=multiplier*ele;
            return acc;
        }

    },0)

    return val;
}


const calculateNestedSum = (arr) => {
  
  // 7*2+12*2 + 8*1 + 5*2+ 3*3 + 10*3, ......./
  const ans=helper(arr,1);
  console.log(ans);

};




const result = calculateNestedSum(myArray);
__displayOnScreen(result);

// create new Repo (JavascriptLearning)
// new branch Day1
// two assignment inside 2 folder

// coopy js, css , html to ur local vscode

// [
//     [
//         7,
//         12
//     ],
//     8,
//     [
//         5,
//         [
//             3,
//             10
//         ],
//         [
//             4,
//             2
//         ]
//     ],
//     3,
//     [
//         1,
//         [
//             2
//         ]
//     ]
// ]