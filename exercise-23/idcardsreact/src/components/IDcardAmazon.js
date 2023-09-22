const IDcardAmazon = (props) => {
  console.log("props: ", props);
  return (
    <div className="card w-25 float-start mx-1 my-1">
      <div className="card-body bg-primary">
        <div className="card-title bg-info text-center">
          <img src={props.image} style={{ height: "300px" }} />
        </div>
        <p className="card-text fw-bold text-light ps-1">
          Title: {props.title}
        </p>
        <p className="card-text fw-bold text-light ps-1">ID: {props.id}</p>
      </div>
    </div>
  );
};

export default IDcardAmazon;
