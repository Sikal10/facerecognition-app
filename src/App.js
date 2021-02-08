import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import ImageLink from "./components/ImageLink/ImageLink";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
    apiKey: "3942a03e5b60416590cec25c4d4282fa"
});


const particleOptions = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 200
            }
        }
    }
}

function App() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [box, setBox] = useState({});

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const onButtonSubmit = async () => {
        try {
            setImageUrl(input);
            console.log("click")
            const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <div className="app">
      <Particles className={"particles"} params={particleOptions} />
      <Header />
      <Logo />
      <Rank />
      <ImageLink onInputChange={handleChange} value={input} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
}

export default App;
