menuListArray = ["Pizza de calabresa","pizza 4 queijos","pizza Marguerita ","pizza Muçarela","pizza Creme de avelã com frutas"//adicionar mais itens
                    ];

function addItem(){
var htmldata;
var img="<img id='im1' src='pizzaImg.png'>";
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=" ";
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+img+menuListArray[i]+"<br>";

    
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;

//Completar o código
}

function getMenu(){
    var htmldata;
    
   
    menuListArray.sort();
    htmldata=" ";
    for(var i=0;i<menuListArray.length;i++){
        htmldata=htmldata+menuListArray[i]+"<br>";
    
        
    }
    document.getElementById("displayMenu").innerHTML=htmldata;

}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
//Completar o código
}