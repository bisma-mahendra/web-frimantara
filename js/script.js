const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')


btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
// Carousel //
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const tiga = document.getElementById("third");
    const empat = document.getElementById("empat");
 
    const kiri1 = document.getElementById("kiri1");
    kiri1.onclick = function () {
          first.style.display = "none";
          empat.style.display = "block";
          
      };

    const kiri2 = document.getElementById("kiri2");  
    kiri2.onclick = function () {
            second.style.display = "none";
            first.style.display = "block";
    };

    const kiri3 = document.getElementById("kiri3");  
    kiri3.onclick = function () {
            tiga.style.display = "none";
            second.style.display = "block";
    };
    const kiri4 = document.getElementById("kiri4");  
    kiri4.onclick = function () {
            empat.style.display = "none";
            tiga.style.display = "block";
    };
    // Kanan ---------------------
    const kanan1 = document.getElementById("kanan1");
    kanan1.onclick = function () {
          first.style.display = "none";
          second.style.display = "block";
      };

    const kanan2 = document.getElementById("kanan2");  
    kanan2.onclick = function () {
            second.style.display = "none";
            tiga.style.display = "block";
    };

    const kanan3 = document.getElementById("kanan3");  
    kanan3.onclick = function () {
            tiga.style.display = "none";
            empat.style.display = "block";
    };
    const kanan4 = document.getElementById("kanan4");  
    kanan4.onclick = function () {
            empat.style.display = "none";
            first.style.display = "block";
    };
    