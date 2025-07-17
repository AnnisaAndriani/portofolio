    <script>
      // JavaScript untuk Filter Galeri (Opsional)
      document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const galleryItems = document.querySelectorAll(".gallery-item");

        filterButtons.forEach((button) => {
          button.addEventListener("click", function () {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.dataset.filter;

            galleryItems.forEach((item) => {
              if (filter === "all" || item.dataset.category === filter) {
                item.style.display = "block"; // Tampilkan item
              } else {
                item.style.display = "none"; // Sembunyikan item
              }
            });
          });
        });
      });
    </script>