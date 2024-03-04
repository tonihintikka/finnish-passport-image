let cropper;
const imageInput = document.getElementById('imageInput');
const image = document.getElementById('image');
const cropBtn = document.getElementById('cropBtn');
const downloadBtn = document.getElementById('downloadBtn');
//Listen for file input
document.getElementById('imageInput').addEventListener('change', function(event) {
const files = event.target.files;
if (!files || !files.length) {
  return;
}
const file = files[0];

// Check if the file is HEIC and convert it to JPEG
if (file.type === "image/heic" || file.name.endsWith('.heic')) {
  heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.8 // Image quality (0 to 1)
  })
  .then(function (convertedBlob) {
    // Use the converted blob with Cropper.js
    initializeCropper(URL.createObjectURL(convertedBlob));
  })
  .catch(function (error) {
    console.error(error);
  });
} else {
  // Use the original blob with Cropper.js if it's not HEIC
  initializeCropper(URL.createObjectURL(file));
}
});

function initializeCropper(imageSrc) {
image.src = imageSrc;
image.style.display = 'block'; // Show the image element
if (cropper) {
  cropper.destroy();
}
cropper = new Cropper(image, {
  aspectRatio: 36 / 47, // Passport photo aspect ratio
  viewMode: 1,
  dragMode: 'move',
  autoCropArea: 1,
  restore: false,
  modal: false,
  guides: false,
  highlight: false,
  cropBoxMovable: false,
  cropBoxResizable: false,
  toggleDragModeOnDblclick: false,
  zoomOnWheel: true,
  ready: function() {
    // this will be called when the cropper is ready
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block'; // show the overlay with helping guides

    // adjust the overlay size and position using the cropper's methods
    var canvasData = cropper.getCanvasData();
    overlay.style.width = `${canvasData.width}px`;
    overlay.style.height = `${canvasData.height}px`;
    overlay.style.left = `${canvasData.left}px`;
    overlay.style.top = `${canvasData.top +25}px`;
    overlay.style.zIndex = '10'; // check that overlay is on top of the cropper
  }
});
cropBtn.style.display = 'block';
}




cropBtn.addEventListener('click', function() {
  const canvas = cropper.getCroppedCanvas({
    width: 500, 
    height: 653, 
  });
  canvas.toBlob(function(blob) {
      // Define 'now' inside the function where it's used
      const now = new Date();
      const timestamp = now.getFullYear().toString() +
                        (now.getMonth() + 1).toString().padStart(2, '0') +
                        now.getDate().toString().padStart(2, '0') + '_' +
                        now.getHours().toString().padStart(2, '0') +
                        now.getMinutes().toString().padStart(2, '0') +
                        now.getSeconds().toString().padStart(2, '0');
      const filename = `croppedImage_${timestamp}.png`; // Append the timestamp to the filename
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;  
    link.click();
    URL.revokeObjectURL(link.href);
  }, 'image/png');
});