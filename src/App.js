import { useEffect, useState } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import FaceRecognition from './components/Face-Recognition/FaceRecognition';
import Signin from './components/SignIn/Signin';

function App() {
  const [ init, setInit ] = useState(false);
  const [input, setInput] = useState(''); 
  const [box, setBox] = useState({})
  const [route, setRoute] = useState("signin")

const calculateFaceLocation = (data) => {
  const clarifaiFace = data;
  const image = document.getElementById("inputImage");
  const width = Number(image.width);
  const height = Number(image.height);
  // console.log(width,height)
  return{
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width-(clarifaiFace.right_col * width),
    bottomRow:height-(clarifaiFace.bottom_row * height)
  }
}
const displayFaceBox = (box) => {
  console.log(box);
  setBox(box);
}


  const PAT = '2b3660cd318c43ceb89a3440829fe8ba';
  const USER_ID = 'shubhampatil';
  const APP_ID = 'smart';
  const IMAGE_URL = input;

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Authorization': 'Key ' + PAT
    //   },
    //   body: raw
    // };
  const MODEL_ID = 'face-detection';
  const fetchClarifaiData = () => {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result)
          // setClarifaiData(result)
        //   const regions = result.outputs[0].data.regions;
        //   regions.forEach(region => {
        //     // Accessing and rounding the bounding box values
        //     const boundingBox = region.region_info.bounding_box;
        //     // const topRow = boundingBox.top_row.toFixed(3);
        //     // const leftCol = boundingBox.left_col.toFixed(3);
        //     // const bottomRow = boundingBox.bottom_row.toFixed(3);
        //     // const rightCol = boundingBox.right_col.toFixed(3);
        //     // region.data.concepts.forEach(concept => {
        //     //     // Accessing and rounding the concept value
        //     //     const name = concept.name;
        //     //     const value = concept.value.toFixed(4);
        //     //   });
              displayFaceBox(calculateFaceLocation(result.outputs[0].data.regions[0].region_info.bounding_box));
        // })
      })
      .catch(error => console.log('error', error));
  };

  const onInputChange = (event) => {
    setInput(event.target.value)
    // console.log(event.target.value)
    
  };

  const onButtonSubmit = () => {
    fetchClarifaiData();
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const onRouteChange = () => {
    setRoute("home");
    console.log(route)
  }
  return (
    <div className="App">  
    { init && <Particles className='particles'
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#b5b814",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        repulse: {
                            distance: 120,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#f4f4f4",
                    },
                    links: {
                        color: "#262618",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 5,
                        straight: false,
                        attract: {
                          enable: true,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 100,
                        },
                        value: 290,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    }, 
                },
                detectRetina: true,
            }}
        /> 
    }
    <Navigation/>
    {
    route === "signin" ? <Signin onRouteChange={onRouteChange}/> 
    :
    <div>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      <FaceRecognition box={box} clarifaiData={input}/>
    </div>
    }
    </div>
  );
}

export default App;
