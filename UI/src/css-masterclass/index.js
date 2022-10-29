// console.log("hare krishna");

const toastBtn = document.getElementById("toast-btn");
const toast = document.getElementById("toast-bar");

function toggleToast() {
	toast.classList.toggle("toggle-toast");
}

toastBtn.addEventListener("click", function () {
	toggleToast();
	setTimeout(() => {
		toggleToast();
	}, 3000);
});
