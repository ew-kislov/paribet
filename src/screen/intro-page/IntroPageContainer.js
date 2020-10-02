import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markFinishedIntro } from '../../redux';
import { IntroPage } from "./IntroPage";

export const IntroPageContainer = () => {
    const imageScaleFactor = 0.8;
    const titles = [
        'Угадай исход предложенных матчей',
        'Обыграй своего соперника',
        'Займи высокое место в турнире',
        'Переходи в лигу выше',
        'Зарабывай достижения'
    ];
    const images = [
        {
            source: require('../../../assets/images/step_1.png'),
            height: 338 * imageScaleFactor,
            width: 312 * imageScaleFactor
        },
        {
            source: require('../../../assets/images/step_2.png'),
            height: 335 * imageScaleFactor,
            width: 284 * imageScaleFactor
        },
        {
            source: require('../../../assets/images/step_3.png'),
            height: 333 * imageScaleFactor,
            width: 301 * imageScaleFactor
        },
        {
            source: require('../../../assets/images/step_4.png'),
            height: 327 * imageScaleFactor,
            width: 347 * imageScaleFactor
        },
        {
            source: require('../../../assets/images/step_5.png'),
            height: 335 * imageScaleFactor,
            width: 294 * imageScaleFactor
        }
    ];

    const dispatch = useDispatch();
    const boundMarkFinishedIntro = bindActionCreators(markFinishedIntro, dispatch)

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        if (step === 5) {
            finishIntro()
        } else {
            setStep(step => step + 1)
        }
    }

    finishIntro = async () => {
        await boundMarkFinishedIntro();
    }

    return <IntroPage
        step={step}
        title={titles[step - 1]}
        image={images[step - 1].source}
        imageHeight={images[step - 1].height}
        imageWidth={images[step - 1].width}
        handleNextStep={handleNextStep}
        handleSkip={finishIntro}
    />
}