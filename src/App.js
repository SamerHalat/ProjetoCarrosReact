import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, marca: 'Toyota', km: 0, cor: 'Prata', ano: 2024 },
    { id: 2, marca: 'Honda', km: 25000, cor: 'Preto', ano: 2022 },
    { id: 3, marca: 'Chevrolet', km: 100000, cor: 'Branco', ano: 2018 }
  ];

  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      {cars.map((carro) => (
        <CarDetails
          key={carro.id}
          marca={carro.marca}
          km={carro.km}
          cor={carro.cor}
          ano={carro.ano}
        />
      ))}
    </div>
  );
}

export default App;
