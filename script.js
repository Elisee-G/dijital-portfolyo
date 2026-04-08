var imlec = document.getElementById('imlec');
var imlechalka = document.getElementById('imlechalka');
var imlecX = 0, imlecY = 0;
var halkaX = 0, halkaY = 0;

document.addEventListener('mousemove', function(olay) {
  imlecX = olay.clientX;
  imlecY = olay.clientY;
  imlec.style.left = imlecX + 'px';
  imlec.style.top  = imlecY + 'px';
});

function halkayiGuncelle() {
  halkaX += (imlecX - halkaX) * 0.14;
  halkaY += (imlecY - halkaY) * 0.14;
  imlechalka.style.left = halkaX + 'px';
  imlechalka.style.top  = halkaY + 'px';
  requestAnimationFrame(halkayiGuncelle);
}
halkayiGuncelle();

document.querySelectorAll('a, button').forEach(function(eleman) {
  eleman.addEventListener('mouseenter', function() {
    imlec.style.width = '20px'; imlec.style.height = '20px';
    imlec.style.background = 'var(--accent2)';
    imlechalka.style.width = '50px'; imlechalka.style.height = '50px';
    imlechalka.style.borderColor = 'var(--accent2)';
  });
  eleman.addEventListener('mouseleave', function() {
    imlec.style.width = '12px'; imlec.style.height = '12px';
    imlec.style.background = 'var(--accent)';
    imlechalka.style.width = '36px'; imlechalka.style.height = '36px';
    imlechalka.style.borderColor = 'var(--accent)';
  });
});

var temadugme = document.getElementById('temadugme');
var mevcuttema = 'karanlik';

temadugme.addEventListener('click', function() {
  mevcuttema = mevcuttema === 'karanlik' ? 'aydinlik' : 'karanlik';
  document.documentElement.setAttribute('data-tema', mevcuttema);
  temadugme.textContent = mevcuttema === 'karanlik' ? '\u263E Aydınlık' : '\u2600 Karanlık';
});

var hamburger = document.getElementById('hamburger');
var navmenu   = document.getElementById('navmenu');
hamburger.addEventListener('click', function() { navmenu.classList.toggle('acik'); });
navmenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() { navmenu.classList.remove('acik'); });
});

var daktiloyazi = document.getElementById('daktiloyazi');
var daktiloMetinler = [
  'Web Geliştirici',
  'Siber Güvenlik Meraklisi',
  'BTS Ögrencisi',
  'Python & Flask Gelistiricisi',
  'Unity ile Oyun Yapiyorum'
];
var mevcutmetinindex = 0;
var mevcutkarakter   = 0;
var siliyormu        = false;

function daktiloYaz() {
  var mevcutmetin = daktiloMetinler[mevcutmetinindex];
  if (!siliyormu) {
    daktiloyazi.textContent = mevcutmetin.substring(0, mevcutkarakter + 1);
    mevcutkarakter++;
    if (mevcutkarakter === mevcutmetin.length) {
      siliyormu = true;
      setTimeout(daktiloYaz, 1800);
      return;
    }
  } else {
    daktiloyazi.textContent = mevcutmetin.substring(0, mevcutkarakter - 1);
    mevcutkarakter--;
    if (mevcutkarakter === 0) {
      siliyormu = false;
      mevcutmetinindex = (mevcutmetinindex + 1) % daktiloMetinler.length;
    }
  }
  setTimeout(daktiloYaz, siliyormu ? 55 : 85);
}
daktiloYaz();
var yeteneklistesi = [
  { isim: 'HTML & CSS',    seviye: 70 },
  { isim: 'JavaScript',   seviye: 60 },
  { isim: 'Python/Flask', seviye: 50 },
  { isim: 'C#',           seviye: 50 },
  { isim: 'SQL/SQLite',   seviye: 50 },
  { isim: 'Git & GitHub', seviye: 60 },
  { isim: 'Unity/C#',     seviye: 40 }
];
var yetenekbarlari = document.getElementById('yetenekbarlari');
yeteneklistesi.forEach(function(yetenek) {
  var kutu = document.createElement('div');
  kutu.className = 'ybar';
  kutu.innerHTML =
    '<div class="ybarust">' +
      '<span>' + yetenek.isim + '</span>' +
      '<span style="color:var(--accent);font-family:\'Space Mono\',monospace;font-size:.73rem">' + yetenek.seviye + '%</span>' +
    '</div>' +
    '<div class="ybardis">' +
      '<div class="ybaric" data-hedef="' + yetenek.seviye + '"></div>' +
    '</div>';
  yetenekbarlari.appendChild(kutu);
});
var projelistesi = [
  {
    baslik: 'CoPilote — Araba Paylasim Analizi',
    aciklama: 'Gümüshane için Python/Flask, SQLite, Pandas ve Leaflet ile yapilmis kentsel araba paylasim analiz uygulamasi.',
    teknolojiler: ['Python', 'Flask', 'SQLite', 'Pandas', 'Leaflet'],
    kategori: 'web',
    renk: '#7c6dfa',
    emoji: '🚗'
  },
  {
    baslik: 'Top Yuvarla — Unity Oyunu',
    aciklama: 'Mac üzerinde Unity 6 et C# avec le moteur de jeu de roulage de balle développé. Fizik tabanli mekanikler içeriyor.',
    teknolojiler: ['Unity 6', 'C#', 'MacOS'],
    kategori: 'oyun',
    renk: '#f06292',
    emoji: '🎮'
  },
  {
    baslik: 'Dijital Portfolyo Sitesi',
    aciklama: 'Bu site! HTML, CSS ve JS ile yapildi. Dark/Light mod, typewriter efekti ve özel cursor içeriyor.',
    teknolojiler: ['HTML', 'CSS', 'JavaScript'],
    kategori: 'web',
    renk: '#4dd0e1',
    emoji: '🌐'
  },
  {
    baslik: 'Ögrenci Yönetim Sistemi',
    aciklama: 'Java Swing ile masaüstü tabanli ögrenci yönetim uygulamasi. JFrame, tablolar ve form validasyonu içeriyor.',
    teknolojiler: ['Java', 'Java Swing', 'OOP'],
    kategori: 'masaustu',
    renk: '#ffb74d',
    emoji: '🎓'
  },
  {
    baslik: 'Windows Forms Sözlük',
    aciklama: 'C# Windows Forms ile yapilmis, ComboBox ve Dictionary kullanan interaktif çok dilli sözlük uygulamasi.',
    teknolojiler: ['C#', 'Windows Forms', 'Dictionary'],
    kategori: 'masaustu',
    renk: '#a5d6a7',
    emoji: '📖'
  },
  {
    baslik: 'Flask Blog Motoru',
    aciklama: 'Python/Flask ile yapilmis SQLite tabanli mini blog sistemi. CRUD islemleri ve Jinja2 sablonlari içeriyor.',
    teknolojiler: ['Python', 'Flask', 'SQLite', 'Jinja2'],
    kategori: 'web',
    renk: '#ce93d8',
    emoji: '✍️'
  }
];
var kategorietikletleri = {
  hepsi:    '📂 Hepsi',
  web:      '🌐 Web Projeleri',
  oyun:     '🎮 Oyun Projeleri',
  masaustu: '🖥 Masaüstü'
};
var tumkategoriler = ['hepsi'];
projelistesi.forEach(function(proje) {
  if (tumkategoriler.indexOf(proje.kategori) === -1) {
    tumkategoriler.push(proje.kategori);
  }
});
var filtrealani = document.getElementById('filtrealani');
var secilifikategori = 'hepsi';

tumkategoriler.forEach(function(kategori) {
  var dugme = document.createElement('button');
  dugme.className = 'fbtn' + (kategori === 'hepsi' ? ' aktif' : '');
  dugme.textContent = kategorietikletleri[kategori] || kategori;
  dugme.addEventListener('click', function() {
    secilifikategori = kategori;
    document.querySelectorAll('.fbtn').forEach(function(b) { b.classList.remove('aktif'); });
    dugme.classList.add('aktif');
    filtrelenmisprojelerigoster();
  });
  filtrealani.appendChild(dugme);
});
var projeizgara = document.getElementById('projeizgara');

function projekartiOlustur(proje) {
  var kart = document.createElement('div');
  kart.className = 'projekarti';
  kart.dataset.kategori = proje.kategori;

  var teknolojietiketleri = proje.teknolojiler.map(function(tek) {
    return '<span class="ptek">' + tek + '</span>';
  }).join('');

  kart.innerHTML =
    '<div class="projegorsel" style="background:' + proje.renk + '22">' +
      '<span style="font-size:3rem">' + proje.emoji + '</span>' +
      '<div style="position:absolute;bottom:0;left:0;right:0;height:45px;' +
        'background:linear-gradient(transparent,' + proje.renk + '33)"></div>' +
    '</div>' +
    '<div class="projeicerik">' +
      '<span class="pkategori" style="background:' + proje.renk + '22;color:' + proje.renk + '">' +
        (kategorietikletleri[proje.kategori] || proje.kategori) +
      '</span>' +
      '<div class="pbaslik">' + proje.baslik + '</div>' +
      '<div class="paciklama">' + proje.aciklama + '</div>' +
      '<div class="pteklar">' + teknolojietiketleri + '</div>' +
    '</div>';
  return kart;
}

projelistesi.forEach(function(proje) {
  projeizgara.appendChild(projekartiOlustur(proje));
});
function filtrelenmisprojelerigoster() {
  var filtrelenmisprojeler = secilifikategori === 'hepsi'
    ? projelistesi
    : projelistesi.filter(function(proje) { return proje.kategori === secilifikategori; });

  document.querySelectorAll('.projekarti').forEach(function(kart) {
    if (secilifikategori === 'hepsi' || kart.dataset.kategori === secilifikategori) {
      kart.classList.remove('gizli');
    } else {
      kart.classList.add('gizli');
    }
  });
}
var gorunecekelamanlar = document.querySelectorAll('.ggelecek');
var gorunusObserver = new IntersectionObserver(function(girisler) {
  girisler.forEach(function(giris) {
    if (giris.isIntersecting) {
      giris.target.classList.add('gorunur');
    }
  });
}, { threshold: 0.12 });
gorunecekelamanlar.forEach(function(eleman) { gorunusObserver.observe(eleman); });

/* ---------- YETENEK BARLARINI SCROLL iLE AKTiVE ET ---------- */
var yetenekbolumu = document.getElementById('yetenekler');
var yetenekObserver = new IntersectionObserver(function(girisler) {
  girisler.forEach(function(giris) {
    if (giris.isIntersecting) {
      document.querySelectorAll('.ybaric').forEach(function(bar) {
        bar.style.width = bar.dataset.hedef + '%';
      });
      yetenekObserver.disconnect();
    }
  });
}, { threshold: 0.25 });
yetenekObserver.observe(yetenekbolumu);
