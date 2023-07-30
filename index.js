function ref(){

    if(localStorage.getItem('ItemsJson') == null){
        arr = [];
        localStorage.setItem('ItemsJson',JSON.stringify(arr));
    }
    else{
        str = localStorage.getItem('ItemsJson');
        arr = JSON.parse(str);
    }
  

    
    str = "";
        arr.forEach((element,index) => {
            str += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class = "rem-btn" onclick="remo(${index})">Remove</button></td>
            </tr>
            `
        });
    document.getElementById("tbl-body").innerHTML = str;

}


function update(){
     //store data in localStorage
     var task = document.getElementsByClassName("bdy1")[0].value;
     var desc = document.getElementsByClassName("bdy2")[0].value;


        if(localStorage.getItem('ItemsJson') == null){
            arr = [];
            arr.push([task,desc]);
            localStorage.setItem('ItemsJson',JSON.stringify(arr));
        }
        else{
            str = localStorage.getItem('ItemsJson');
            arr = JSON.parse(str);
            arr.push([task,desc]);
            localStorage.setItem('ItemsJson', JSON.stringify(arr));
        }
    
        //populate
        str = "";
        arr.forEach((element,index) => {
            str += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class = "rem-btn" onclick="remo(${index})">Remove</button></td>
            </tr>
            `
        });
        document.getElementById("tbl-body").innerHTML = str;
}
document.getElementById("add").addEventListener('click',()=>{
    var task = document.getElementsByClassName("bdy1")[0].value;
    var desc = document.getElementsByClassName("bdy2")[0].value;

    if(task.length!=0 && desc.length != 0){
        update();
    }
});

function Clr(){
    document.getElementsByClassName("bdy1")[0].value = null;
    document.getElementsByClassName("bdy2")[0].value = null;

    localStorage.clear();
    ref();
}

function remo(index){
    str = localStorage.getItem('ItemsJson');
    arr = JSON.parse(str);
    arr.splice(index,1);
    localStorage.setItem('ItemsJson',JSON.stringify(arr));
    ref();
    
}



ref();
