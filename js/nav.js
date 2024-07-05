const navW = (() => {
  function sidebarActivity() {
    const ham = document.querySelector("nav > .ham");
    const sidebar = document.querySelector(".sidebar");
    const ham_close = document.querySelector(".ham.closed");

    ham.addEventListener("click", () => {
      sidebar.classList.add("active");
    });
    ham_close.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  }
  sidebarActivity();
})();

export default navW;
