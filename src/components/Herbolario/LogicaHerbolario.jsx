import React, { useState } from 'react';
import './estilos/LogicaHerbolario.css';

function LogicaHerbolario() {
  // Plantas añadidas
  const data = [
    // BOSQUE LEGENDARIO
    { nombre: 'Flor de Luminiscencia', imageUrl: '/herbolario/flor_luminiscencia.png', descripcion: 'Luminosa en la oscuridad, guía a los viajeros perdidos. Precaución: No ingerir, puede causar alucinaciones.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Raíz de Eternidad', imageUrl: '/herbolario/raiz_eternidad.png', descripcion: 'Aumenta la longevidad, pero en exceso provoca envejecimiento prematuro. Precaución: Usar con moderación y bajo supervisión.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Hongo Sombra', imageUrl: '/herbolario/hongo_sombra.PNG', descripcion: 'Cura heridas leves, pero en grandes cantidades causa somnolencia y pesadillas. Precaución: Dosificar con cuidado.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Hierba Susurrante', imageUrl: '/herbolario/hierba_susurrante.PNG', descripcion: 'Aumenta la empatía y la sensibilidad a las emociones. Precaución: Evitar el contacto prolongado, puede causar confusión mental.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Hoja de Viento', imageUrl: '/herbolario/hoja_viento.png', descripcion: 'Reduce el peso y aumenta la agilidad. Precaución: No consumir en grandes cantidades, puede provocar mareos y pérdida de equilibrio.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Flor de Cristal', imageUrl: '/herbolario/flor_cristal.png', descripcion: 'Purifica el aire y aumenta la energía vital. Precaución: No mezclar con otras hierbas, puede causar reacciones impredecibles.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Hongo de Luz', imageUrl: '/herbolario/hongo_luz.png', descripcion: 'Ilumina la oscuridad con una luz tenue. Precaución: Evitar el contacto directo con los ojos, puede causar irritación.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Raíz de Memoria', imageUrl: '/herbolario/raiz_memoria.png', descripcion: 'Mejora la memoria y la capacidad de aprendizaje. Precaución: Usar con moderación, puede provocar recuerdos vívidos y perturbadores.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Flor de Ilusión', imageUrl: '/herbolario/flor_ilusion.png', descripcion: 'Crea ilusiones visuales inofensivas. Precaución: No consumir, puede provocar desorientación temporal.', localizacion: 'BOSQUE LEGENDARIO' },
    { nombre: 'Hongo de Sonido', imageUrl: '/herbolario/hongo_sonido.png', descripcion: 'Reproduce sonidos de la naturaleza. Precaución: Evitar el uso prolongado, puede causar tinnitus.', localizacion: 'BOSQUE LEGENDARIO' },
    // PICO HELADO
    { nombre: 'Musgo Glacial', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Alivia quemaduras y reduce la fiebre. Precaución: No consumir en exceso, puede provocar adormecimiento.', localizacion: 'PICO HELADO' },
    { nombre: 'Bayas de Fuego', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumentan el calor corporal, ideales para climas fríos. Precaución: Consumir con moderación, pueden causar sofocos y deshidratación.', localizacion: 'PICO HELADO' },
    { nombre: 'Líquen de Cristal', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Purifica el agua y elimina toxinas. Precaución: Evitar el contacto directo con la piel, puede causar irritación.', localizacion: 'PICO HELADO' },
    { nombre: 'Flor de Nieve', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Protege contra el frío extremo y aumenta la resistencia al viento. Precaución: Evitar el contacto prolongado con la piel, puede causar entumecimiento.', localizacion: 'PICO HELADO' },
    { nombre: 'Raíz de Invierno', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Induce el sueño profundo y restaura la energía. Precaución: No consumir durante el día, puede provocar somnolencia diurna.', localizacion: 'PICO HELADO' },
    { nombre: 'Hongo de Hielo', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Conserva alimentos y bebidas por más tiempo. Precaución: No consumir, puede causar malestar estomacal.', localizacion: 'PICO HELADO' },
    { nombre: 'Bayas de Aurora', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumentan la percepción visual y la capacidad de ver en la oscuridad. Precaución: Consumir con moderación, pueden provocar sensibilidad a la luz.', localizacion: 'PICO HELADO' },
    { nombre: 'Líquen de Roca', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la resistencia física y la capacidad de soportar el frío extremo. Precaución: Evitar el contacto con la piel, puede causar irritación severa.', localizacion: 'PICO HELADO' },
    { nombre: 'Flor de Cristal Helado', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Purifica el aire y elimina toxinas del cuerpo. Precaución: No mezclar con otras hierbas, puede causar reacciones impredecibles.', localizacion: 'PICO HELADO' },
    { nombre: 'Hongo de Sonido', imageUrl: '/herbolario/hongo_sonido.png', descripcion: 'Reproduce sonidos de la batalla entre dragones. Precaución: Evitar el uso prolongado, puede causar ansiedad y pesadillas.', localizacion: 'PICO HELADO' },
    // CADÁVER DEL DRAGÓN
    { nombre: 'Flor de Arena', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Absorbe agua del aire, útil para la hidratación. Precaución: No consumir en grandes cantidades, puede provocar estreñimiento.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Espina Roja', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Actúa como analgésico natural. Precaución: Evitar el contacto con la piel y ojos, causa irritación severa.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Raíz de Dragón', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la fuerza y resistencia, pero en exceso provoca agresividad. Precaución: Usar con moderación y bajo supervisión.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Flor de Oasis', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Cura la deshidratación y la fatiga. Precaución: No consumir en grandes cantidades, puede provocar micción excesiva.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Hongo de Luz', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Ilumina la oscuridad con una luz tenue. Precaución: Evitar el contacto directo con los ojos, puede causar irritación.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Bayas de Escarabajo', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la resistencia a las toxinas y venenos. Precaución: Consumir con moderación, puede provocar náuseas y vómitos.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Líquen de Roca', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la resistencia física y la capacidad de soportar el calor extremo. Precaución: Evitar el contacto con la piel, puede causar irritación severa.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Flor de Espejo', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Refleja la luz del sol y protege del calor. Precaución: No mirar directamente al sol a través de la flor, puede causar daños oculares.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Raíz de Arena', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Solidifica la arena y permite caminar sobre ella. Precaución: Usar con moderación, puede afectar el ecosistema del desierto.', localizacion: 'CADÁVER DEL DRAGÓN' },
    { nombre: 'Hongo de Sonido', imageUrl: '/herbolario/hongo_sonido.png', descripcion: 'Reproduce sonidos del desierto. Precaución: Evitar el uso prolongado, puede causar desorientación y alucinaciones auditivas.', localizacion: 'CADÁVER DEL DRAGÓN' },
    // TERRITORIO DE DRAGONES
    { nombre: 'Hierba Volcánica', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Cura quemaduras graves, pero en contacto con piel sana causa ampollas. Precaución: Manipular con cuidado y usar solo en zonas afectadas.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Fruto Cósmico', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Otorga visión nocturna y mejora la percepción sensorial. Precaución: Consumir con moderación, puede provocar mareos y desorientación.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Hoja de Dragón', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Protege contra el fuego y aumenta la resistencia al calor. Precaución: Evitar el contacto prolongado con la piel, puede causar sarpullido.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Flor de Llamarada', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la fuerza física y la resistencia al fuego. Precaución: No consumir, puede provocar irritación en la garganta y el estómago.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Hongo de Luz', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Ilumina la oscuridad con una luz tenue. Precaución: Evitar el contacto directo con los ojos, puede causar irritación.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Bayas de Sangre', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumentan la velocidad de curación y la resistencia a las heridas. Precaución: Consumir con moderación, puede provocar sangrado nasal.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Líquen de Roca', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la resistencia física y la capacidad de soportar el calor extremo. Precaución: Evitar el contacto con la piel, puede causar irritación severa.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Flor de Ceniza', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Purifica el aire y elimina toxinas del cuerpo. Precaución: No mezclar con otras hierbas, puede causar reacciones impredecibles.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Raíz de Fuego', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la resistencia al fuego y la capacidad de controlar las llamas. Precaución: Usar con moderación y bajo supervisión, puede ser peligroso para usuarios inexpertos.', localizacion: 'TERRITORIO DE DRAGONES' },
    { nombre: 'Hongo de Sonido', imageUrl: '/herbolario/hongo_sonido.png', descripcion: 'Reproduce sonidos de la batalla entre dragones. Precaución: Evitar el uso prolongado, puede causar ansiedad y pesadillas.', localizacion: 'TERRITORIO DE DRAGONES' },
    // ARK Y CADIA
    { nombre: 'Flor de Lumiscencia Eterna', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Ilumina con una luz mágica perpetua, ideal para iluminar calles y hogares. Precaución: No consumir, puede causar alucinaciones leves.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Hierba de Maná', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la reserva de maná y facilita el lanzamiento de hechizos. Precaución: No consumir en exceso, puede provocar mareos y dolores de cabeza.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Raíz de Teleportación', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Permite teletransportarse a corta distancia. Precaución: Usar con cuidado, puede provocar desorientación temporal.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Flor de Invisibilidad', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Otorga invisibilidad temporal. Precaución: No usar para fines maliciosos, puede tener consecuencias negativas.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Hongo de Regeneración', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Acelera la curación de heridas y la recuperación del cuerpo. Precaución: Evitar el contacto prolongado con la piel, puede causar picazón e irritación.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Bayas de Levitación', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Permiten levitar durante un breve periodo de tiempo. Precaución: No consumir en grandes cantidades, puede provocar mareos y náuseas.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Líquen de Resistencia Mágica', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la resistencia a los hechizos y ataques mágicos. Precaución: Evitar el contacto prolongado con la piel, puede causar sarpullido.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Flor de Telepatía', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Facilita la comunicación telepática. Precaución: Usar con cuidado, puede provocar dolores de cabeza y fatiga mental.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Raíz de Visión Nocturna', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Otorga visión nocturna y mejora la percepción en la oscuridad. Precaución: No consumir en exceso, puede provocar sensibilidad a la luz durante el día.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Hongo de Sonidos Mágicos', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Reproduce sonidos mágicos y melodías relajantes. Precaución: Evitar el uso prolongado, puede provocar somnolencia y sueños vívidos.', localizacion: 'ARK Y CADIA' },
    { nombre: 'Flor de Sirena', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Su canto atrae a las sirenas y mejora la empatía con el mar. Precaución: No consumir, puede provocar mareos y desorientación.', localizacion: 'EN COSTAS DE ARCADIA' },
    //EN COSTAS DE ARCADIA
    { nombre: 'Alga Luminosa', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Ilumina con una luz mágica natural, ideal para iluminar la noche en el mar. Precaución: No consumir, puede causar irritación en la piel y los ojos.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Hongo de Respiración Submarina', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Permite respirar bajo el agua durante un breve periodo de tiempo. Precaución: Usar con cuidado, puede provocar mareos y dolores de cabeza.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Flor de Control de las Olas', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Permite controlar las olas y las corrientes marinas. Precaución: Usar con responsabilidad, puede tener consecuencias peligrosas si se usa mal.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Raíz de Velocidad Acuática', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Aumenta la velocidad de nado y la agilidad en el agua. Precaución: No consumir en exceso, puede provocar fatiga y calambres musculares.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Bayas de Visión Nocturna Acuática', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Otorga visión nocturna y mejora la percepción en la oscuridad bajo el agua. Precaución: No consumir en grandes cantidades, puede provocar sensibilidad a la luz durante el día.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Líquen de Piel de Pez', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Permite respirar bajo el agua y nadar como un pez. Precaución: Usar con cuidado, puede provocar cambios temporales en la piel.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Flor de Comunicación con Animales Marinos', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Permite comunicarse con los animales marinos. Precaución: Usar con respeto, no abusar de su capacidad.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Raíz de Cura Submarina', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Acelera la curación de heridas y la recuperación del cuerpo bajo el agua. Precaución: Evitar el contacto prolongado con la piel, puede causar picazón e irritación.', localizacion: 'EN COSTAS DE ARCADIA' },
    { nombre: 'Hongo de Sonidos del Mar', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Reproduce sonidos del mar y melodías relajantes. Precaución: Evitar el uso prolongado, puede provocar somnolencia y sueños vívidos.', localizacion: 'EN COSTAS DE ARCADIA' },
    // OCÉANO ESPIRITUAL ALTAMENTE PELIGROSO
    { nombre: 'Algas de Sombra', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Su contacto provoca la pérdida del alma en un instante. Precaución: Evitar a toda costa, no hay antídoto conocido.', localizacion: 'OCÉANO ESPIRITUAL' },
    { nombre: 'Flor de Olvido', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Su aroma induce al olvido total de la propia identidad. Precaución: No inhalar su aroma, puede causar amnesia permanente.', localizacion: 'OCÉANO ESPIRITUAL' },
    { nombre: 'Hongo de Pesadilla', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Su ingesta provoca pesadillas vívidas y atormentadoras que pueden llevar a la locura. Precaución: No consumir bajo ninguna circunstancia.', localizacion: 'OCÉANO ESPIRITUAL' },
    { nombre: 'Raíz de Desesperación', imageUrl: 'https://png.pngtree.com/background/20230401/original/pngtree-garden-plants-fantasy-background-picture-image_2250253.jpg', descripcion: 'Su contacto provoca una profunda desesperación y pérdida de voluntad de vivir. Precaución: Evitar a toda costa, no hay antídoto conocido.', localizacion: 'OCÉANO ESPIRITUAL' },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchText, setSearchText] = useState(''); // Nuevo estado para el texto de búsqueda

  const localizaciones = [...new Set(data.map(item => item.localizacion))];

  const filterByLocation = (location) => {
    const filtered = data.filter(item => item.localizacion === location);
    setFilteredData(filtered);
    setActiveFilter(location);
  };

  const resetFilter = () => {
    setFilteredData(data);
    setActiveFilter(null);
    setSearchText(''); // Limpiar el texto de búsqueda
  };

  // Nueva función de filtro por texto
  const filterByText = (text) => {
    const filtered = data.filter(item =>
      item.nombre.toLowerCase().includes(text.toLowerCase()) || // Filtrar por nombre
      item.descripcion.toLowerCase().includes(text.toLowerCase()) // Filtrar por descripción
    );
    setFilteredData(filtered);
    setActiveFilter(null); // Limpiar filtro activo cuando se busca por texto
  };

  // Nueva función para manejar cambios en el input de texto
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
    filterByText(e.target.value); // Llamar a la función de filtro por texto
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <button onClick={resetFilter} className={`botonReset ${activeFilter === null ? 'botonFiltroActivo' : ''}`}>
          Mostrar todos
        </button>
        {localizaciones.map((loc, index) => (
          <button
            key={index}
            onClick={() => filterByLocation(loc)}
            className={`botonFiltro ${activeFilter === loc ? 'botonFiltroActivo' : ''}`}
          >
            {loc}
          </button>
        ))}
      </div>
      {/* Input de texto para buscar */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={handleSearchInputChange}
        className="inputBusqueda"
      />
      <div className="flex flex-wrap justify-center">
        {filteredData.map((item, idx) => (
          <div key={idx} className="tarjetaPlanta">
            <h2 className="nombrePlanta">{item.nombre}</h2>
            <img src={item.imageUrl} alt={item.nombre} className="w-full h-48 object-cover mb-2 rounded-md" />
            <p className="descripcionPlanta">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogicaHerbolario;