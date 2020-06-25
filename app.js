const button = document.getElementById("buttons");
const text = document.getElementById("text");
const name = document.getElementById("name");
const prof = document.getElementById("job-name");
const photo = document.getElementById("photo");

button.addEventListener("click", changeSlide);

function changeSlide() {
  console.log("test");
  if (name.innerHTML === "Tanya Sinclair") {
    name.innerHTML = "John Tarkpor";
    prof.innerHTML = "Junior Front-end Developer";
    text.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
    photo.src = `images/image-john.jpg`;
  } else {
    name.innerHTML = "Tanya Sinclair";
    prof.innerHTML = "UX Engineer";
    text.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” `;
    photo.src = `images/image-tanya.jpg`;
  }
}