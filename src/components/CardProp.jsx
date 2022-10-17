// Destructured the prop
function CardProp({ title, button, image }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-success">
          {button}
        </a>
      </div>
    </div>
  );
}

export default CardProp;

// --------------Another way of using props (react documentation way)-------------

// function CardProp(props) {
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       <img
//         src={porps.image}
//         className="card-img-top"
//         alt="..."
//       />
//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <a href="#" className="btn btn-success">
//           {props.button}
//         </a>
//       </div>
//     </div>
//   );
// }
