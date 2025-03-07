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
export const StarOutline = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon star-outline', className)}
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
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <path
                    d="M7.494 12.536a1.15 1.15 0 0 1 1.01-.003l3.465 1.683-.59-3.773a1.15 1.15 0 0 1 .277-.942l2.518-2.83-3.56-.573a1.15 1.15 0 0 1-.849-.628L8 1.886 6.235 5.47a1.15 1.15 0 0 1-.85.628l-3.56.573 2.522 2.833c.225.253.327.593.279.929l-.546 3.783 3.414-1.68zm-3.096 2.972a1.15 1.15 0 0 1-1.646-1.196l.577-3.996L.673 7.33a1.15 1.15 0 0 1 .676-1.9l3.754-.603 1.865-3.789a1.15 1.15 0 0 1 2.064 0l1.865 3.789 3.754.603a1.15 1.15 0 0 1 .676 1.9l-2.653 2.982.623 3.987a1.15 1.15 0 0 1-1.638 1.212l-3.657-1.776-3.604 1.773z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
