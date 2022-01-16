import p1banner from "../../Images/reactnative.png";
import p1gif from "../../Images/reactnative.gif";
import p1img from "../../Images/reactnative2.jpg";

function plang1Screen() {
  return (
    <div className="ScreenOne">
      <div className="headbanner">
        <img src={p1banner} />
      </div>

      <div className="secondimage">
            <img src={p1img}/>
        </div>

      <div className="info">
        <h2>React Native Nedir</h2>

        <p>
          React Native için kısaca Facebook tarafından üretilen, cross-platform
          mobil uygulama geliştirme olanağı sağlayan bir framework diyebiliriz.
          “Cross-platform mobil uygulama geliştirme framework’ü” ne demek
          derseniz; “Ben tek bir dil ile mobil uygulama geliştireyim; ama hem
          Android, hem iOS, hem Windows … vs ortamlarında çalışsın. Kalkıp da
          Android için Java, iOS için Swift öğrenmekle uğraşmayayım!” dediğiniz
          de sizin imdadınıza koşan diller, framework’lerdir.
        </p>
      </div>

      <div className="gifside">
        <img src={p1gif} />
      </div>
    </div>
  );
}

export default plang1Screen;
