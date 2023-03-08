function Car(props) {
  return (
    <div style={{}}>
      <h1>
        This car's name is: {props.name} and it's brand is {props.brand}
      </h1>
      <h2>Car's weight is {props.info.weight}</h2>
      <h2>Car's color is {props.info.color}</h2>
    </div>
  );
}

export default Car;
