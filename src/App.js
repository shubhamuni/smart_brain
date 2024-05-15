import { useEffect, useState } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import FaceRecognition from './components/Face-Recognition/FaceRecognition';

function App() {
  const [ init, setInit ] = useState(false);
  const [input, setInput] = useState('');
  const [clarifaiData, setClarifaiData] = useState(null);

  const returnClarifaiJSONRequest = (imageurl) => {
    const PAT = '8768d5deea344d72aa5cb2d3aa849640';
    const USER_ID = 'shubhampatil';
    const APP_ID = 'smart';

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": imageurl
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };
    return {requestOptions};
  }
  const MODEL_ID = 'face-detection';
  const fetchClarifaiData = () => {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/outputs", returnClarifaiJSONRequest(input))
      .then(response => response.json())
      .then(result => {
        return (
          setClarifaiData(result),
          console.log(result)
        )
        
      })
      .catch(error => console.log('error', error));
  };

  const onInputChange = (event) => {
    setInput(event.target.value)
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
    console.log(container);
  };

  return (
    <div className="App">
    
    { init && <Particles className='particles'
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#1b4115",
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
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
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
    <Logo/>
    <Rank/>
    <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
    <FaceRecognition clarifaiData={clarifaiData}/>
    </div>
  );
}

export default App;
