
function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString('en-US');
  document.getElementById('date').textContent = now.toLocaleDateString('en-US');
}
setInterval(updateTime, 1000);
updateTime();

function activateWeapon(type) {
  document.getElementById("hud").style.display = "none";
  document.getElementById("target-screen").style.display = "block";
  console.log("Weapon activated:", type);
}

function exitTargetScreen() {
  document.getElementById("target-screen").style.display = "none";
  document.getElementById("hud").style.display = "block";
}
