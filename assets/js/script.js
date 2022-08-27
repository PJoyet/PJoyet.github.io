function calculateAge() 
{
  const birthday = new Date(1996, 4, 16);
  const now = new Date();
  const diff = Math.abs(now - birthday );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  document.getElementById('age').innerHTML = age + " ans (16 mai 1996)";
  return age
}

window.onload = function() {
  calculateAge();
};


function showmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lire plus";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lire moins";
    moreText.style.display = "inline";
  }
} 