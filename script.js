// Kirish funksiyasi
function login() {
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();

  if (fname === '' || lname === '') {
    alert('Iltimos, ism va familiyangizni kiriting!');
    return;
  }

  const fullName = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() + ' ' +
                   lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();

  document.getElementById('userName').innerText = fullName;

  // Kirish ekranini yashirish, asosiy sahifani ko'rsatish
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'flex';
}

// Test mavzularini yuklash uchun namuna funksiyalar (keyinchalik kengaytiramiz)
function loadTopics(classNumber) {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `<h2>${classNumber}-sinf testlari</h2><p>Bu yerda ${classNumber}-sinf testlari ko'rsatiladi.</p>`;
  changeDesign(classNumber);
}

function loadMixed() {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `<h2>Aralash testlar</h2><p>Bu yerda aralash testlar ko'rsatiladi.</p>`;
  changeDesign('mixed');
}

// Dizayn o'zgarishi uchun namuna funksiya
function changeDesign(section) {
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main');

  // Misol uchun: fon ranglarini o'zgartiramiz
  switch (section) {
    case '7':
      sidebar.style.backgroundColor = '#2c3e50';
      main.style.backgroundColor = '#ecf0f1';
      break;
    case '8':
      sidebar.style.backgroundColor = '#16a085';
      main.style.backgroundColor = '#f0fff0';
      break;
    case '9':
      sidebar.style.backgroundColor = '#8e44ad';
      main.style.backgroundColor = '#f9f0ff';
      break;
    case '10':
      sidebar.style.backgroundColor = '#d35400';
      main.style.backgroundColor = '#fff5e6';
      break;
    case '11':
      sidebar.style.backgroundColor = '#c0392b';
      main.style.backgroundColor = '#ffe6e6';
      break;
    case 'mixed':
      sidebar.style.backgroundColor = '#34495e';
      main.style.backgroundColor = '#e8f0fe';
      break;
    default:
      sidebar.style.backgroundColor = '#2c3e50';
      main.style.backgroundColor = '#ecf0f1';
  }
}
