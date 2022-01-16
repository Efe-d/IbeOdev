import React from "react";
import p5banner from "../../Images/java.jpg";
import p5gif from "../../Images/java.gif";
import p5img from '../../Images/java2.jpg'
function plang5Screen() {
  return (
    <div className="ScreenFive">
      <div className="headbanner">
        <img src={p5banner} />
      </div>

        <div className="secondimage">
            <img src={p5img}/>
        </div>

      <div className="info">
        <h2> Java Nedir </h2>

        <p>
          Java ilk çıktığı zamanlarda küçük cihazlarda kullanılmak için
          düzenlenmiş bir dil olarak planlanmıştı. Yapılan bu planlama C ve C++
          dillerine göre daha yüksek ve güvenliği ön planda tutan bir yazılım
          geliştirme ve işletme ortamı sunmuş olduğu için her yerde
          kullanılmıştır.Bu gelişimle birlikte günümüzde özellikle kurumsal ve
          mobil alanda sağladığı çözümlerle son derece popüler durumdadır. Bunun
          yanında J2SE 1.4 ve 5 sürümüyle birlikte masaüstü uygulamalarda da
          yaygın bir şekilde kullanımına rastlanmaktadır.
        </p>
      </div>

      <div className="gifside">
        <img src={p5gif} />
      </div>
    </div>
  );
}

export default plang5Screen;
