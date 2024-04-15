const milestonesData = JSON.parse(data).data;
const milestoneArea = document.querySelector(".course-milestones");




function LoadMilestone(){
    milestoneArea.innerHTML = `${milestonesData.map((milestone)=>{
        return ` <div class="milestone" id="${milestone._id}">
        <div class="flex">
            <div class="checkbox"> <input type="checkbox" onclick="donemilestone(this, ${milestone._id} )"></div>
            <div onclick="openmilestone(this, ${milestone._id} )" style="margin-left: 10px;">
                <p>
                   ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>    
        </div>
    
        <div class="hidden_panel ">
            ${milestone.modules.map((module)=>{
                return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
            }).join("")}
          </div>
    </div>`;


    }).join("")}`
}


function openmilestone(clickedMilestone , id){
    let openmodule = clickedMilestone.parentNode.nextElementSibling;
    let openedModule= document.querySelector(".showmodule");
    let activeelement = document.querySelector(".active");


    if(activeelement && !clickedMilestone.classList.contains("active")){
        activeelement.classList.remove("active");

    }
        clickedMilestone.classList.toggle("active");




   if(!openmodule.classList.contains("showmodule") && openedModule){
    openedModule.classList.remove("showmodule");
   }
    openmodule.classList.toggle("showmodule");
 


    showModuleDetails(id);

}

function showModuleDetails(id){
    let MilestoneImage = document.querySelector(".MilestoneImage");
    let MilestoneTitle = document.querySelector(".title");
    let MilestoneDescription = document.querySelector(".description");

    MilestoneImage.src = milestonesData[id].image;
    MilestoneTitle.innerHTML = milestonesData[id].name;
    MilestoneDescription.innerHTML = milestonesData[id].description;
    MilestoneImage.style.opacity = "0";


}
let MilestoneImage = document.querySelector(".MilestoneImage");
MilestoneImage.onload = function(){
    MilestoneImage.style.opacity = "1";
}

function donemilestone(donemilestone, id ){
    let Donelist = document.querySelector(".donelist");
    let  MilestoneList = document.querySelector(".course-milestones");
    let  item = document.getElementById(id);
    if(donemilestone.checked){
        MilestoneList.removeChild(item);
        Donelist.appendChild(item);
        reloadDoneList(Donelist);

    }else{
        MilestoneList.appendChild(item);
        // Donelist.removeChild(item);
        reloadMilestone(MilestoneList);
    }

    function reloadMilestone(milestoneList) {

        const elements = milestoneList.children;
        const elementsArray = Array.from(elements);
        console.log(elementsArray);
    
       elementsArray.sort(function (a, b) {
          return Number(a.id) - Number(b.id);
        }).forEach(function (element) {
            milestoneList.appendChild(element);
        });
    }

    function reloadDoneList(Donelist) {

        const elements = Donelist.children;
        const elementsArray = Array.from(elements);
        console.log(elementsArray);
    
       elementsArray.sort(function (a, b) {
          return Number(a.id) - Number(b.id);
        }).forEach(function (element) {
            Donelist.appendChild(element);
        });
    }
    
    let CompleteTitle = document.querySelector(".complete_title")

    if(!Donelist.children.length == 0){
        CompleteTitle.style.display = "inline-block"
    }


    // let allchild = MilestoneList.childNodes;
    // var arrItem = Array.from(allchild);
  
    //       arrItem.sort(function (a, b) {
              
    //           var aId = parseInt(a.id);
    //           var bId = parseInt(b.id);
  
    //           return aId - bId;
              
    //       }).forEach(function (logsss) {
    //         MilestoneList.appendChild(logsss);
    //       })

    

}

    
let CompleteTitle = document.querySelector(".complete_title");
CompleteTitle.style.display = "none";

console.log(milestonesData);
LoadMilestone();
