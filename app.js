const btn = document.querySelector('.btn');
const content = document.querySelector('.real-card');
btn.addEventListener('click', showName);

function showName() {
    let name = document.querySelector('#nama-input').value;
    const text = `<section class="card-box">
    <div class="container">
        <div class="card">
            <div class="card-content">
                <div class="card-image">
                    <img src="teuing_ah_1-removebg-preview.png" alt="gambar">
                </div>
                <div class="card-text-container">
                    <div class="card-text">
                        <p class="greet">Halooo ${name}</p>
                        <p class="eid">Selamat Hari Raya Idul Fitri yaaa</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="text-content">
    <div class="container">
        <div class="eid-text">
            <p class="text-info">
                Haiii ${name}, gimana kabarnya sekarang?<br>
                Semoga hari ini kamu bahagia yaaa, karena sekarang bisa ngerasain lagi nikmatnya makan siang hehe
            </p>
            <p class="text-info">
                Di momen hari raya ini aku mau ngucapin selamat hari raya idul fitri. Semoga shaum pada bulan 
                Ramadhan tahun ini dapat membawa perubahan bagi diri kita, 
                minimal dapat merubah sedikit berat badan kita wkwk. 
            </p>
            <p class="text-info">
                Aku juga pengen minta maaf nih ke ${name}
                 kalo ada perilaku dan tutur kata
                 yang tidak berkenan di hati. 
                 Namanya juga manusia, pasti pernah khilaf.
            </p>
            <p class="text-info">
                Thanks udah baca card ini, semoga kamu sehat
                 selalu dan tetap semangat menghadapi kehidupan yaaa
            </p>
            <p class="text-info">
                Salam hangat untuk ${name}<br>
                Dari Muhammad Rafli
            </p>
        </div>
    </div>
</section>`;
return content.innerHTML = text;
}
