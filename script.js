document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  // Typewriter effect
  const texts = [
    "Joki Tugas Cepat & Akurat",
    "Bebas Deadline & Stress",
    "Skripsi Auto ACC",
    "Nilai Memuaskan Tanpa Ribet",
  ];
  let idx = 0,
    charIndex = 0;
  let currentText = "";
  const typewriterEl = document.getElementById("typewriter");
  function typeWriter() {
    if (charIndex < texts[idx].length) {
      currentText += texts[idx].charAt(charIndex);
      typewriterEl.innerHTML = currentText;
      charIndex++;
      setTimeout(typeWriter, 80);
    } else {
      setTimeout(() => {
        charIndex = 0;
        currentText = "";
        idx = (idx + 1) % texts.length;
        typeWriter();
      }, 2500);
    }
  }
  typeWriter();

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // Counter animation
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"));
          let current = 0;
          const increment = target / 45;
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              el.innerText = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              el.innerText = target;
            }
          };
          updateCounter();
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((c) => counterObserver.observe(c));

  // WA function
  function pesanWA(jasa) {
    const phoneNumber = window.WHATSAPP_NUMBER || "6287701330823";
    const message = `Halo admin GasJoki! Saya tertarik dengan layanan *${jasa}* dari GasJoki.id. Mohon infonya lebih lanjut ya kak. Terima kasih.`;
    const encoded = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`,
      "_blank",
    );
  }

  function scrollToLayanan() {
    document.getElementById("layanan").scrollIntoView({ behavior: "smooth" });
  }

  const floatBtn = document.getElementById("floatingWaBtn");
  floatBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pesanWA("Konsultasi");
  });
  const footerWa = document.getElementById("waFooterLink");
  if (footerWa)
    footerWa.addEventListener("click", (e) => {
      e.preventDefault();
      pesanWA("Via Footer");
    });

  window.pesanWA = pesanWA;
  window.scrollToLayanan = scrollToLayanan;

  // Navbar background
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("bg-slate-900/90");
    } else {
      nav.classList.remove("bg-slate-900/90");
    }
  });
});
