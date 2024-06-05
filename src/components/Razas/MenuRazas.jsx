import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './estilos/MenuRazas.css';



function MenuRazas() {
  const navigate = useNavigate();

  const razas = [
   
    //moralidad neutral
    { nombre: 'Humanos', imagen: '/razas/Humano.jpg', descripcion: 'Descripción de los humanos...', moral: 'Neutral' },
    { nombre: 'Enanos', imagen: '', descripcion: 'Descripción de los enanos...', moral: 'Neutral' },
    { nombre: 'Elfo Arcano', imagen: '/razas/ElfoArcano.jpg', descripcion: 'Descripción del elfo arcano...', moral: 'Neutral' },
    { nombre: 'Tabaxi', imagen: '/razas/Tabaxi.jpg', descripcion: 'Descripción del tabaxi...', moral: 'Neutral' },
    { nombre: 'Centauro', imagen: '/razas/Centauro.jpg', descripcion: 'Descripción del centauro...', moral: 'Neutral' },
    { nombre: 'Tiefling', imagen: '/razas/Tiefling.jpg', descripcion: 'Descripción del tiefling...', moral: 'Neutral' },
    { nombre: 'Triton/Nereida', imagen: '/razas/TritonNereida.jpg', descripcion: 'Descripción del triton/nereida...', moral: 'Neutral' },
    { nombre: 'Gigante', imagen: '/razas/Gigante.jpg', descripcion: 'Descripción del gigante...', moral: 'Neutral' },
    { nombre: 'Golem', imagen: '/razas/Golem.jpg', descripcion: 'Descripción del golem...', moral: 'Neutral' },
    { nombre: 'Gnomo', imagen: '/razas/Gnomo.jpg', descripcion: 'Descripción del gnomo...', moral: 'Neutral' },
    { nombre: 'Duende', imagen: '/razas/Duende.jpg', descripcion: 'Descripción del duende...', moral: 'Neutral' },
    //moralidad buena
    { nombre: 'Elfo del bosque', imagen: '/razas/ElfoBosque.jpg', descripcion: 'Descripción del elfo del bosque...', moral: 'Buenas' },
    { nombre: 'Hada', imagen: '/razas/Hada.jpg', descripcion: 'Descripción del hada...', moral: 'Buenas' },
    { nombre: 'Ninfa', imagen: '/razas/Ninfa.jpg', descripcion: 'Descripción de la ninfa...', moral: 'Buenas' },
    { nombre: 'Ent', imagen: '/razas/Ent.jpg', descripcion: 'Descripción del ent...', moral: 'Buenas' },
    { nombre: 'Leprechaunt', imagen: '/razas/Leprechaunt.jpg', descripcion: 'Descripción del leprechaunt...', moral: 'Buenas' },
    { nombre: 'Sílfide', imagen: '/razas/Silfide.jpg', descripcion: 'Descripción de la sílfide...', moral: 'Buenas' },
    { nombre: 'Sátiro', imagen: '/razas/Satiro.jpg', descripcion: 'Descripción del sátiro...', moral: 'Buenas' },
    { nombre: 'Mediano', imagen: '/razas/Mediano.jpg', descripcion: 'Descripción del mediano...', moral: 'Buenas' },
    { nombre: 'Fénix', imagen: '/razas/Fenix.jpg', descripcion: 'Descripción del fénix...', moral: 'Buenas' },
    { nombre: 'Driada', imagen: '/razas/Driada.jpg', descripcion: 'Descripción de la driada...', moral: 'Buenas' },
    { nombre: 'Dracónido', imagen: '/razas/Draconido.jpg', descripcion: 'Descripción del dracónido...', moral: 'Buenas' },
    //moralidad mala
    { nombre: 'Elfo oscuro', imagen: '/razas/ElfoOscuro.jpg', descripcion: 'Descripción del elfo oscuro...', moral: 'Malas' },
    { nombre: 'Vampiro', imagen: '/razas/Vampiro.jpg', descripcion: 'Descripción del vampiro...', moral: 'Malas' },
    { nombre: 'Sirena', imagen: '/razas/Sirena.jpg', descripcion: 'Descripción de la sirena...', moral: 'Malas' },
    { nombre: 'Licantropo', imagen: '/razas/Licantropo.jpg', descripcion: 'Descripción del licántropo...', moral: 'Malas' },
    { nombre: 'Orco', imagen: '/razas/Orco.jpg', descripcion: 'Descripción del orco...', moral: 'Malas' },
    { nombre: 'Súcubo/Íncubo', imagen: '/razas/SucuboIncubo.jpg', descripcion: 'Descripción del súcubo/íncubo...', moral: 'Malas' },
    { nombre: 'Cíclope', imagen: '/razas/Ciclope.jpg', descripcion: 'Descripción del cíclope...', moral: 'Malas' },
    { nombre: 'Hada Oscura', imagen: '/razas/HadaOscura.jpg', descripcion: 'Descripción del hada oscura...', moral: 'Malas' },
    { nombre: 'Solvian', imagen: '/razas/Solvian.jpg', descripcion: 'Descripción del solvian...', moral: 'Malas' },
    { nombre: 'Minotauro', imagen: '/razas/Minotauro.jpg', descripcion: 'Descripción del minotauro...', moral: 'Malas' },
    { nombre: 'Lamia', imagen: '/razas/Lamia.jpg', descripcion: 'Descripción de la lamia...', moral: 'Malas' }
  ];

  const AlRazaClick = (nombre) => {

    // Navegar a la URL correspondiente a la raza
    navigate(`/razas/${nombre.toLowerCase()}`);
  };

  const [filteredData, setFilterData] = useState(razas);
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchText, setSearchText] = useState('');

  const moralidad = [...new Set(razas.map(item => item.moral))];

  const LimpiarFiltro = () => {
    setFilterData(razas);
    setActiveFilter(null);
    setSearchText('');
  }

  const Filtrar = (mora) => {
    const filtrado = razas.filter(item => item.moral === mora);
    setFilterData(filtrado);
    setActiveFilter(mora);
  };

  const filtrarTexto = (texto) => {
    const filtrado = razas.filter(item =>
      item.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    setFilterData(filtrado); // Use setFilterData instead of setFilteredData
    setActiveFilter(null); // Clear the active filter for moralidad
  };
  

  const buscarPorTexto = (busqueda) => {
    const texto = busqueda.target.value;
    setSearchText(texto);
    filtrarTexto(texto); // Llamar a la función de filtro por texto
  };

  return (
    <>
    <div className='Algo'>
    <button onClick={LimpiarFiltro} className={`Reset ${activeFilter === null ? 'Activo' : ''}`}>
      Mostrar todas
    </button>
    {moralidad.map((mor, index) => (
      <button
        key={index}
        onClick={() => Filtrar(mor)}
        className={`Filtro ${activeFilter === mor ? 'Activo' : ''}`}
      >
        {mor}
      </button>
    ))}

    </div>
    <div className='texto'>
    <input
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={buscarPorTexto}
        className="inputBusqueda"
      />
    </div>
    
    <div className="flex flex-wrap justify-center">
        {filteredData.map((raza, idx) => (
          <div
            key={idx}
            className="raza-cuerpo"
            onClick={() => AlRazaClick(raza.nombre)}
          >
            <h2 className="raza-titulo">{raza.nombre}</h2>
            <img src={raza.imagen} alt={`Imagen de ${raza.nombre}`} />
            <p className="raza-descripcion">{raza.descripcion}</p>
          </div>
        ))}
      </div></>
  );
};

export default MenuRazas;


//Al click,¿donde nos lleva?
//¿Creacion de nuevas razas?