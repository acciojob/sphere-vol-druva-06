function volume_sphere() {
  event.preventDefault();

  // Get the value of the radius from the input field
  const radius = parseFloat(document.getElementById("radius").value);

  // Check if the radius is a valid number
  // if (isNaN(radius)) {
  //   alert("Please enter a valid number for the radius.");
  //   return;
  // }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the result div
  document.getElementById("volume").value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;