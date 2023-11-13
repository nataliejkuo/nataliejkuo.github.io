document.addEventListener('DOMContentLoaded', function() {
  var textWrapper = document.querySelector('.opener');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: '.opener .letter',
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i + 1)
    });
});


document.addEventListener('DOMContentLoaded', function() {
  var fadeInImage = document.getElementById('profile');
  fadeInImage.style.opacity = 1; 
});

document.addEventListener('DOMContentLoaded', function() {
  var fadeInImage = document.getElementById('project-fade');
  fadeInImage.style.opacity = 1; 
})
