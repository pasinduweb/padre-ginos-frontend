const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img
        src={props.image || "https://cdn.pixabay.com/photo/2023/10/04/18/49/pizza-8294340_1280.png"}
        alt={props.name}
      />
    </div>
  );
};

export default Pizza;
