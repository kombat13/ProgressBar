button1.onclick = function () {
    console.log("+ 1%");
    changebar(1);
};
button3.onclick = function () {
    console.log("+ 3%");
    changebar(3);
};
button7.onclick = function () {
    console.log("+ 7%");
    changebar(7);
};


function changebar(addprocent) {
    let obj = {}
    obj = document.getElementById("myprogressbar").style.width;
    let curprocent = 0
    curprocent = Number(obj.slice(0, obj.length - 1)) + addprocent
    if (curprocent <= 100) {
    } else {
        curprocent = 100
    }
    newprocent = curprocent + "%";
    console.log('= ' + newprocent);
    let message = `
          <div name="MyProgresBar" id="myprogressbar" class="progress-bar progress-bar-striped bg-success"
            role="progressbar" style="width: ` + newprocent + `;">
          </div>
    `
    $("div#result").html(message);
}



function init() {
    console.log("скрипт подгрузился");
}


$(document).ready(init);
