import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center pt-20">
        <a
          href="https://www.adamkwiasowski.pl"
          target="_blank"
          className="text-xl underline"
          rel="noreferrer"
        >
          Link to my website
        </a>
      </div>
    </div>
  );
};

export default Contact;
