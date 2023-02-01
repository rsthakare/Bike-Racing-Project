// m = 0;
// var x;

// function start() {
//     x = setInterval(start, 100);

//     function start() {


//         if (m == 1200) {
//             clearInterval(x);
//             m = 0;
//         } else {
//             m = m + 5;
//             var x = document.getElementById("btn").value;
//             x.style.marginright = m + '10px';
//             x.style.marginrightt = '10px';
//             SSE
//         }
//     }

// }

// function stop() {
//     clearInterval(x)
// }

// setInterval(run, 100);
// m = 0;

// function start() {
// if (m == 1200) {
//             clearInterval(x);
//             m = 0;
//         } else {
//             m = m + 5;
//             var x = document.getElementById("btn").value;
//             x.style.marginright = m + '10px';
//             x.style.marginrightt = '10px';
//             SSE
//         }
//     }
//     m += 5;
//     var inn = document.getElementsByid("line");
//     for (var i in inn) {
//         inn[i].style.marginLeft = 40 + "px";
//     }
// }



m = 0;
var y;

function start() {
    y = setInterval(run, 100);

    function run() {

        if (m == 1200) {
            clearInterval(x);
            m = 0;
        } else {
            m += 10;
            var x = document.getElementById("car");
            x.style.marginLeft = m + 'px';
        }
    }
}

function stop() {
    clearInterval(y)
}