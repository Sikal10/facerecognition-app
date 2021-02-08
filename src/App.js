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
    const [boxes, setBoxes] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

 const calculateFaceLocation = (data) => {
     const image = document.getElementById('inputimage');
     const width = Number(image.width);
     const height = Number(image.height);
     return data.outputs[0].data.regions.map(face => {
         console.log(face)
         const clarifaiFace = face.region_info.bounding_box;
         console.log(clarifaiFace)
         return {
             leftCol: clarifaiFace.left_col * width,
             topRow: clarifaiFace.top_row * height,
             rightCol: width - (clarifaiFace.right_col * width),
             bottomRow: height - (clarifaiFace.bottom_row * height)
         }
     });
 }

    // const calculateFaceLocation = (data)=> {
    //     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    //     const image = document.getElementById("inputimage");
    //     const width = Number(image.width);
    //     const height = Number(image.height);
    //     return {
    //         leftCol: clarifaiFace.left_col * width,
    //         rightCol: width - (clarifaiFace.right_col * width),
    //         topRow: clarifaiFace.top_row * height,
    //         bottomRow: height - (clarifaiFace.bottom_row * height)
    //     }
    // }

    const displayBox = (box) => {
        console.log(box)
        setBoxes(box)
    }

    const onButtonSubmit = async () => {
        try {
            setImageUrl(input);
            console.log("click")
            const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
                // displayBox(calculateFaceLocation(response))
                const res = calculateFaceLocation(response)
                displayBox(res)
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
      <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
    </div>
  );
}

export default App;
