import React from "react";
import p3banner from "../../Images/Csharp.png";
import p3gif from "../../Images/Csharp.gif";
import p3img from "../../Images/Csharp2.png";
function plang3Screen() {
  return (
    <div className="ScreenThree">
      <div className="headbanner">
        <img src={p3banner} />
      </div>

      <div className="secondimage">
            <img src={p3img}/>
        </div>

      <div className="info">
        <h2> C# Nedir </h2>

        <p>
          Yeni nesil programlama dili olan C sharp programlama konusunda
          yenilikleri de beraberinde getirmektedir. C# sunucu ve gömülü
          sistemleri için tasarlanmıştır. Microsoft tarafından geliştirilen C#
          .NET ortamında kullanılmak üzere geliştirilmiştir. Dilin
          tasarlanmasında Anders Hejlberg öncülük etmiştir. Zamanla gelişen bu
          programlama dili artık gerek masaüstü olsun gerek web uygulamaları
          olsun çoğu yerde kullanılmaktadır.
        </p>
      </div>

      <div className="gifside">
        <img src={p3gif} />
      </div>
    </div>
  );
}

export default plang3Screen;
