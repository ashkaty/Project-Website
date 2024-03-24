import React from 'react';
import KeyComponent from './Key';



function KeyBoard(){
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    const [pressedKeys, setPressedKeys] = React.useState({});

    React.useEffect(() => {
        const handleKeyDown = (e) => {
          const pressedKey = e.key.toUpperCase();
          setPressedKeys({...pressedKeys, [pressedKey]:true});
          console.log(`You pressed ${pressedKey}`);
        };
    
        const handleKeyUp = (e) => {
          const releasedKey = e.key.toUpperCase();
          setPressedKeys({...releasedKey, [releasedKey]:false});
        };
    
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keyup', handleKeyUp);
        };
      }, []);



    return (
        <div>
            {keys.map((key) => {
                return(<KeyComponent label = {key} isPressed = {pressedKeys[key]} />)
            })}

        </div>
    );
}
export default KeyBoard;