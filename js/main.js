const milestonesData = JSON.parse(data).data;
const milestoneArea = document.querySelector(".course-milestones");




function LoadMilestone(){
    milestoneArea.innerHTML = `${milestonesData.map((milestone)=>{
        return ` <div class="milestone">
        <div class="flex">
            <div class="checkbox"> <input type="checkbox"></div>
            <div onclick="openmilestone(this)" style="margin-left: 10px;">
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

console.log(milestonesData);
LoadMilestone();


function openmilestone(clickedMilestone){
    let openmodule = clickedMilestone.parentNode.nextElementSibling;
    let openedModule= document.querySelector(".showmodule");

   if(!openmodule.classList.contains("showmodule") && openedModule){
    openedModule.classList.remove("showmodule");
   }
    openmodule.classList.toggle("showmodule");
 


}