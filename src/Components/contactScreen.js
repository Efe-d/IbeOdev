import Contact from "../Images/contact.jpg";

function contactScreen() {
  return (
    <div className="Contact">
      <div className="banner">
        <img src={Contact} />
      </div>

      <div className="ourinfo">
        <h1> Contact </h1>

        <h2> Phone : 123 123123 123 </h2>
        <h2> E-Mail : company@example.com </h2>
      </div>

      <div className="mail">
        <label >İsim :</label>
        <input type="text" />
        <label >Soyisim :</label>
        <input type="text" />
        <label >Mail :</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}

export default contactScreen;
