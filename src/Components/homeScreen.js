import Banner from "../Images/HomePageBanner.jpeg";
import allpl from "../Images/programming-languages.gif";

function homeScreen() {
  return (
    <div className="HomeScreen">
      <div className="headbanner">
        <img src={Banner} />
      </div>

      <div className="info">
        <p>
          Yazılım geliştirme alanında, her bir programlama dilinin kendine has
          özellikleri bulunur. Çok fazla ve farklı çeşitlerde yazılım dilinden
          söz etmek mümkündür. Kariyerinizi değiştirmek ya da kariyerinizde daha
          da ilerlemek adına bir programlama dili öğrenmek isteyebilirsiniz.
          Hangi dili seçerseniz seçin bunun için bir para ve zaman harcamanız
          gerekir. Karar vermeden önce programlama dilleri ile ilgili gerekli
          araştırma yapmanız, yapacağınız en doğru adım olacaktır. 2021 yılı
          için en güncel ve en çok tercih edilen programlama dilleri aşağıda
          açıklamaları ile birlikte sıralanmıştır.
        </p>
      </div>

      <div className="gifside">
        <img src={allpl} />
      </div>
    </div>
  );
}

export default homeScreen;
