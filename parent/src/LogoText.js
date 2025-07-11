import React, { useEffect, useState } from "react";
import './LogoText.css';

const LogoText = () => {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);
  
  const strings = ['ASR Tech'];

  const resolver = {
    resolve: function (options, callback) {
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = { ...options, resolveString: resolveString };

      const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

      const randomCharacter = (characters) => characters[getRandomInteger(0, characters.length - 1)];

      const doRandomiserEffect = (options, callback) => {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;

        let iterations = options.iterations;

        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = { ...options, iterations: iterations - 1 };

            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }

            doRandomiserEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        }, timeout);
      };

      const doResolverEffect = (options, callback) => {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = { ...options, partialString: partialString };

        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = { ...options, offset: offset + 1 };

          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };

      doResolverEffect(combinedOptions, callback);
    }
  };

  useEffect(() => {
    const options = {
      offset: 0,
      timeout: 20,
      iterations: 10,
      characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', '!', '~', '`', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '\\', '||', ':', ';', '<', '>', '?', '/'],
      // characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
      resolveString: strings[counter],
      element: document.querySelector('[data-target-resolver]')
    };

    const callback = () => {
      setTimeout(() => {
        setCounter(prev => {
          const nextCounter = prev + 1;
          if (nextCounter >= strings.length) {
            return 0;
          }
          return nextCounter;
        });
      }, 1000);
    };

    resolver.resolve(options, callback);
    
  }, [counter]);

  return (
    <div className="container">
      <h1 className="heading" data-target-resolver>{text}</h1>
    </div>
  );
};

export default LogoText;
