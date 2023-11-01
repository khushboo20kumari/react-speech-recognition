
import useClipboard from "react-use-clipboard"
// import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function SpeechReco() {

    const [capy, setCapy] = useClipboard("Text to copy")

    const { transcript, resetTranscript, startListening, stopListening } = useSpeechRecognition();

    const handleStart = () => {
        SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    }



    return (
        <>


            <div className="container-fluid">
                <div className="card box">
                    <center>

                        <div className="card-body">

                            <p style={{ color: "white", fontSize: "30px" }} >Speech Recognition App</p>

                            <div className="box">
                                <textarea value={transcript} className="textarea" placeholder="Text Here....❤️ " /><br></br>

                                <button className="btn btn-outline-success" onClick={handleStart} style={{ marginTop: "30px" }}>Start</button>
                                <button style={{ marginLeft: "10px", marginTop: "30px" }} className="btn btn-outline-danger" onClick={resetTranscript}>Clear</button>
                                <button style={{ marginLeft: "10px", marginTop: "30px" }} className="btn btn-outline-info" onClick={stopListening}>Stop</button>
                                <button style={{ marginLeft: "10px", marginTop: "30px" }} className="btn btn-outline-warning" onClick={setCapy}>copy</button>
                                <p style={{ marginTop: "20px", color: "white" }}>{capy ? "Yes! 👍" : "Nope! 👎"}</p>
                                <p style={{ color: "white" }}>Khushboo kumari...📋 ❣️❣️</p>
                            </div>



                        </div>
                    </center>
                </div>

            </div>



        </>
    );
}

export default SpeechReco;
