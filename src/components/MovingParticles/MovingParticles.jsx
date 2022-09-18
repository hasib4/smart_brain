import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const MovingParticles = () => {
    const options = useMemo(() => {
        return {
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 60,
                        duration: 0.8,
                    },
                },
            },
            number: {
                density: {
                    enable: true,
                    area: 100,
                },
                value: 200,
            },
            particles: {
                links: {
                    enable: true,
                },
                move: {
                    enable: true,
                }
            }
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles 
            init={particlesInit} 
            options={options}
        />
    );
};

export default MovingParticles;