import React, {useEffect, useRef} from "react";
import * as faceapi from "face-api.js";

import axios from 'axios';

export default function FacialExpression() {
  const videoRef = useRef();

  const handleVideoPlay = async () => {
    if (!videoRef.current) return;

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
      axios
        .get(`http://localhost:3000/songs?mood=${maxExpression}`)
        .then((response) => {
          console.log(response.data);
        });
    } else {
      console.log("No face detected");
    }
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
    <div className="border  h-screen flex justify-center  w-full">
      <div className="flex items-center gap-10">
        <video
          className="border object-cover h-70 rounded-lg"
          ref={videoRef}
          autoPlay
          muted
        />
        <button
          className="border p-5 cursor-pointer rounded-md font-medium"
          onClick={handleVideoPlay}
        >
          Detect Mood
        </button>
      </div>
    </div>
  );
}
