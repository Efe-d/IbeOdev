import React from "react";
import p4banner from "../../Images/python.jpg";
import p4gif from "../../Images/python.gif";
import p4img from "../../Images/python2.jpg";
function plang4Screen() {
  return (
    <div className="Screenfour">
      <div className="headbanner">
        <img src={p4banner} />
      </div>

      <div className="secondimage">
        <img src={p4img} />
      </div>

      <div className="info">
        <h2> Python Nedir </h2>

        <p>
          Bugünlerde herkesin Python hakkında konuştuğunu fark etmişsinizdir.
          Bunun nedeni hızlı büyüyen ve en çok sevilen programlama dili olduğu
          içindir. Çok yönlülüğü ile bilinen Python, çeşitli projelerde ve veri
          bilimi, makine öğrenimi, blok zinciri dahil olmak üzere pek çok
          sektörde kullanılabilir. Python, modern yazılım geliştirme için en
          popüler seçeneklerden biri olan yorumlanmış, genel amaçlı bir
          programlama dilidir. İlk olarak, modülerdir; yani diğer teknolojiler
          ve çözümlerle kolayca entegre edilebilir. Ayrıca açık kaynaklıdır.
          Program başlatılmadan hemen önce makine koduna çevrilir. Bu, farklı
          işletim sistemlerinde kullanımı daha kolay olan taşınabilir. Yani
          evrensel programlar yazmayı kolaylaştırır.
        </p>
      </div>

      <div className="gifside">
        <img src={p4gif} />
      </div>
    </div>
  );
}

export default plang4Screen;
