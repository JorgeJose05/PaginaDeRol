import React, { useState, useEffect } from 'react';

const ListaEstadisticas = () => {
  const [stats, setStats] = useState({
    fuerza: { nivel: 0, maximo: 5 },
    vigor: { nivel: 0, maximo: 5 },
    destreza: { nivel: 0, maximo: 5 },
    inteligencia: { nivel: 0, maximo: 5 },
    resistencia: { nivel: 0, maximo: 5 },
    resxGolpe: { nivel: 0, maximo: 5 }
  });

  const [razaSeleccionada, setRazaSeleccionada] = useState(null);
  const [checkboxMarcado, setCheckboxMarcado] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const opcionesRazas = [
    { nombre: 'Selecciona una raza', valor: '', stats: {} },
    { nombre: 'Humano', valor: 'humano', stats: { fuerza: 1, maximoFuerza: 10, vigor: 0, destreza: 0, inteligencia: 0, resistencia: 0, resxGolpe: 0 }, puedeNegado: true },
    { nombre: 'Elfo', valor: 'elfo', stats: { fuerza: 0, vigor: 0, destreza: 1, maximoDestreza: 10, inteligencia: 0, resistencia: 0, resxGolpe: 0, maximoResxGolpe: 10 }, puedeNegado: false },
    { nombre: 'Draconido', valor: 'draconido', stats: { fuerza: 0, vigor: 0, destreza: 3, maximoDestreza: 20, inteligencia: 0, resistencia: 0, resxGolpe: 0, maximoResxGolpe: 3 }, puedeNegado: false }
  ];

  useEffect(() => {
    if (razaSeleccionada) {
      const newStats = {};
      Object.keys(stats).forEach(stat => {
        const maxStatKey = `maximo${stat.charAt(0).toUpperCase() + stat.slice(1)}`;
        newStats[stat] = {
          nivel: razaSeleccionada.stats[stat] || 0,
          maximo: razaSeleccionada.stats[maxStatKey] || 5
        };
      });
      setStats(newStats);
    }
  }, [razaSeleccionada]);

  const handleChangeRaza = (e) => {
    const selectedRaza = opcionesRazas.find(opcion => opcion.valor === e.target.value);
    setRazaSeleccionada(selectedRaza);
  };

  const handleLevelClick = (stat, level) => {
    setStats(prevStats => ({
      ...prevStats,
      [stat]: { ...prevStats[stat], nivel: level }
    }));
  };

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupImageClick = (isChecked) => {
    if (isChecked) {
      console.log('Has hecho clic en la imagen Negado');
    } else {
      console.log('Has hecho clic en la imagen No Negado');
    }
    setCheckboxMarcado(isChecked);
    setPopupVisible(false);
  };
  

  const renderCircles = (stat) => {
    if (stat === 'inteligencia' && checkboxMarcado) {
      return null; // No renderizar la estadística de inteligencia si el checkbox está marcado
    }

    const circles = [];
    for (let i = 1; i <= stats[stat].maximo; i++) {
      circles.push(
        <div
          key={i}
          className={`w-5 h-5 rounded-full border border-black mr-2 ${i <= stats[stat].nivel ? 'bg-green-400' : 'bg-white'} ${i === stats[stat].nivel ? 'hover:opacity-25' : ''} ${i < stats[stat].nivel ? 'hover:opacity-100' : ''}`}
          onClick={() => handleLevelClick(stat, i)}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="ej-titulo mb-4">Lista de Estadísticas</h1>
      <div className="mb-4 flex items-center">
        <span className="mr-2">Raza:</span>
        <select className="text-black mr-2" onChange={handleChangeRaza} value={razaSeleccionada?.valor || ''}>
          {opcionesRazas.map(opcion => (
            <option key={opcion.valor} value={opcion.valor}>{opcion.nombre}</option>
          ))}
        </select>
        {razaSeleccionada && razaSeleccionada.puedeNegado && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
            Negado
          </button>
        )}
      </div>
      {popupVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-1/4 p-6 rounded-lg shadow-lg flex justify-between">
            <img className="w-48 cursor-pointer mb-4" src="/ejemplos/nonegado.jpg" alt="No Negado" onClick={() => handlePopupImageClick(false)} />
            <img className="w-48 cursor-pointer" src="/ejemplos/negado.jpg" alt="Negado" onClick={() => handlePopupImageClick(true)} />
          </div>
        </div>
      )}
      {Object.entries(stats).map(([stat, { nivel, maximo }]) => (
        // Renderizar el título de la estadística solo si no es "inteligencia" o si el checkbox no está marcado
        !(stat === 'inteligencia' && checkboxMarcado) && (
          <div key={stat} className="mb-4 flex items-center">
            <span className="mr-2">{stat.charAt(0).toUpperCase() + stat.slice(1)}:</span>
            <div className="flex items-center">
              {renderCircles(stat)}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default ListaEstadisticas;
