const selector = document.querySelector('#cities');

const imgContainer = document.querySelector('.image-container');

const img = document.createElement('img');

imgContainer.appendChild(img);

function changeCity() {
  let imgLink = '';

  if (selector.value === 'madrid') {
    img.setAttribute(
      'src',
      'https://canelapr.com/wp-content/uploads/2016/10/madrid-bike-tour-768x480.jpg'
    );
  } else if (selector.value === 'paris') {
    img.setAttribute(
      'src',
      'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900'
    );
  } else if (selector.value === 'NY') {
    img.setAttribute(
      'src',
      'https://www.economist.com/sites/default/files/images/print-edition/20200613_FBP001_0.jpg'
    );
  } else {
    img.setAttribute('src', '');
  }
}

selector.addEventListener('change', changeCity);
