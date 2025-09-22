let testData = {};

fetch('tests.json')
  .then(res => res.json())
  .then(data => {
    testData = data;
  });

function loadTopics(sinf) {
  const main = document.getElementById('mainContent');
  main.innerHTML = `<h2>${sinf}-sinf mavzulari</h2>`;

  if (!testData[sinf]) {
    main.innerHTML += "<p>Testlar hali qo‘shilmagan.</p>";
    return;
  }

  const fan = "Geografiya";
  const topics = Object.keys(testData[sinf][fan]);

  topics.forEach(mavzu => {
    const btn = document.createElement('button');
    btn.innerText = mavzu;
    btn.onclick = () => loadTests(sinf, fan, mavzu);
    main.appendChild(btn);
  });
}

function loadTests(sinf, fan, mavzu) {
  const main = document.getElementById('mainContent');
  main.innerHTML = `<h2>${mavzu}</h2>`;

  const savollar = testData[sinf][fan][mavzu];

  savollar.forEach((savolObj, idx) => {
    const div = document.createElement('div');
    div.className = 'test-question';

    let html = `<p><strong>${idx + 1}. ${savolObj.savol}</strong></p>`;

    savolObj.javoblar.forEach((javob, i) => {
      html += `
        <label>
          <input type="radio" name="q${idx}" value="${i}">
          ${javob}
        </label><br>
      `;
    });

    div.innerHTML = html;
    main.appendChild(div);
  });

  const button = document.createElement('button');
  button.innerText = "Natijani tekshirish";
  button.onclick = () => tekshir(savollar);
  main.appendChild(button);
}

function tekshir(savollar) {
  let togrilar = 0;

  savollar.forEach((savol, idx) => {
    const tanlangan = document.querySelector(`input[name="q${idx}"]:checked`);
    if (tanlangan && parseInt(tanlangan.value) === savol.togrisi) {
      togrilar++;
    }
  });

  alert(`To‘g‘ri javoblar soni: ${togrilar} / ${savollar.length}`);
}

function loadMixed() {
  alert("Aralash test hali qo‘shilmagan.");
}
