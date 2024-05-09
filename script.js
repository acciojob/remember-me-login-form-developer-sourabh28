//your JS code here. If required.
function saveData() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function () {
	if (checkbox.checked) {
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}
	else {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	alert(`Logged in as ${username}`);
});
	if (localStorage.getItem('username') && localStorage.getItem('password')) {
		var existingBtn = document.createElement('button');
		existingBtn.id = 'existing';
		existingBtn.textContent = 'Login as existing user';
		document.body.appendChild(existingBtn);

		existingBtn.addEventListener('click', function(){
			alert(`Logged in as ${localStorage.getItem('username')}`)
		})
	}
}
document.addEventListener('DOMContentLoaded', saveData);