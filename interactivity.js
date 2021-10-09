const imgContainerWelcome = document.getElementById('imgContainerWelcome');
const imgBackground = document.getElementById('container');
const catsContainer = document.getElementById('catsContainer');
const congratulationContent = document.getElementById('congratulationContent');

const message1Btn = document.getElementById('message1Btn');
const message2Btn = document.getElementById('message2Btn');
const message3Btn = document.getElementById('message3Btn');
const message4Btn = document.getElementById('message4Btn');
const message5Btn = document.getElementById('message5Btn');
const message6Btn = document.getElementById('message6Btn');

congratulationBtn.addEventListener('click', messageWelcome);
message1Btn.addEventListener('click', message1);
message2Btn.addEventListener('click', message2);
message3Btn.addEventListener('click', message3);
message4Btn.addEventListener('click', message4);
message5Btn.addEventListener('click', message5);
message6Btn.addEventListener('click', message6);

function messageWelcome() {
  Swal.fire({
    title: 'Feliz cumpleaños tia Lili',
    imageUrl: 'https://imgur.com/3Hq6bPC.png',
    imageWidth: 300,
    imageHeight: 450,
    imageAlt: 'Custom image',
  });
  imgContainerWelcome.style.display = 'none';
  congratulationContent.style.display = 'none';
  imgBackground.style.backgroundImage = 'none';
  catsContainer.style.display = 'grid';
}

function message1() {
  Swal.fire(
    'Sos una persona inteligente, carismática, audaz, hermosa, bella, asombrosa, piola, maravillosa, capaz de todo, etc. Nunca cambies y si lo haces hacelo para bien 🙂'
  );
}
function message2() {
  Swal.fire(
    'Disfruto compartir con vos es un sentimiento inigualable gracias a vos'
  );
}
function message3() {
  Swal.fire(
    'Haz influido bastante en mi vida son geniales tus consejos, me encanta como ante los problemas siempre tratas de buscar un lado divertido '
  );
}
function message4() {
  Swal.fire(
    'Es muy genial hablar con vos, realmente es una de las cosas que mas disfruto, las charlas con mi tía Lili. Espero haber influido para bien en tu vida'
  );
}
function message5() {
  Swal.fire(
    'Gracias por el asesoramiento femenino, gracias por enseñarme, gracias por aceptar mi compañía, gracias por todo tía, te mereces todo'
  );
}
function message6() {
  Swal.fire('Te quiero tía, feliz cumpleaños 🙂');
}
