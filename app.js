var tablinks=document.getElementsByClassName('tabs_link');

var experts =document.getElementsByClassName('expert');

function openTab(tabName){

for(tablink of tablinks){
  tablink.classList.remove("active_link")
}
for(expert  of experts){
      expert.classList.remove("active_data")
}

}