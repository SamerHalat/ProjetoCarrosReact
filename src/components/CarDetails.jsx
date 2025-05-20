import './CarDetails.css'; // opcional, se quiser CSS separado

function CarDetails(props) {
  return (
    <div className="car-card">
      <ul>
        <li>Marca: {props.marca}</li>
        <li>KM: {props.km}</li>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>
          Condição: {props.km === 0 ? 'Carro novo' : 'Carro usado'}
        </li>
      </ul>
    </div>
  );
}

export default CarDetails;
