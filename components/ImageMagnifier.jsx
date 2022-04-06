import React from 'react';
import { useRef ,useState } from 'react';
import myImage from '../images/image3.jpg'

const ImageMagnifier = () => {
    const [bounds,setBounds] = useState('');
    const [position,setPosition] = useState({
        positionLeft:'',
        positionTop:'',
    });
    const [pos,setPos] = useState({
        x:'',
        y:''
    })
    const imgRef = useRef();
    const lensRef = useRef();

    let ZoomRatio = 3;

    const styleLens = {
        backgroundImage:`url(${myImage})`,
        backgroundSize: `${bounds.width * ZoomRatio}px ${bounds.height* ZoomRatio}px`,
        left:position.positionLeft+'px',
        top:position.positionTop+'px',
        backgroundPosition:`-${pos.x * ZoomRatio}px -${pos.y * ZoomRatio}px`,
    }
    const handleMouseMove =()=> {
        let pos = getCursor();
        console.log(pos);
        let postitionLeft = pos.x - lensRef.current.offsetWidth / 2;
        let positionTop = pos.y - lensRef.current.offsetHeight / 2;

        if(postitionLeft < 0){
            postitionLeft = 0
        }
        if(positionTop < 0){
            positionTop = 0;
        }

        if(postitionLeft > bounds.width - lensRef.current.offsetWidth/3){
            postitionLeft = bounds.width -lensRef.current.offsetWidth/3
        }
        if(positionTop > bounds.height - lensRef.current.offsetHeight/3){
            positionTop = bounds.height -lensRef.current.offsetHeight/3
        }
        setPosition({
            positionLeft:postitionLeft,
            positionTop:positionTop
        })

        
    }
    console.log(position);
    const getCursor =()=> {
        let e = window.event;
        setBounds(imgRef.current.getBoundingClientRect())
        console.log('e',e);
        console.log('bounds',bounds);
        let x = e.pageX - bounds.left;
        let y = e.pageY - bounds.top;
        setPos({
            x:x,
            y:y
        })
        return {
            'x':x,
            'y':y
        }
    }

    console.log(pos);
  return (
    <>
    <h1>Image Magnifier Practice React</h1>
    <div className="img_container">
        <div className="main_container">
            <div className='myLens' onMouseMove={handleMouseMove} style={styleLens} ref={lensRef}></div>
            <img src={myImage} alt="photo1" onMouseMove={handleMouseMove} onTouchMove={handleMouseMove} ref={imgRef}/>
        </div>
    </div>
    </>
  )
}

export default ImageMagnifier