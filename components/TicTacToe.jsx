import React, { useEffect, useRef, useState } from 'react';
import imageBoard from "./gameboard.png";
import cross from './ticCross.png';
import circle from './ticCircle.png';
import myTechPhoto from "../images/myTechphoto3.jpg"


const TicTacToe = () => {
  const [mouse, setMouse] = useState({
    x: undefined,
    y: undefined
  })
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    image7: null,
    image8: null,
    image9: null,
  });
  const [wonGame, setWonGame] = useState(false);

  const [boxValue, setBoxValue] = useState({
    pos1: undefined,
    pos2: undefined,
    pos3: undefined,
    pos4: undefined,
    pos5: undefined,
    pos6: undefined,
    pos7: undefined,
    pos8: undefined,
    pos9: undefined
  })
  // console.log( mouse);
  const [imageState, setImageState] = useState({
    pos1: false,
    pos2: false,
    pos3: false,
    pos4: false,
    pos5: false,
    pos6: false,
    pos7: false,
    pos8: false,
    pos9: false,
  });

  const [matchMouse, setMatchMouse] = useState(null);
  const [position, setPosition] = useState({
    pos1: false,
    pos2: false,
    pos3: false,
    pos4: false,
    pos5: false,
    pos6: false,
    pos7: false,
    pos8: false,
    pos9: false,
  });

  const [repeatPos, setRepeatPos] = useState({
    pos1: false,
    pos2: false,
    pos3: false,
    pos4: false,
    pos5: false,
    pos6: false,
    pos7: false,
    pos8: false,
    pos9: false,
  })
  const [keepData, setKeepData] = useState({
    pos1: false,
    pos2: false,
    pos3: false,
    pos4: false,
    pos5: false,
    pos6: false,
    pos7: false,
    pos8: false,
    pos9: false,
  });
  const [gameDraw, setGameDraw] = useState(false);

  const [gameMarkState, setGameMarkState] = useState(false);
  const canvasRef = useRef(null);
  const whoWonsTheGame = {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    // opacity:'.9',
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    zIndex: '10',
    // opacity:'.5',
    visibility: 'hidden',
    cursor: 'pointer'
  }

  const createCircle = (x, y, radius, ctx) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
  }

  const createImage = (ctx, image, x, y, width, height) => {
    ctx.drawImage(image, x, y, width, height);
  }

  const myTicPoints = (ctx, canvas) => {
    ctx.fillStyle = 'lightgreen'
    ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 200, 20, 20);
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 - 200, 20, 20);
    ctx.fillRect(canvas.width / 2 + 90, canvas.height / 2 - 200, 20, 20);
    ctx.fillRect(canvas.width / 2 + 220, canvas.height / 2 - 200, 20, 20);
    ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 50, 20, 20);
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 - 50, 20, 20);
    ctx.fillRect(canvas.width / 2 + 90, canvas.height / 2 - 50, 20, 20);
    ctx.fillRect(canvas.width / 2 + 220, canvas.height / 2 - 50, 20, 20);
    ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 + 95, 20, 20);
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 + 95, 20, 20);
    ctx.fillRect(canvas.width / 2 + 90, canvas.height / 2 + 95, 20, 20);
    ctx.fillRect(canvas.width / 2 + 220, canvas.height / 2 + 95, 20, 20);
    ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 + 220, 20, 20);
    ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 + 220, 20, 20);
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 + 220, 20, 20);
    ctx.fillRect(canvas.width / 2 + 90, canvas.height / 2 + 220, 20, 20);
    ctx.fillRect(canvas.width / 2 + 220, canvas.height / 2 + 220, 20, 20);
  }

  window.onmousemove = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });

    // console.log(mouse);
  }





  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = imageBoard;

    const crossImage = new Image();
    crossImage.src = cross;

    const CricleImage = new Image();
    CricleImage.src = circle;

    const gameImage = {
      player1: {
        image: crossImage,
        value: 1
      },
      player2: {
        image: CricleImage,
        value: 0
      }
    }
    // console.log(boxValue);
    const { pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9 } = boxValue;
    const WinsGame = () => {
      if ((pos1 != undefined && pos2 != undefined && pos3 != undefined && pos2 === pos1 && pos3 === pos1) ||
        (pos1 != undefined && pos4 != undefined && pos7 != undefined && pos4 === pos1 && pos7 === pos1) ||
        (pos1 != undefined && pos5 != undefined && pos9 != undefined && pos5 === pos1 && pos9 === pos1) ||
        (pos4 != undefined && pos5 != undefined && pos6 != undefined && pos5 === pos4 && pos6 === pos4) ||
        (pos7 != undefined && pos8 != undefined && pos9 != undefined && pos8 === pos7 && pos9 === pos7) ||
        (pos3 != undefined && pos5 != undefined && pos7 != undefined && pos5 === pos3 && pos7 === pos3) ||
        (pos3 != undefined && pos6 != undefined && pos9 != undefined && pos6 === pos3 && pos9 === pos3) ||
        (pos2 != undefined && pos5 != undefined && pos8 != undefined && pos5 === pos2 && pos8 === pos2)
      ) {
        setWonGame(true);
      }
    }
    WinsGame();

    if (isFinite(pos1) && isFinite(pos2) && isFinite(pos3) && isFinite(pos4) && isFinite(pos5) && isFinite(pos6) && isFinite(pos7) && isFinite(pos8) && isFinite(pos9) && isFinite(pos9)) {
      setGameDraw(true);
    }
    //1
    if (mouse.x > canvas.width / 2 - 200 && mouse.x < canvas.width / 2 - 60 && mouse.y > canvas.height / 2 - 200 && mouse.y < canvas.height / 2 - 50) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos1: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos1: false
        }
      })
    }
    //2
    if (mouse.x > canvas.width / 2 - 60 && mouse.x < canvas.width / 2 + 90 && mouse.y > canvas.height / 2 - 200 && mouse.y < canvas.height / 2 - 50) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos2: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos2: false
        }
      })
    }
    //3
    if (mouse.x > canvas.width / 2 + 90 && mouse.x < canvas.width / 2 + 220 && mouse.y > canvas.height / 2 - 200 && mouse.y < canvas.height / 2 - 50) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos3: true
        }
      })
    } else {
      // console.log('not on pos');
      setPosition((prevState) => {
        return {
          ...prevState,
          pos3: false
        }
      })
    }
    //4
    if (mouse.x > canvas.width / 2 - 200 && mouse.x < canvas.width / 2 - 60 && mouse.y > canvas.height / 2 - 50 && mouse.y < canvas.height / 2 + 95) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos4: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos4: false
        }
      })
    }
    //5
    if (mouse.x > canvas.width / 2 - 60 && mouse.x < canvas.width / 2 + 90 && mouse.y > canvas.height / 2 - 50 && mouse.y < canvas.height / 2 + 95) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos5: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos5: false
        }
      })
    }
    //6
    if (mouse.x > canvas.width / 2 + 90 && mouse.x < canvas.width / 2 + 220 && mouse.y > canvas.height / 2 - 50 && mouse.y < canvas.height / 2 + 95) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos6: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos6: false
        }
      })
    }
    //7
    if (mouse.x > canvas.width / 2 - 200 && mouse.x < canvas.width / 2 - 60 && mouse.y > canvas.height / 2 + 95 && mouse.y < canvas.height / 2 + 220) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos7: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos7: false
        }
      })
    }

    if (mouse.x > canvas.width / 2 - 60 && mouse.x < canvas.width / 2 + 90 && mouse.y > canvas.height / 2 + 95 && mouse.y < canvas.height / 2 + 220) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos8: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos8: false
        }
      })
    }

    if (mouse.x > canvas.width / 2 + 90 && mouse.x < canvas.width / 2 + 220 && mouse.y > canvas.height / 2 + 95 && mouse.y < canvas.height / 2 + 220) {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos9: true
        }
      })
    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          pos9: false
        }
      })
    }
    const Animate = () => {
      requestAnimationFrame(Animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let CrossCircle = gameMarkState ? gameImage.player2.image : gameImage.player1.image;
      let gamePoint = gameMarkState ? gameImage.player2.value : gameImage.player1.value;
      createImage(ctx, CrossCircle, mouse.x - 40, mouse.y - 40, 100, 100);
      document.onclick = () => {
        if (mouse.x > canvas.width / 2 - 200 && mouse.x < canvas.width / 2 + 220 && mouse.y < canvas.height / 2 + 200 && mouse.y > canvas.height / 2 - 220) {
          setGameMarkState(!gameMarkState);
          if (position.pos1) {
            if (!imageState.pos1) {
              console.log('on POs 1');
              setKeepData(prevData => { return { ...prevData, pos1: true } });
              setImageState(prevData => { return { ...prevData, pos1: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image1: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos1: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos2) {
            if (!imageState.pos2) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 2');
              setKeepData(prevData => { return { ...prevData, pos2: true } });
              setImageState(prevData => { return { ...prevData, pos2: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image2: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos2: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }


          if (position.pos3) {
            if (!imageState.pos3) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 3');
              setKeepData(prevData => { return { ...prevData, pos3: true } });
              setImageState(prevData => { return { ...prevData, pos3: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image3: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos3: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos4) {
            if (!imageState.pos4) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 4');
              setKeepData(prevData => { return { ...prevData, pos4: true } });
              setImageState(prevData => { return { ...prevData, pos4: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image4: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos4: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos5) {
            if (!imageState.pos5) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 5');
              setKeepData(prevData => { return { ...prevData, pos5: true } });
              setImageState(prevData => { return { ...prevData, pos5: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image5: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos5: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos6) {
            if (!imageState.pos6) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 6');
              setKeepData(prevData => { return { ...prevData, pos6: true } });
              setImageState(prevData => { return { ...prevData, pos6: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image6: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos6: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos7) {
            if (!imageState.pos7) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 7');
              setKeepData(prevData => { return { ...prevData, pos7: true } });
              setImageState(prevData => { return { ...prevData, pos7: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image7: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos7: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos8) {
            if (!imageState.pos8) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 8');
              setKeepData(prevData => { return { ...prevData, pos8: true } });
              setImageState(prevData => { return { ...prevData, pos8: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image8: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos8: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
          if (position.pos9) {
            if (!imageState.pos9) {
              setGameMarkState(!gameMarkState);
              console.log('on Pos 9');
              setKeepData(prevData => { return { ...prevData, pos9: true } });
              setImageState(prevData => { return { ...prevData, pos9: true } });
              setImages((prevState) => {
                return {
                  ...prevState,
                  image9: CrossCircle
                }
              });
              setBoxValue((prevState) => {
                return {
                  ...prevState,
                  pos9: gamePoint
                }
              })
            } else {
              setGameMarkState(gameMarkState);
            }
          }
        } else {
          console.log('Clicked ourside the surface of game')
        }
      }
      {
        if (keepData.pos1) {
          createImage(ctx, images.image1, canvas.width / 2 - 200 + 40, canvas.height / 2 - 200 + 40, 100, 100)
        }
        if (keepData.pos2) {
          createImage(ctx, images.image2, canvas.width / 2 - 60 + 40, canvas.height / 2 - 200 + 40, 100, 100)
        }
        if (keepData.pos3) {
          createImage(ctx, images.image3, canvas.width / 2 + 90 + 40, canvas.height / 2 - 200 + 40, 100, 100)
        }
        if (keepData.pos4) {
          createImage(ctx, images.image4, canvas.width / 2 - 200 + 40, canvas.height / 2 - 50 + 40, 100, 100)
        }
        if (keepData.pos5) {
          createImage(ctx, images.image5, canvas.width / 2 - 60 + 40, canvas.height / 2 - 50 + 40, 100, 100)
        }
        if (keepData.pos6) {
          createImage(ctx, images.image6, canvas.width / 2 + 90 + 40, canvas.height / 2 - 50 + 40, 100, 100)
        }
        if (keepData.pos7) {
          createImage(ctx, images.image7, canvas.width / 2 - 200 + 40, canvas.height / 2 + 90 + 40, 100, 100)
        }
        if (keepData.pos8) {
          createImage(ctx, images.image8, canvas.width / 2 - 60 + 40, canvas.height / 2 + 90 + 40, 100, 100)
        }
        if (keepData.pos9) {
          createImage(ctx, images.image9, canvas.width / 2 + 90 + 40, canvas.height / 2 + 90 + 40, 100, 100)
        }
      }
      // createCircle(mouse.x,mouse.y,50,ctx);
      createImage(ctx, image, canvas.width / 2 - 200, canvas.height / 2 - 200, 450, 450)
      ctx.font = '70px jokerman';
      ctx.textAlign = 'center';
      ctx.fillText('TIC TAC TOE', canvas.width / 2, 100)
      ctx.font = '20px Arial'
      ctx.textAlign = 'right';
      ctx.fillText('Powered by Anil Wagle', canvas.width - 100, canvas.height - 50)
      // myTicPoints(ctx, canvas);


    }
    Animate();
  }, [mouse, canvasRef]);

  const wonStyle = {
    visibility: 'hidden',
    textAlign: 'center',
    fontSize: '60px'
  }
  const drawStyle = {
    visibility: 'hidden',
    textAlign: 'center',
    fontSize: '60px'
  }

  // whoWonsTheGame.visibility = gameDraw ? 'visible': 'hidden';
  // whoWonsTheGame.visibility = wonGame ? 'visible': 'hidden';
  if (wonGame) {
    whoWonsTheGame.visibility = 'visible';
    wonStyle.visibility = 'visible';
  }
  else {
    wonStyle.visibility = 'hidden';
  }

  if (gameDraw) {
    whoWonsTheGame.visibility = 'visible';
    drawStyle.visibility = 'visible';
  }
  else {
    drawStyle.visibility = 'hidden';
  }

  const handleRestart = () => {
  }

  document.body.style.overflow = 'hidden';

  const canvasStyle = {
    display: 'block'
  }
  return (
    <>
      <canvas height={window.innerHeight} width={window.innerWidth} ref={canvasRef} style={canvasStyle}></canvas>
      <div className="whowonsthegame"
        style={whoWonsTheGame}>
        <div className="gamemessage"
          style={{
            height: '300px',
            width: '100%',
            backgroundColor: 'gray',
          }}>
          <h1 style={{ textAlign: 'center', fontSize: '60px' }}>TIC TAC TOE</h1>
          <h1 style={wonStyle}>{gameMarkState ? '(X) won The Game' : '(O) won the game'}</h1><br />
          <h1 style={drawStyle}>{gameDraw ? 'No one Wins The Game' : null}</h1>
          <form action="" onSubmit={handleRestart}>
            <button type='submit' className='btn btn-success' style={{
              height: '100px',
              width: '200px',
              fontSize: '40px',
              marginLeft: '50%',
              transform: 'translate(-100px)'
            }}>Restart</button>
          </form>
          {/* <h1>Please Refresh the Page to Resart the game </h1> */}
        </div>

      </div>
    </>
  )
}

export default TicTacToe