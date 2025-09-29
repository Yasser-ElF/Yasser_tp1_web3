function toggleRatings() {
  const ratings = document.getElementById('detailed-ratings');
  if (ratings.style.display === 'none') {
    ratings.style.display = 'block';
  } else {
    ratings.style.display = 'none';
  }
}

// petit effet de scroll smooth fait maison
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
