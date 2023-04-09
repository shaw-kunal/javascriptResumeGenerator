


const addNewField = () => {
    console.log("enter you chacha name");

    // first create the new node with attribute
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 2)
    newNode.style.marginTop = "3px";
    newNode.setAttribute("placeholder", "enter here")


    let weOb = document.querySelector(".we");
    let weAddButtonOb = document.querySelector("#weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);



}

const AddNewAQField = () => {
    console.log("arre oh chacha");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 2)
    newNode.style.marginTop = "3px";
    newNode.setAttribute("placeholder", "enter here")

    let AcedemicObj = document.querySelector(".acedemicRoot");
    let aQAddButttonObj = document.querySelector("#aqAddButton");

    AcedemicObj.insertBefore(newNode, aQAddButttonObj);

}

// generating cv
const generateCV = () => {
    let nameField = document.getElementById("nameField").value;
    console.log(nameField)
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    //   dom manipulatation for contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    // manipulate address
    document.getElementById("addressT").innerHTML = document.getElementById('AddressField').value;

    //manipulate link
    document.getElementById("fbT").innerHTML = document.getElementById("facebookField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("InstaGramField").value;
    document.getElementById("linkT").innerHTML = document.getElementById("LInkedInField").value;

    // set objective 
    console.log(document.getElementById("objectiveField").value + " kunal");
    console.log("no")
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;


    // work experience field
    let wes = document.getElementsByClassName("weField");
    console.log(wes.length)
    let str1 = '';
    for (let e of wes) {
        str1 += `<li> ${e.value}</li>`;
    }
    document.getElementById("workexperiecenT").innerHTML = str1;
    console.log(wes);

    // work  acedemic qualification 

    let aqs = document.getElementsByClassName("eqField");
    let str2 = '';
    for (let e of aqs) {
        str2 += `<li> ${e.value}</li>`;
    }

    document.getElementById("acdemicQualificationT").innerHTML = str2;

    //code for setting img
    let file = document.querySelector("#imageField").files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        console.log(reader.result);
        document.getElementById("imgTemplate").setAttribute("src", reader.result);
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}
const printCV = () => {
    document.getElementById("printbtn").style.display = "none";
    window.print();
    document.getElementById("printbtn").style.display = "block";
}


