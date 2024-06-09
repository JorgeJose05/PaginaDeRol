const InfoRazas = (raza) => {
  let nomraza;
  //ventajas y deventajas
  let origen;
  let origenP;
  let cultura = "";
  let culturaP = "";
  let creencias = "";
  let creenciasP = "";
  let habilidades = "";
  let habilidadesP = "";
  let rel = "";
  let relP = "";
  let conflictos = "";
  let conflictosP = "";

  let contenidofinal = "";

  switch (raza.nombreRaza) {
    case "1":
      contenidofinal = (
        <>
          <h1>Humano</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li>Aceptado por todas las razas excepto Orcos.</li>
            <li>
              Posibilidad de acceder al mundo humano sin ser detectado como ser
              mágico.
            </li>
            <li>Empiezas con Amaestrar 1 y máximo Amaestrar 10.</li>
            <li>Conocimiento del mundo humano básico.</li>
            <li>Empiezas con 3000 Monedas</li>
            <li>
              Tienes vivienda propia durante el primer mes de juego.
              (Mantenimiento 200 monedas / mes.)
            </li>
            <li>Adeptos a la Fe.</li>
          </ul>

          <h2>Desventajas</h2>
          <ul>
            <li>No aceptado por los Orcos</li>
          </ul>
          <br />
          <h2>Origen</h2>
          <p>
            Los humanos de Arcadia destacan por ser los primeros seres mágicos
            del reino, marcando el inicio de la era de la magia. Se dice que su
            habilidad mágica les fue otorgada en los albores de los tiempos,
            convirtiéndolos en los pioneros de las artes mágicas. Esta antigua
            ascendencia confiere a los humanos un estatus único, siendo sus
            reyes descendientes directos de los primeros magos.
          </p>

          <br />
          <h2>Cultura</h2>
          <p>
            La cultura humana en Arcadia está profundamente influenciada por su
            herencia mágica. La práctica de la magia no solo es común sino que
            se considera un derecho de nacimiento para muchos, siendo un aspecto
            fundamental en su educación y cotidianidad. Los humanos han
            construido una sociedad que valora el conocimiento mágico,
            integrándose en aspectos tan variados como la medicina, la
            ingeniería y la defensa. Su capital y ciudades reflejan esta
            integración, con maravillas arquitectónicas que desafían la lógica,
            alimentadas y sostenidas por la magia.
          </p>
          <br />
          <h2>Creencias</h2>
          <p>
            Aunque los humanos de Arcadia no veneran la magia de la misma manera
            espiritual que los Elfos Arcanos, la respetan profundamente como un
            pilar de su civilización. Sus creencias se centran más en el
            potencial de la magia para mejorar la vida y en la responsabilidad
            de usarla sabiamente. Los reyes humanos, siendo descendientes de los
            primeros magos, son vistos no sólo como gobernantes sino como
            protectores de la herencia mágica.
          </p>
          <br />
          <h2>Habilidades</h2>
          <p>
            La magia en los humanos de Arcadia varía ampliamente, reflejando la
            diversidad y adaptabilidad inherente a su raza. Desde hechicería y
            conjuros hasta magia elemental y curativa, los humanos han
            desarrollado un espectro amplio de habilidades mágicas. Estas
            habilidades son honradas y cultivadas desde una edad temprana,
            asegurando que cada generación sea más fuerte que la anterior.
          </p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p>
            Los humanos de Arcadia generalmente mantienen relaciones cordiales
            con las demás razas, fomentando el comercio, el intercambio de
            conocimientos y alianzas. Sin embargo, tienen conflictos conocidos
            con los orcos, los cuales parecen ser la excepción a su naturaleza
            inclusiva. Esta animosidad se ha enraizado profundamente en su
            historia, marcando una de las pocas sombras sobre su disposición
            generalmente abierta y amistosa.
          </p>
          <br />
          <h2>Conflictos</h2>
          <p>
            Aparte de sus disputas con los orcos, los humanos de Arcadia
            enfrentan desafíos internos, principalmente relacionados con el uso
            indebido de la magia. Como guardianes de algunas de las formas de
            magia más poderosas y antiguas, se ven obligados a lidiar con
            aquellos que buscan abusar de este poder, ya sean de su propia raza
            o de otras. Los reyes humanos, en particular, asumen el papel de
            mediadores y protectores, asegurándose de que el legado mágico de
            Arcadia se preserve y se utilice para el bien.
          </p>
        </>
      );
      break;
    case "2":
      contenidofinal = (
        <>
          <h1>Enano</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "3":
      contenidofinal = (
        <>
          <h1>Elfo Arcano</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "4":
      contenidofinal = (
        <>
          <h1>Tabaxi</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "5":
      contenidofinal = (
        <>
          <h1>Centauro</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;
    case "6":
      contenidofinal = (
        <>
          <h1>Tiefling</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "7":
      contenidofinal = (
        <>
          <h1>Triton/Nereida</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "8":
      contenidofinal = (
        <>
          <h1>Gigante</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "9":
      contenidofinal = (
        <>
          <h1>Golem</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "10":
      contenidofinal = (
        <>
          <h1>Gnomo</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;

    case "11":
      contenidofinal = (
        <>
          <h1>Duende</h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
      break;
  }

  return <div>{contenidofinal}</div>;
};

export default InfoRazas;
/*
contenidofinal = (
        <>
          <h1></h1>
          <br />
          <h2>Ventajas</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Desventajas</h2>
          <ul>
            <li></li>
          </ul>
          <br />

          <h2>Origen</h2>
          <p></p>
          <br />
          <h2>Cultura</h2>
          <p></p>
          <br />
          <h2>Creencias</h2>
          <p></p>
          <br />
          <h2>Hablidades</h2>
          <p></p>
          <br />
          <h2>Relaciones con otras razas</h2>
          <p></p>
          <br />
          <h2>Conflictos</h2>
          <p></p>
          <br />
        </>
      );
*/
