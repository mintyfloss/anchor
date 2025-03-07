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
export const Cut = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon cut', className)}
        scale={scale}
        $color={color}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M13.524 13.604a1.886 1.886 0 0 1-1.706 1.087c-.434 0-.82-.15-1.197-.433-.433-.327-.72-.838-.72-1.387-.019-1.232.866-2.103 1.923-2.103.293 0 .58.072.847.21.453.235.796.635.956 1.133a1.991 1.991 0 0 1-.103 1.493m-4.56-3.877l-.273-.636 3.23-7.59c.215.177.438.499.508 1.1.204 1.736-1.038 4.854-3.465 7.126m-1.928.006c-2.42-2.272-3.675-5.39-3.47-7.131.075-.602.292-.924.515-1.101l3.222 7.597.58 1.362a10.042 10.042 0 0 1-.847-.727M5.03 14.48c-.268.138-.555.21-.848.21a1.88 1.88 0 0 1-1.706-1.087c-.472-.963-.09-2.142.853-2.626.267-.138.548-.21.847-.21.726 0 1.382.419 1.706 1.087.472.97.083 2.148-.852 2.626m9.806-2.783a3.236 3.236 0 0 0-1.598-1.893 3.084 3.084 0 0 0-2.4-.19c1.986-2.33 3.094-5.173 2.86-7.17-.154-1.297-.874-2.181-1.976-2.43a.632.632 0 0 0-.719.38l-3 7.066L4.998.395a.632.632 0 0 0-.72-.38c-1.102.249-1.82 1.133-1.974 2.43-.236 1.997.872 4.84 2.86 7.17a3.127 3.127 0 0 0-2.356.163C1.4 10.474.66 12.204 1.15 13.729 1.591 15.11 2.807 16 4.182 16c.49 0 .968-.118 1.414-.346a3.125 3.125 0 0 0 1.395-1.415l.096-.197.91-1.925.911 1.919.101.21A3.16 3.16 0 0 0 11.82 16c1.21 0 2.304-.694 2.846-1.807.375-.786.44-1.67.171-2.495"
                    id="cut-a"
                />
            </defs>

            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill="currentColor" xlinkHref="#cut-a" />
            </g>
        </svg>
    </StyledIcon>
);
