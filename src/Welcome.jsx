import React from 'react';
import utils from './utils';
import { useIntl } from "react-intl";

const Welcome = () => {

    const translate = useIntl();
    const translatedMessage = utils.translateKey(translate, 'header');

    return (
        <div>
            <h1>{translatedMessage}</h1>
        </div>
    )
}

export default Welcome;