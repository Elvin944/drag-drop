let item= document.querySelector(".item");
let item1= document.querySelector(".item1");
let item2= document.querySelector(".item2");
let item3= document.querySelector(".item3");
let dragArea= document.querySelector(".area");
let dragItem;



item.ondragstart=function () {
    dragItem=this;
};
dragArea.ondragover=function (e) {
    e.preventDefault();
};
dragArea.ondrop=function () {
    this.appendChild(dragItem);
};



item1.ondragstart=function () {
    dragItem=this;
};
dragArea.ondragover=function (e) {
    e.preventDefault();
};
dragArea.ondrop=function () {
    this.appendChild(dragItem);
};



item2.ondragstart=function () {
    dragItem=this;
};
dragArea.ondragover=function (e) {
    e.preventDefault();
};
dragArea.ondrop=function () {
    this.appendChild(dragItem);
};



item3.ondragstart=function () {
    dragItem=this;
};
dragArea.ondragover=function (e) {
    e.preventDefault();
};
dragArea.ondrop=function () {
    this.appendChild(dragItem);
};




let item4= document.querySelector(".item4");
let item5= document.querySelector(".item5");
let item6= document.querySelector(".item6");
let item7= document.querySelector(".item7");
let dragA= document.querySelector(".area1");
let dItem;

item4.ondragstart=function () {
    dItem=this;
};
dragA.ondragover=function (ele) {
    ele.preventDefault();
};
dragA.ondrop=function () {
    this.appendChild(dItem);
};


item5.ondragstart=function () {
    dItem=this;
};
dragA.ondragover=function (ele) {
    ele.preventDefault();
};
dragA.ondrop=function () {
    this.appendChild(dItem);
};


item6.ondragstart=function () {
    dItem=this;
};
dragA.ondragover=function (ele) {
    ele.preventDefault();
};
dragA.ondrop=function () {
    this.appendChild(dItem);
};


item7.ondragstart=function () {
    dItem=this;
};
dragA.ondragover=function (ele) {
    ele.preventDefault();
};
dragA.ondrop=function () {
    this.appendChild(dItem);
};


// item.ondragstart=function(){
//     console.log("start");
// };

// item.ondragend=function(){
//     console.log("end");
// };

// item.ondrag=function () {
//     console.log("contunue");
// };
// dragArea.ondragenter=function () {
//     console.log("enter");
// };
// dragArea.ondragleave=function () {
//     console.log("leave");
// };
// dragArea.ondragover=function () {
//     console.log("over continue");
// };
// dragArea.ondrop=function () {
//     console.log("drop");
// }
