document.addEventListener('DOMContentLoaded', function(event) {
  var thumbnailElement = document.getElementById('smart_thumbnail');
  thumbnailElement.addEventListener('click', function() {
    thumbnailElement.className === 'small'
      ? (thumbnailElement.className = '')
      : (thumbnailElement.className = 'small');
  });
});
