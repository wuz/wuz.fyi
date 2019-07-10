import { useRef, useEffect } from 'react';
const MAX_TILT = 5;
const PERSPECTIVE = 300;

const tilt = elem => {
  const getElemOffset = () => {
    var rect = elem.getBoundingClientRect();

    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
  };

  const getMousePositions = event => {
    if (typeof event === 'undefined') {
      const offset = getElemOffset();
      event = {
        pageX: offset.left + elem.offsetWidth / 2,
        pageY: offset.top + elem.offsetHeight / 2,
      };
    }
    return { x: event.pageX, y: event.pageY };
  };

  const getValues = mousePositions => {
    const offset = getElemOffset();
    const width = elem.offsetWidth;
    const height = elem.offsetHeight;
    const left = offset.left;
    const top = offset.top;
    const percentageX = (mousePositions.x - left) / width;
    const percentageY = (mousePositions.y - top) / height;
    const tiltX = (MAX_TILT / 2 - percentageX * MAX_TILT).toFixed(2);
    const tiltY = (percentageY * MAX_TILT - MAX_TILT / 2).toFixed(2);
    // angle
    const angle =
      Math.atan2(
        mousePositions.x - (left + width / 2),
        -(mousePositions.y - (top + height / 2)),
      ) *
      (180 / Math.PI);
    // Return x & y tilt values
    return {
      tiltX,
      tiltY,
      percentageX: percentageX * 100,
      percentageY: percentageY * 100,
      angle,
    };
  };

  const mouseMove = event => {
    const mousePositions = getMousePositions(event);
    const values = getValues(mousePositions);
    const transformValue = `perspective(${PERSPECTIVE}px) rotateX(${
      values.tiltY
    }deg) rotateY(${values.tiltX}deg) scale3d(1,1,1)`;
    requestAnimationFrame(() => {
      elem.style.transform = transformValue;
    });
  };

  const mouseLeave = () => {
    const transformValue = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    requestAnimationFrame(() => {
      elem.style.transform = transformValue;
    });
  };

  elem.addEventListener('mousemove', mouseMove);
  elem.addEventListener('mouseleave', mouseLeave);
};

export default tilt;

export const useTiltRef = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    if (imageRef.current) {
      tilt(imageRef.current);
    }
  });
  return imageRef;
};
