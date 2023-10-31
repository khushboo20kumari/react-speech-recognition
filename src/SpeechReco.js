
import useClipboard from "react-use-clipboard"
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechReco() {

    const [capy, setCapy] = useClipboard("Text to copy")

    const { transcript, resetTranscript, startListening, stopListening } = useSpeechRecognition();

    const handleStart = () => {
        SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    }

    return (
        <>
            {/* 

            <center>
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <textarea value={transcript} /><br></br>
                        <button onClick={handleStart}>Start</button>
                        <button onClick={resetTranscript}>Clear</button>
                        <button onClick={stopListening}>Stop</button>
                        <button onClick={setCapy}>copy</button>
                        Was it copied? {capy ? "Yes! 👍" : "Nope! 👎"}
                    </div>
                </div>
            </center> */}


            <div className="card">
                <center>

                    <div className="card-body">
                        <div>
                            <textarea value={transcript} style={{ width: "40%" }} /><br></br>
                            <button className="btn btn-primary" onClick={handleStart}>Start</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={resetTranscript}>Clear</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={stopListening}>Stop</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={setCapy}>copy</button>
                            Was it copied? {capy ? "Yes! 👍" : "Nope! 👎"}
                        </div>



                    </div>
                </center>
            </div>



        </>
    );
}

export default SpeechReco;
