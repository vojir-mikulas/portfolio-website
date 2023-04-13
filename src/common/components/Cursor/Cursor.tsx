import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion,} from "framer-motion";


const Cursor = () => {
    const cursorSize = 30;
    const {x, y} = useMousePosition();
    const mouseClicked = useMouseClick();
    const mouseHovering = useMouseHover('.interactable');
    const cursorHidden = useMouseHover('.cursorHidden');
    const [cursorVariant, setCursorVariant] = useState<string>('default');

    const cursorVariants = {
        default: {
            scale: 1,
            opacity: 1,
            mixBlendMode: 'difference',
            width: cursorSize,
            height: cursorSize,

            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15
                },
                type: "spring",
                mass: 0.2,
                stiffness: 100
            }
        },
        hover: {
            scale: 1.5,
            opacity: 1,
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15,
                    type: "spring",
                },
                type: "spring",
                stiffness: 500,
                damping: 28
            }
        },
        hoverClick: {
            scale: 2,
            opacity: 1,
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15,
                    type: "spring",
                },
                type: "spring",
                stiffness: 500,
                damping: 28
            }
        },
        click: {
            scale: 1.5,
            opacity: 1,
            mixBlendMode: 'difference',
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15,
                    type: "spring",
                },
                type: "spring",
                mass: 0.2,
                stiffness: 100
            }
        },
        hidden:{
            scale: 0,
            opacity: 0,
            mixBlendMode: 'difference',
            width: cursorSize,
            height: cursorSize,
            x: x - (cursorSize / 2),
            y: y - (cursorSize / 2),
            transition: {
                scale: {
                    duration: 0.15
                },
                type: "spring",
                mass: 0.2,
                stiffness: 100
            }
        }
    }
    const circleVariants = {
        default: {
            border: '1px solid white'
        },
        click: {
            border: '1px solid white'
        },
        hidden: {
            border: '1px solid white'
        }
    }

    useEffect(() => {
        if (cursorHidden) {
            setCursorVariant('hidden');
        } else if (mouseHovering && mouseClicked) {
            setCursorVariant('hoverClick');
        } else if (mouseClicked) {
            setCursorVariant('click');
        } else if (mouseHovering) {
            setCursorVariant('hover');
        } else {
            setCursorVariant('default');
        }
    }, [mouseClicked, mouseHovering, cursorHidden]);

    return (
        <AnimatePresence>
            { /* @ts-ignore */}
            <motion.div variants={cursorVariants}
                        animate={cursorVariant}
                        className={`fixed z-[9230] top-0 left-0 pointer-events-none cursor rounded-full tablet:hidden`}
            >
                { /* @ts-ignore */}
                <motion.div variants={circleVariants}
                            className={`z-[9230] w-full h-full absolute  backdrop-invert grayscale rounded-full tablet:hidden`}/>
            </motion.div>

        </AnimatePresence>
    );
};

const useMouseClick = () => {
    const [isMouseClick, setIsMouseClick] = useState(false);

    useEffect(() => {
        const handleMouseDown = () => setIsMouseClick(true);
        const handleMouseUp = () => setIsMouseClick(false);

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return isMouseClick;
};

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
};

const useMouseHover = (id: string) => {
    const [isMouseHovering, setIsMouseHovering] = useState(false);

    useEffect(() => {
        const handleMouseHover = (event) => {
            const interactable = event.target.closest(id);
            setIsMouseHovering(interactable !== null);
        };

        window.addEventListener('mousemove', handleMouseHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseHover);
        };
    }, []);

    return isMouseHovering;
};


export default Cursor;