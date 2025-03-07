// REACT
import * as React from 'react';
import classNames from 'classnames';
import {
    IconSVGProps,
    Scale,
    StyledIcon,
    DefaultColor,
    DefaultScale,
} from '../utils';

/* tslint:disable max-line-length */
export const QuestionOutline = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon question-outline', className)}
        scale={scale}
        $color={color}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="currentColor" fillRule="nonzero">
                <path d="M8 14.7A6.7 6.7 0 1 0 8 1.3a6.7 6.7 0 0 0 0 13.4zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                <path d="M10.5 6.171c0 .239-.027.449-.082.63a1.93 1.93 0 0 1-.231.499c-.1.152-.22.295-.36.429-.14.134-.299.273-.477.418-.11.094-.2.177-.272.25a.867.867 0 0 0-.257.461 1.503 1.503 0 0 0-.025.298.282.282 0 0 1-.283.282h-.906a.412.412 0 0 1-.413-.412c0-.188.017-.357.051-.505.035-.148.086-.284.154-.407a2.18 2.18 0 0 1 .252-.358c.1-.116.217-.235.354-.358l.339-.337c.116-.108.216-.222.298-.342a.738.738 0 0 0 .123-.429c0-.231-.067-.416-.2-.553-.134-.138-.317-.206-.55-.206-.287 0-.503.103-.646.309a1.32 1.32 0 0 0-.237.7L5.5 6.355c.041-.39.135-.734.282-1.03.148-.297.337-.543.57-.739.233-.195.496-.342.79-.44.295-.097.606-.146.935-.146.308 0 .607.042.898.125.291.083.55.213.776.39.225.178.407.404.544.679.137.275.205.6.205.977zm-1.499 4.798c0 .29-.096.533-.287.732a.945.945 0 0 1-.709.299.978.978 0 0 1-.703-.293 1.097 1.097 0 0 1-.22-.326 1.045 1.045 0 0 1 .21-1.129c.092-.094.2-.168.323-.222a.957.957 0 0 1 .775 0 1.1 1.1 0 0 1 .318.217c.093.09.165.199.216.326.051.126.077.258.077.396z" />
            </g>
        </svg>
    </StyledIcon>
);
