// ---------- DATA: 24 dishes across 6 categories ----------
const dishes = [
  {
    name: "Bruschetta al Pomodoro",
    cat: "starters",
    tag: "Starter",
    icon: "🍅",
    price: "$6",
    desc: "Toasted sourdough, vine tomatoes, basil, aged balsamic.",
  },
  {
    name: "Smoked Salmon Crostini",
    cat: "starters",
    tag: "Starter",
    icon: "🐟",
    price: "$8",
    desc: "Cured salmon, dill crème fraîche, crisp crostini.",
  },
  {
    name: "Charred Corn Fritters",
    cat: "starters",
    tag: "Starter",
    icon: "🌽",
    price: "$7",
    desc: "Sweetcorn fritters with chili lime crema.",
  },
  {
    name: "Spiced Lentil Soup",
    cat: "starters",
    tag: "Starter",
    icon: "🥣",
    price: "$6",
    desc: "Red lentils, cumin, coriander, toasted flatbread.",
  },
  {
    name: "Herb-Crusted Rack of Lamb",
    cat: "grills",
    tag: "Grill",
    icon: "🍖",
    price: "$28",
    desc: "Rosemary crust, red wine jus, roasted garlic.",
  },
  {
    name: "Peri-Peri Chicken Skewers",
    cat: "grills",
    tag: "Grill",
    icon: "🍗",
    price: "$14",
    desc: "Flame-grilled chicken thigh, peri-peri glaze.",
  },
  {
    name: "Charcoal Ribeye Steak",
    cat: "grills",
    tag: "Grill",
    icon: "🥩",
    price: "$32",
    desc: "Dry-aged ribeye, smoked butter, charred shallot.",
  },
  {
    name: "Grilled Prawn Skewers",
    cat: "grills",
    tag: "Grill",
    icon: "🍤",
    price: "$18",
    desc: "Garlic-chili prawns, charred lemon, herb oil.",
  },
  {
    name: "Truffle Mushroom Risotto",
    cat: "mains",
    tag: "Main",
    icon: "🍄",
    price: "$19",
    desc: "Arborio rice, wild mushrooms, shaved truffle, parmesan.",
  },
  {
    name: "Moroccan Lamb Tagine",
    cat: "mains",
    tag: "Main",
    icon: "🍲",
    price: "$24",
    desc: "Slow-braised lamb, apricot, warm spice, couscous.",
  },
  {
    name: "Butter Chicken Curry",
    cat: "mains",
    tag: "Main",
    icon: "🍛",
    price: "$17",
    desc: "Tomato-cream curry, tandoori chicken, basmati rice.",
  },
  {
    name: "Wild Mushroom Wellington",
    cat: "mains",
    tag: "Main",
    icon: "🥧",
    price: "$21",
    desc: "Puff pastry, mushroom duxelles, herb butter (v).",
  },
  {
    name: "Seafood Paella",
    cat: "mains",
    tag: "Main",
    icon: "🦐",
    price: "$26",
    desc: "Saffron rice, prawns, mussels, calamari, chorizo.",
  },
  {
    name: "Garlic Rosemary Potatoes",
    cat: "sides",
    tag: "Side",
    icon: "🥔",
    price: "$5",
    desc: "Crispy roasted potatoes, garlic, rosemary salt.",
  },
  {
    name: "Charred Asparagus",
    cat: "sides",
    tag: "Side",
    icon: "🥦",
    price: "$6",
    desc: "Grilled asparagus, lemon zest, shaved parmesan.",
  },
  {
    name: "Saffron Pilaf Rice",
    cat: "sides",
    tag: "Side",
    icon: "🍚",
    price: "$5",
    desc: "Basmati rice, saffron, toasted almonds, currants.",
  },
  {
    name: "Honey Glazed Carrots",
    cat: "sides",
    tag: "Side",
    icon: "🥕",
    price: "$5",
    desc: "Roasted heirloom carrots, honey-thyme glaze.",
  },
  {
    name: "Dark Chocolate Fondant",
    cat: "desserts",
    tag: "Dessert",
    icon: "🍫",
    price: "$9",
    desc: "Molten chocolate cake, vanilla bean ice cream.",
  },
  {
    name: "Lemon Basil Tart",
    cat: "desserts",
    tag: "Dessert",
    icon: "🍋",
    price: "$8",
    desc: "Buttery tart shell, lemon curd, torched meringue.",
  },
  {
    name: "Pistachio Baklava Cake",
    cat: "desserts",
    tag: "Dessert",
    icon: "🥮",
    price: "$9",
    desc: "Layered cake, pistachio, rosewater syrup.",
  },
  {
    name: "Salted Caramel Panna Cotta",
    cat: "desserts",
    tag: "Dessert",
    icon: "🍮",
    price: "$8",
    desc: "Silky panna cotta, salted caramel, sea salt flake.",
  },
  {
    name: "Hibiscus Ginger Cooler",
    cat: "drinks",
    tag: "Drink",
    icon: "🌺",
    price: "$5",
    desc: "Hibiscus tea, fresh ginger, sparkling water.",
  },
  {
    name: "Spiced Chai Latte",
    cat: "drinks",
    tag: "Drink",
    icon: "☕",
    price: "$4",
    desc: "Slow-steeped chai, steamed milk, warm spice.",
  },
  {
    name: "Citrus Mint Cordial",
    cat: "drinks",
    tag: "Drink",
    icon: "🍹",
    price: "$5",
    desc: "Fresh citrus, mint, soda, a touch of honey.",
  },
];

const grid = document.getElementById("dishGrid");
dishes.forEach((d) => {
  const card = document.createElement("div");
  card.className = "dish-card reveal";
  card.dataset.cat = d.cat;
  card.innerHTML = `
      <div class="dish-top">
        <span class="dish-ic">${d.icon}</span>
        <span class="dish-tag">${d.tag}</span>
      </div>
      <h4>${d.name}</h4>
      <p>${d.desc}</p>
      <div class="dish-foot">
        <span class="dish-price">${d.price}</span>
        <span class="dish-add" title="Add to enquiry">+</span>
      </div>
    `;
  grid.appendChild(card);
});

// ---------- Filter ----------
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".dish-card").forEach((card) => {
      card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f);
    });
  });
});

// ---------- Dish "add to enquiry" nudge ----------
grid.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".dish-add");
  if (!addBtn) return;
  addBtn.textContent = "✓";
  addBtn.style.background = "var(--sage)";
  setTimeout(() => {
    addBtn.textContent = "+";
    addBtn.style.background = "var(--ink)";
  }, 1200);
});

// ---------- Mobile nav ----------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll("main section[id]");
const navA = document.querySelectorAll(".nav-links a");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navA.forEach((a) => {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
sections.forEach((s) => navObserver.observe(s));

// ---------- Reveal on scroll ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ---------- Testimonials slider ----------
const testimonials = [
  {
    quote:
      "Every course arrived on time and the lamb tagine was the talk of the wedding. Flawless service from start to finish.",
    name: "Amara O.",
    role: "Bride, Garden Wedding",
    init: "A",
  },
  {
    quote:
      "We've used Smoke & Sage for three company off-sites now. Consistent, professional, and the grazing spread never disappoints.",
    name: "Daniel R.",
    role: "Operations Lead, Northfield Co.",
    init: "D",
  },
  {
    quote:
      "They handled my daughter's birthday for 60 kids and adults without a single hiccup — even the fussy eaters were happy.",
    name: "Priya K.",
    role: "Private Client",
    init: "P",
  },
];
const tSlider = document.getElementById("tSlider");
const tDots = document.getElementById("tDots");
testimonials.forEach((t, i) => {
  const slide = document.createElement("div");
  slide.className = "t-slide" + (i === 0 ? " active" : "");
  slide.innerHTML = `
      <p>"${t.quote}"</p>
      <div class="t-who">
        <div class="av">${t.init}</div>
        <div><b>${t.name}</b><span>${t.role}</span></div>
      </div>`;
  tSlider.appendChild(slide);

  const dot = document.createElement("button");
  dot.className = i === 0 ? "active" : "";
  dot.addEventListener("click", () => showSlide(i));
  tDots.appendChild(dot);
});
let tCurrent = 0;
function showSlide(i) {
  document
    .querySelectorAll(".t-slide")
    .forEach((s, idx) => s.classList.toggle("active", idx === i));
  document
    .querySelectorAll(".t-dots button")
    .forEach((d, idx) => d.classList.toggle("active", idx === i));
  tCurrent = i;
}
setInterval(() => {
  showSlide((tCurrent + 1) % testimonials.length);
}, 5500);

// ---------- Contact form ----------
const form = document.getElementById("quoteForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent =
    "Thanks! Your request has been noted — we'll follow up within 24 hours.";
  form.reset();
  setTimeout(() => {
    formMsg.textContent = "";
  }, 6000);
});

// ---------- Header shadow on scroll ----------
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow =
    window.scrollY > 8 ? "0 6px 20px rgba(28,27,25,0.06)" : "none";
});
