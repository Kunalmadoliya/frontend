import React, {useEffect, useRef} from "react";
import * as faceapi from "face-api.js";
export default function FacialExpression() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const handleVideoPlay = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions({
            inputSize: 224,
            scoreThreshold: 0.4,
          })
        )
        .withFaceExpressions();

      if (detections.length > 0) {
        const expression = detections[0].expressions;
        const maxValue = Math.max(...Object.values(expression));

        const maxExpression = Object.keys(expression).find(
          (key) => expression[key] === maxValue
        );

        console.log(maxExpression);
      } else {
        console.log("No face detected");
      }
    }, 1000);
  };

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({video: true})
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    loadModels().then(startVideo);
  }, []);

  return (
    <div style={{position: "relative"}}>
      <video
        ref={videoRef}
        autoPlay
        muted
        onPlay={handleVideoPlay}
        style={{width: "720px", height: "560px"}}
      />
    </div>
  );
}
