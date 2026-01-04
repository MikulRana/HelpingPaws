// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function closeMenu() {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}
function openMenu() {
  navMenu.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.contains("open");
  isOpen ? closeMenu() : openMenu();
});

navMenu?.addEventListener("click", (e) => {
  const t = e.target;
  if (t && t.tagName === "A") closeMenu();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fake send message button (demo)
document.getElementById("fakeSendBtn")?.addEventListener("click", () => {
  alert("Demo: This form doesn't send yet. Connect a form service or embed a Google Form.");
});

// Custom donation amount (demo)
const customAmount = document.getElementById("customAmount");
const customDonateBtn = document.getElementById("customDonateBtn");

customDonateBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const amt = Number(customAmount?.value || 0);
  if (!amt || amt < 1) {
    alert("Please enter a valid donation amount.");
    return;
  }
  alert(`Demo: You selected a $${amt} donation. Update donation links to your payment provider.`);
});

// Modal for "learn more"
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const modalCopy = {
  wheelchairs: {
    title: "Mobility Wheelchairs",
    text:
      "Custom-fit mobility carts for rear or front limb weakness. Designed for comfort, stability, and safe outdoor use. We work with your vet to ensure the best fit.",
  },
  prosthetics: {
    title: "Prosthetic Limbs",
    text:
      "Custom prosthetics and orthotics to support amputations or limb deformities. Built for durability and tailored gait support, with adjustments as your dog adapts.",
  },
  harnesses: {
    title: "Support Harnesses",
    text:
      "Support harnesses and slings for recovery, rehabilitation, and daily mobility assistance. Great for seniors, post-op recovery, and dogs building strength again.",
  },
};

function openModal(key) {
  const data = modalCopy[key];
  if (!data) return;
  modalTitle.textContent = data.title;
  modalText.textContent = data.text;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("mouseenter", () => openModal(btn.dataset.modal));
  btn.addEventListener("focus", () => openModal(btn.dataset.modal));
  btn.addEventListener("click", () => openModal(btn.dataset.modal));
});

// Close modal
document.getElementById("modalClose")?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  const t = e.target;
  if (t?.dataset?.close === "true") closeModal();
});

// ESC closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    closeModal();
  }
});
