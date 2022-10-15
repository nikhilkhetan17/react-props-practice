import CardProp from "./CardProp";

function Card() {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <CardProp title={"Hello React"} button={"Click Me"} />
          </div>
          <div className="col-4">
            <CardProp title={"Hello World"} button={"Click Me2"} />
          </div>
          <div className="col-4">
            <CardProp title={"Hello Nikhil"} button={"Click Here"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
