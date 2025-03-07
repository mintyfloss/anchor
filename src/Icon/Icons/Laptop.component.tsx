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
export const Laptop = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon laptop', className)}
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
                    d="M14.667 13.203a.671.671 0 0 1-.671.67H2.005a.67.67 0 0 1-.671-.67v-1.324c0-.371.3-.671.67-.671h4.267v.666c0 .367.3.667.667.667h2.667c.366 0 .666-.3.666-.667v-.666h3.725c.37 0 .67.3.67.67v1.325zm-12-9.993c0-.37.299-.67.669-.67h9.329c.369 0 .669.3.669.67v5.995c0 .18-.073.34-.188.46a.664.664 0 0 1-.481.209H3.336a.667.667 0 0 1-.482-.208.667.667 0 0 1-.187-.461V3.21zm12 6.456h-.121V2.333c0-.734-.6-1.334-1.334-1.334H2.546c-.734 0-1.334.6-1.334 1.334v7.333l.002.012A1.334 1.334 0 0 0 0 10.998v2.668c0 .733.6 1.333 1.334 1.333h13.333c.733 0 1.333-.6 1.333-1.333v-2.667c0-.733-.6-1.333-1.333-1.333zM4.785 4.534l6.43-.002v3.333h-6.43v-3.33zM4.145 9.2h7.71c.357 0 .645-.3.645-.669V3.868a.657.657 0 0 0-.645-.669l-7.71.002a.656.656 0 0 0-.645.668l.001 4.661c0 .37.288.67.644.67z"
                    id="laptop-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill="currentColor" xlinkHref="#laptop-a" />
            </g>
        </svg>
    </StyledIcon>
);
