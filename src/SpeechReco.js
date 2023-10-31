
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



            <div className="card">
                <center>

                    <div className="card-body">
                        <div className="box">
                            <textarea value={transcript} className="textarea" placeholder="Text Here...."/><br></br>
                            <button className="btn btn-success" onClick={handleStart}>Start</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={resetTranscript}>Clear</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={stopListening}>Stop</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-light" onClick={setCapy}>copy</button>
                            {capy ? "Yes! 👍" : "Nope! 👎"}
                        </div>



                    </div>
                </center>
            </div>



        </>
    );
}

export default SpeechReco;
