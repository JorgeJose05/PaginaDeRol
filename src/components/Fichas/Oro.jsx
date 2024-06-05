import React from 'react'


function Oro() {

    const sumar = () => {



        
        var ultimo = 0;
        document.getElementById("input").value = 0;
        //document.getElementById("valor").textContent = "3000"; Esto cada vez que cambio se me vuelve a poner a 3000 esta mal

        document.getElementById("resta").addEventListener("click", function () {

            if (document.getElementById("input").value != 0) {

                document.getElementById("valor").textContent = Number(document.getElementById("valor").textContent) - Number(document.getElementById("input").value);
                ultimo = document.getElementById("input").value;

                document.getElementById("input").value = 0;

            } else {
                if (ultimo != 0) {
                    document.getElementById("valor").textContent = Number(document.getElementById("valor").textContent) - Number(ultimo);
                } else {
                    document.getElementById("valor").textContent = Number(document.getElementById("valor").textContent) - 1;
                }
            }

        });

        document.getElementById("suma").addEventListener("click", function () {

            if (document.getElementById("input").value != 0) {

                document.getElementById("valor").textContent = Number(document.getElementById("valor").textContent) + Number(document.getElementById("input").value);
                ultimo = document.getElementById("input").value;
                document.getElementById("input").value = 0;

            } else {
                if (ultimo != 0) {
                    document.getElementById("valor").textContent = Number(document.getElementById("valor").textContent) + Number(ultimo);
                } else {
                    document.getElementById("valor").textContent = Number(document.getElementById("valor").textContent) + 1;
                }
            }

        });
        
    };

    const restar = ()  => {
        
    }




        return (
            <div class="fichas-container">
                <h1 className='fichas-titulo'>ORO</h1>

                <div id="valor">0</div><br />
                <input type="number" id="input" name="oro" min="0" />
                <button className='fichas-button' id="resta" onClick={restar}>Restar</button>
                <button className='fichas-button' id="suma" onClick={sumar}>Sumar</button>


            </div>
        );
    };
    export default Oro;