/* =========================
   OPEN INVITATION
========================= */

function openInvitation() {
  const opening = document.getElementById("opening");
  const invitation = document.getElementById("invitation");

  opening.style.display = "none";
  invitation.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   COUNTDOWN
========================= */

const weddingDate = new Date(
  "January 7, 2027 16:00:00"
).getTime();

function updateCountdown() {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  if (distance <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (distance / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (distance / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   MUSIC
========================= */

function toggleMusic() {

  const music = document.getElementById("weddingMusic");
  const button = document.getElementById("musicButton");

  if (music.paused) {

    music.play()
      .then(function () {
        button.textContent = "Ⅱ";
      })
      .catch(function () {
        alert("Please tap the music button again.");
      });

  } else {

    music.pause();

    button.textContent = "♫";
  }
}


/* =========================
   ADD TO CALENDAR
========================= */

function addToCalendar() {

  const title = encodeURIComponent(
    "Nikkah of Khaleelu & Fadila"
  );

  const details = encodeURIComponent(
    "Nikkah ceremony of Khaleelu Rahman & Fadila Mariyam"
  );

  const location = encodeURIComponent(
    "Rahath Melparamba"
  );

  const start = "20270107T160000";
  const end = "20270107T180000";

  const googleCalendar =
    "https://calendar.google.com/calendar/render" +
    "?action=TEMPLATE" +
    "&text=" + title +
    "&dates=" + start + "/" + end +
    "&details=" + details +
    "&location=" + location;

  window.open(
    googleCalendar,
    "_blank"
  );
}