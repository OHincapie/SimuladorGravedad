import * as echarts from 'echarts';
import 'echarts-gl';
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import meteorito from '../assets/meteorito.png';
import stars from '../assets/starfield.jpg';

export const WorldApp = () => {
    const { planeta, gravedad } = useSelector(state => state.world);
    let stopInterval = false;
    const halfHeight = window.innerHeight / 2;
    const chartRef = useRef(null);
    const [activo, setActivo] = useState(true);
    const moverMeteorito = () => {
        let intervalId;
        setActivo(false);
        let cont = 0;
        intervalId = setInterval(() => {
            if (stopInterval) {
                clearInterval(intervalId);
            }
            cont++;
            document.querySelector('#meteorito') != null ? document.querySelector('#meteorito').style.top = cont + 'px' : clearInterval(intervalId);

            if (cont > halfHeight) {
                clearInterval(intervalId);
                setTimeout(() => {
                    document.querySelector('#meteorito').style.top = '1px';
                    moverMeteorito();
                    console.log(planeta);
                }, 2000);
            }
        }, 30 - gravedad );
    }

    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        const option = {
            backgroundColor: "#000",
            globe: {
                baseTexture: planeta,
                heightTexture: planeta,
                environment: stars,
                shading: "lambert",
                atmosphere: {
                    show: false
                },
                light: {
                    ambient: {
                        intensity: 0.1,
                    },
                    displacementQuality: "ultra",
                    main: {
                        intensity: 1
                    }
                },
                viewControl: {  // Agregar esta configuración para deshabilitar la rotación del mouse
                    autoRotate: true,
                },
                globeRadius: 30
            },
            series: []
        }

        option && myChart.setOption(option)

        return () => {
            myChart.dispose()
        }
    }, [])

    return (
        <>
            <div className="container-worlds">
                <Link to='/' onClick={() => { stopInterval = true }}>
                    <button className="boton-volver">
                        Volver
                    </button>
                </Link>
                <img src={meteorito} alt="" id="meteorito" />
                <h1 className='gravedad'>{gravedad}</h1>
                {activo && <button className="boton-simular" onClick={() => { moverMeteorito() }}>
                    Simular
                </button>}
                <div ref={chartRef} style={{ width: "100vw", height: "100vh" }}></div>
            </div>

        </>
    )
}
