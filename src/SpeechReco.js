
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
                            <button className="btn btn-primary" onClick={handleStart}>Start</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={resetTranscript}>Clear</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={stopListening}>Stop</button>
                            <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={setCapy}>copy</button>
                            {capy ? "Yes! 👍" : "Nope! 👎"}
                        </div>



                    </div>
                </center>
            </div>



        </>
    );
}

export default SpeechReco;
