<script>
  function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  // Optional: close dropdown when clicking outside
  window.addEventListener("click", function(e) {
    const btn = document.querySelector(".dropbtn");
    const menu = document.getElementById("dropdownMenu");
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
</script>
