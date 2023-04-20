console.log("sam");

document.querySelector(".cross").style.display = "none";
document.querySelector(".humburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");

  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".menu").style.display = "inline";
  } else {
    document.querySelector(".menu").style.display = "none";
    setTimeout(() => {
        document.querySelector(".cross").style.display = "inline";
    },300);
  }
});
