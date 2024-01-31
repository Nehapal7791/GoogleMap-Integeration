import "./App.css";

function App() {
  return (
    <>
      <div className="mainclass">
        <address id="address">
          Loins Club
          <br />
          Kusum Vihar Colony <br />
          Kotwali Road Najibabad - 246763
          <br />
          <br />
        </address>
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7074.416726670233!2d78.33463866328545!3d29.596657099020774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bdfd7f1c0a9d3%3A0xaf0eef59ed8efae!2sLions%20Club!5e0!3m2!1sen!2sin!4v1706703806036!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
