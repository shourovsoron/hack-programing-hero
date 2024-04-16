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


    MilestoneImage.onload = function(){
        MilestoneImage.style.opacity = "1";
    }
}

function donemilestone(donemilestone, id ){
    let Donelist = document.querySelector(".donelist"); //Get DoneList Container
    let  MilestoneList = document.querySelector(".course-milestones"); //Get Milestone List Conatiner
    let  item = document.getElementById(id);
    if(donemilestone.checked){
        MilestoneList.removeChild(item);
        Donelist.appendChild(item);
        reloadMilestone(Donelist);

    }else{
        MilestoneList.appendChild(item);
        reloadMilestone(MilestoneList);
    }

    function reloadMilestone(milestoneList) {

        const elements = milestoneList.children;
        const elementsArray = Array.from(elements);
    
       elementsArray.sort(function (a, b) {
          return Number(a.id) - Number(b.id);
        }).forEach(function (element) {
            milestoneList.appendChild(element);
        });


        hideCompleteTitle();
    }
    

    function hideCompleteTitle(){
        let CompleteTitle = document.querySelector(".complete_title")

        if(Donelist.children.length == 0){
            CompleteTitle.style.display = "none"
        }else{
            CompleteTitle.style.display = "inline-block"
        }
    }

}

    
let CompleteTitle = document.querySelector(".complete_title");
CompleteTitle.style.display = "none";
LoadMilestone();
