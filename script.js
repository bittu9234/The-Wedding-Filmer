function showSection(sectionId) {
  // all sections hide 
  document.querySelectorAll(".content-section").forEach(sec => {
    sec.classList.remove("active");
  });

  // only show  clicked 
  document.getElementById(sectionId).classList.add("active");
}
//buttons
const menuBtns = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('.slider-section');
// button active
menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});


document.querySelector('.view-more-btn').addEventListener('click', function() {
  alert('View More button clicked!');
});

