
      function goPart(partNo) {
        const target =
          document.getElementById("part-title-" + partNo) ||
          document.querySelector('.slide[data-part="' + partNo + '"]');
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      function toggleNotes() {
        document.body.classList.toggle("show-notes");
        document.querySelectorAll(".note").forEach((n) => {
          n.style.display = document.body.classList.contains("show-notes")
            ? "block"
            : "none";
        });
      }
      document
        .querySelectorAll(".note")
        .forEach((n) => (n.style.display = "none"));
    

      (function () {
        document.addEventListener("keydown", function (e) {
          if (
            (e.key || "").toLowerCase() === "n" &&
            !/input|textarea/i.test(document.activeElement?.tagName || "")
          ) {
            document.body.classList.toggle("show-notes");
          }
        });
        const buttons = [...document.querySelectorAll(".toc-item")];
        const targets = [...document.querySelectorAll(".part-divider")];
        if ("IntersectionObserver" in window) {
          const io = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const p = entry.target.getAttribute("data-part-title");
                buttons.forEach((b, i) =>
                  b.classList.toggle("active", String(i) === String(p)),
                );
              });
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
          );
          targets.forEach((t) => io.observe(t));
        }
      })();
    