var settings=document.querySelector(".settings-menu");
var img = document.querySelector(".left");
function openSettings(){
    event.preventDefault();
    settings.classList.toggle("open-menu");
}
var dark=document.getElementById("dark_btn");
dark.onclick=function(){
    dark.classList.toggle("dark_btn_on");
    document.body.classList.toggle("dark-theme");
}




const likeButtons = document.querySelectorAll('.like-btn');
    const likeCounts = document.querySelectorAll('.like-count');
    
    likeButtons.forEach((button, index) => {
      let count = parseInt(likeCounts[index].textContent);
      let isLiked = false;
      
      button.addEventListener('click', function() {
        if (!isLiked) {
          count++;
          isLiked = true;
        } else {
          count--;
          isLiked = false;
        }
        
        likeCounts[index].textContent = count;
      });
    });