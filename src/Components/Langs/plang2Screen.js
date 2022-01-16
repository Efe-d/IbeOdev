import p2banner from "../../Images/javascript.png";
import p2gif from "../../Images/javascript.gif";
import p3img from "../../Images/javascript2.jpeg";

function plang2Screen() {
  return (
    <div className="ScreenTwo">
      <div className="headbanner">
        <img src={p2banner} />
      </div>

      <div className="secondimage">
            <img src={p3img}/>
        </div>

      <div className="info">
        <h2> Javascript Nedir </h2>

        <p>
          20.yüzyılın sonunda Amerikan kökenli bir bilgisayar hizmetleri şirketi
          çalışanı tarafından yaratılan Javascript, son halini almadan önce uzun
          süreçlerden geçti. Yaklaşık 25 senelik gelişim sürecinin ardından
          dünyanın en popüler yazılım dilleri arasına girmeyi başardı.
          Günümüzde, internet sitelerinin %90’ından fazlası Javascript
          kullanmaktadır. Açılır-kapanır menüler ya da bir web sitesinde yanlış
          veri girdiğimizde karşımıza çıkan uyarı kutucuğu Java script’e
          verilebilecek en küçük örneklerdendir. Tabii ki bu örnekler, buz
          dağının görünmeyen kısmı. Web geliştiriciler, Javascript ile mükemmel
          işlere imza atmakta ve her gün Javascript gelişim göstermektedir.
        </p>
      </div>

      <div className="gifside">
        <img src={p2gif} />
      </div>
    </div>
  );
}

export default plang2Screen;
