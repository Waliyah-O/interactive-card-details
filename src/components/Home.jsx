import Form from "./Form";
import CardDetails from "./cardDetails";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="cardDetailsHome">
          <CardDetails />
        </div>
        <div className="formAreaHome">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Home;
