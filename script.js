function volume_sphere() {
	const myForm = document.getElementById('MyForm')

	myForm.addEventListener('submit',(event)=>{
		const radius = document.getElementById('radius').value
		const volume = document.getElementById('volume')
		volume.value = (4/3)*(3.14)*(Math.pow(radius,3))
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;