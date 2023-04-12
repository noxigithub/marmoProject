import React, { useRef, useState } from 'react';
import QuestionCard from '../components/questionCard.js';
import NavBar from './navBar';
import axios from 'axios';
import { LoginContext } from '../helpers/context';
import { useNavigate } from 'react-router-dom';




const DocumentsHome = () => {

    //Validación del login
    /*
    const navigate = useNavigate();
    const {connected,setConnected} = useContext(LoginContext);

    useEffect(()=>{

        console.log('state changed '+ connected.toString());
        if(!connected){
           navigate("/login");
        }

    },[connected]);
*/

    //Variable to check if all the questions have been answered
    const [questionsValues, setquestionValues] = useState([]);

    //Variable to notify if there are pending questions to answer
    const [alert, setAlert] = useState(false);


    //Variable to check if all the questions have been answer and change enable the button
    const [questionsDone, setquestionsDone] = useState(false);

    const questions = [
        '1. Ciudad donde resides',
        '2. Fecha en la que presentarás la solicitud ',
        '3.	Nombre del funcionario al que diriges la solicitud (OPCIONAL)',
        '4.	Cargo del funcionario al que diriges la solicitud',
        '5.	Dirección de la entidad a la que diriges la solicitud',
        '6.	Correo electrónico de la entidad a la que diriges la solicitud',
        '7.	Ciudad donde se ubica la entidad a la que diriges la solicitud',
        '8.	Tu nombre completo',
        '9.	Tipo de identificación. Ejemplo: Cédula de ciudadanía, pasaporte, cédula de extranjería.',
        '10. Tu número de identificación',
        '11. ¿En qué calidad actúas? (contribuyente, heredero, administrador, propietario)',
        '12. Número de ficha catastral del bien inmueble',
        "13.Año en el que inicia el cobro o el año más antiguo de la factura del impuesto predial.", "14.	Nombre del titular del cobro, propietario del bien inmueble",
        "15. Número de liquidación o título ejecutivo en el que se declara moroso al contribuyente.",
        "16. Fecha de la liquidación oficial o título ejecutivo",
        "17. Valor de la liquidación oficial en números.",
        "18. Indicar la forma como fue notificada la liquidación. Ejemplo: de forma personal, por página web de la administración o por correo certificado. Si la liquidación oficial no fue notificada, por favor indícalo.",
        "19. Número del mandamiento de pago.",
        "20. Fecha de la resolución de mandamiento de pago.",
        "21. Tu correo electrónico", "22.	Tu dirección física", "23.	Tu número de teléfono",
    ];

    const questionsRef = useRef([]);
    questionsRef.current = [];


    const handleRefs = (el) => {
        console.log('Referencia changed');
        if (el && !questionsRef.current.includes(el)) {
            questionsRef.current.push(el);
        }
    }

    let timer;
    const handleKeyPress = () => {
        /*
        clearTimeout(timer);
        */
    }

    const handleKeyUp = (el) => {
        /*
        clearTimeout(timer);
        timer = setTimeout(() => {

            setquestionValues(questionsValues => [...questionsValues, el.target.value]);

            if ((questionsValues.length + 1) === 1) {
                setquestionsDone(true);
            }

        }, 3000);
        */
    }

    const handleAnswers = async () => {

        questionsRef.current.map(element => {
            if (element.value !== "") {
                setquestionValues(questionsValues => [...questionsValues, element.value])
            }
        });
        if (questionsValues.length + 1 < 22) {
            setAlert(true);
            setTimeout(() => { setAlert(false) }, 5000);
        } else {

            let data = {
                'documentType': 'prescripcionPredial',
                'answers': questionsValues
            };
            console.log(data);
            try {
                const res = await axios.post("http://localhost/marmoProject/backend/documents/docsController.php",data,{
                    responseType: 'arraybuffer',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/pdf'
                      }

                },);
                
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'prescripcionPredial.pdf');
                document.body.appendChild(link);
                link.click();
               /* var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
                win.document.body.innerHTML = res.data;*/
                console.log(res);
                setquestionValues([]);
            } catch (err) {
                console.log('error in the login' + err);
            }

            //console.log(questionsValues);
        }
    }


    return (

        <div className='bg-dark'>
            <NavBar origin="documents"/>
            <div id="documentsContainer" className='container-fluid'>
                <div className='row'>

                    <div className='col-4 bg-secondary questionsHelp p-5 text-light'>
                       La idea es que aquí vaya una guía para cada pregunta 
                    </div>

                    <div className='col-8'>
                        <h1 className='mt-2 mb-2 text-light'>Prescripción Predial</h1>
                        {alert && <div className="alert alert-warning" role="alert">
                            Aun tienes preguntas pendientes
                        </div>}
                        <div className='row'>



                            <div id="carouselExampleControls" className="carousel slide bg-primary" data-bs-ride="false" >
                                <div className="carousel-inner">

                                    {questions.map((question, index) => {
                                        return (
                                            <div key={index} className={index === 0 ? 'active carousel-item' : 'carousel-item'}>
                                                <QuestionCard 
                                                questionNumber={index+1} 
                                                totalQuestions={questions.length} 
                                                keyDOWN={handleKeyPress} 
                                                keyUP={handleKeyUp} 
                                                question={question} 
                                                reference={handleRefs} />
                                            </div>);
                                    })}

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        <div className='row'>
                            <div className=' mb-3 mt-4 col-4 text-center offset-4'>
                                <button onClick={handleAnswers} className={questionsDone ? 'btn btn-primary' : 'btn btn-secondary'}>Solicitar documento</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DocumentsHome;