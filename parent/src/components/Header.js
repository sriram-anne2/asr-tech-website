import React, { useEffect, useState } from 'react';
import '../LogoText.css';

const Header = () => {
  const [text, setText] = useState('');
  const [isResolved, setIsResolved] = useState(false); // 🆕 track when animation is done
  const displayText = 'ASR Tech';

  const resolver = {
    resolve: function (options, callback) {
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = { ...options, resolveString: resolveString };

      const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
      const randomCharacter = (characters) => characters[getRandomInteger(0, characters.length - 1)];

      const doRandomiserEffect = (options, callback) => {
        const { characters, timeout, element, partialString } = options;
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
          } else if (typeof callback === 'function') {
            callback();
          }
        }, timeout);
      };

      const doResolverEffect = (options, callback) => {
        const { resolveString, characters, offset } = options;
        const partialString = resolveString.substring(0, offset);
        const nextOptions = { ...options, partialString };

        doRandomiserEffect(nextOptions, () => {
          const newOffset = offset + 1;
          if (newOffset <= resolveString.length) {
            doResolverEffect({ ...options, offset: newOffset }, callback);
          } else if (typeof callback === 'function') {
            callback();
          }
        });
      };

      doResolverEffect(combinedOptions, callback);
    },
  };

  const runEffect = () => {
    setIsResolved(false); // reset pulse
    const options = {
      offset: 0,
      timeout: 20,
      iterations: 10,
      characters: 'abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]<>?'.split(''),
      resolveString: displayText,
      element: document.querySelector('[data-target-resolver]')
    };

    resolver.resolve(options, () => {
      setIsResolved(true); // 🆕 start pulse after resolving
    });
  };

  useEffect(() => {
    runEffect();
  }, []);

  return (
    <header className="container">
      <h1
        className={`heading ${isResolved ? 'pulse' : ''}`}
        data-target-resolver
        style={{ cursor: 'pointer' }}
        onClick={runEffect}
      >
        {text}
      </h1>
    </header>
  );
};

export default Header;
