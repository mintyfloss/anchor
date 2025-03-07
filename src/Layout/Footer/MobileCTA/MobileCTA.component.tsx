// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import classNames from 'classnames';
// COMPONENTS
import { Typography } from '../../../Typography';

const StyledMobileCTAElement = styled('a')`
    box-sizing: border-box;
    cursor: pointer;
    min-width: 250px;
    display: inline-block;
    .cta-caption {
        margin: 1rem 0 0.5rem;
        line-height: 0.5rem;
    }
`;

interface MobileCTAProps {
    className?: string;
    href?: string;
}

/* tslint:disable max-line-length */
const MobileCTAImage = () => (
    <svg
        width="64px"
        height="64px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <circle id="app-dl-path-1" cx="32" cy="32" r="32" />
            <polygon
                id="app-dl-path-3"
                points="3.17682895e-20 0.0666753015 3.17682895e-20 46.3103205 28.8347517 46.3103205 28.8347517 0.0666753015 0 0.0666753015"
            />
            <polygon
                id="app-dl-path-5"
                points="23.5117697 0.21238419 0.246128136 0.21238419 0.246128136 37.0848289 23.5117697 37.0848289 23.5117697 0.21238419"
            />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Illustrations-/-Grey-Circle-/-Hand-Holding-Phone">
                <g id="app-dl-asset-0">
                    <g>
                        <mask id="app-dl-mask-2" fill="white">
                            <use xlinkHref="#app-dl-path-1" />
                        </mask>
                        <use
                            id="app-dl-asset-13"
                            fill="#F1F1F1"
                            xlinkHref="#app-dl-path-1"
                        />
                        <g id="phone-and-hand" mask="url(#app-dl-mask-2)">
                            <g transform="translate(15.040000, 10.560000)">
                                <g
                                    id="hand"
                                    strokeWidth="1"
                                    fill="none"
                                    transform="translate(0.000000, 33.868290)"
                                >
                                    <mask id="app-dl-mask-4" fill="white">
                                        <use xlinkHref="#app-dl-path-3" />
                                    </mask>
                                    <g id="app-dl-asset-12" />
                                    <path
                                        d="M28.3268731,6.8442934 C29.3576849,4.58295201 28.5003355,0.179072646 28.5003355,0.179072646 L15.7977333,0.0666753015 L16.7945559,3.35124018 L3.32426559,3.34017516 L4.46407742,14.9194311 L-0.000234408602,46.2893552 L25.4758785,46.3103205 L20.3265075,17.2227031 L20.4571903,15.3323312 C20.856271,14.9753386 27.2315989,9.24715062 28.3268731,6.8442934"
                                        id="app-dl-asset-11"
                                        fill="#DDAE7C"
                                        mask="url(#app-dl-mask-4)"
                                    />
                                </g>
                                <path
                                    d="M30.4486812,6.44053652 C32.4804177,5.26531454 34.0480253,6.74336874 34.0480253,6.74336874 C34.8872081,7.58664001 34.8414984,8.8247579 33.8083425,10.1001475 C32.7019339,11.4652219 28.6419769,15.9005493 28.6419769,15.9005493 C27.7934177,16.735085 26.4250575,16.7275142 25.5852887,15.8842429 L24.4109016,14.4195832 C23.5717188,13.576312 23.5787511,12.2164788 24.4273102,11.3825255 C24.4273102,11.3825255 28.7615253,7.41658807 30.4486812,6.44053652"
                                    id="app-dl-asset-10"
                                    fill="#DDAE7C"
                                />
                                <path
                                    d="M26.7635435,40.6000113 L8.06945753,40.5848697 C6.81947366,40.5837049 5.79803817,39.5663051 5.79862419,38.324693 L5.82558118,5.98337633 C5.82675323,4.74118185 6.8505328,3.72611153 8.09993065,3.7266939 L26.7946027,3.74241788 C28.0440005,3.74358262 29.066022,4.76040005 29.06485,6.00259453 L29.037893,38.3433289 C29.036721,39.5855233 28.0135274,40.601176 26.7635435,40.6000113"
                                    id="app-dl-asset-9"
                                    fill="#3F3F3F"
                                />
                                <g
                                    id="phone"
                                    strokeWidth="1"
                                    fill="none"
                                    transform="translate(5.555484, 0.090850)"
                                >
                                    <mask id="app-dl-mask-6" fill="white">
                                        <use xlinkHref="#app-dl-path-5" />
                                    </mask>
                                    <g id="app-dl-asset-8" />
                                    <path
                                        d="M20.9303441,37.084828 L2.79708065,37.0696864 C1.39297312,37.0685217 0.244956989,35.9259124 0.246129032,34.5305547 L0.273086022,2.74714813 C0.274258065,1.35179043 1.42403226,0.210928266 2.82813978,0.212093006 L20.9614032,0.227234617 C22.3655108,0.228399356 23.5129409,1.37100863 23.5117688,2.76636633 L23.4853978,34.5497729 C23.4842258,35.9451306 22.3344516,37.0859928 20.9303441,37.084828"
                                        id="app-dl-asset-7"
                                        fill="#1C1C1C"
                                        mask="url(#app-dl-mask-6)"
                                    />
                                </g>
                                <polygon
                                    id="app-dl-asset-6"
                                    fill="#602D6C"
                                    points="26.8972222 32.8598145 7.82222222 32.8440905 7.84683513 3.55555556 26.9218351 3.55555556"
                                />
                                <path
                                    d="M17.4222222,17.2609404 C18.0612822,15.4428 18.6438521,13.7015718 18.9789625,12.6881984 C20.3674513,12.5224017 21.0793651,12.9690914 21.0793651,14.0537538 C21.0793651,15.1115694 20.2139968,16.1578663 18.3801158,16.8878978 C18.0355178,17.0250339 17.7124192,17.1502884 17.4222222,17.2609404 M15.0058249,20.5476333 C14.2963298,22.0562077 13.8581683,22.6918854 13.3000159,22.7811571 C13.047295,22.821585 12.8507937,22.700144 12.8507937,22.3178879 C12.8507937,21.8992152 13.2823186,20.3480107 15.5936508,19.1034761 C15.3590086,19.7214568 15.1528195,20.2352215 15.0058249,20.5476333 M22.6750674,22.0833189 C22.3422476,22.1854811 21.7568311,22.2689413 21.3131303,22.0808719 C20.8940795,21.9032022 20.6328244,21.4739284 20.3104301,20.662136 C20.0338901,19.9660518 19.6167831,18.7713039 19.329641,17.8894224 C22.3879253,16.8007695 23.8222222,15.416379 23.8222222,13.8648934 C23.8222222,12.4198523 22.6303616,11.4682313 19.98459,11.7991881 C18.8142872,11.9456586 17.9578085,12.1058497 17.0512346,12.2801985 C13.6629577,12.9318871 12.392376,14.3800743 12.392376,15.8695984 C12.392376,16.8781995 13.2864924,17.5763812 14.3217943,17.5763812 C15.0277221,17.5763812 15.0953993,17.1882694 14.8865365,17.0333219 C14.4472533,16.7075213 14.1842311,16.3816332 14.1842311,15.8228432 C14.1842311,14.9469045 14.8498707,13.8266153 17.2969399,13.2887996 C17.4550889,13.2540172 17.5901783,13.2241289 17.7106896,13.197474 C17.3048915,14.3318335 16.5843857,16.3331302 15.9291716,18.0565176 C12.1919066,19.537652 11.0222222,21.5660405 11.0222222,22.9739396 C11.0222222,24.025975 11.8589985,24.6310832 12.8472975,24.6310832 C14.353159,24.6310832 15.5379515,23.6328819 16.4864924,21.388196 C16.8531507,20.520647 17.2566517,19.4933438 17.6553816,18.441658 C17.9359857,19.3497573 18.3135997,20.5043045 18.5819229,21.2058071 C18.8540453,21.9174472 19.1008108,22.4284333 19.4708265,22.7936481 C19.9182381,23.2352443 20.4657519,23.4556491 21.1784827,23.4556491 C22.0963656,23.4556491 22.7274598,23.0061002 23.0043531,22.5175741 C23.1817628,22.2046202 22.9644183,21.9945277 22.6750674,22.0833189"
                                    id="app-dl-asset-5"
                                    fill="#FEFEFE"
                                />
                                <path
                                    d="M8.1395457,25.5615378 L7.75101344,18.0606166 C7.75277151,16.074736 6.64929301,14.4953495 5.27097043,14.4941848 L4.67498656,14.4936024 C3.29725,14.4924377 2.13868548,16.159762 2.13692742,18.2108679 L1.63705108,25.0210988 C1.51750269,27.1962494 2.21662634,33.0240226 2.21662634,33.0240226 L4.59118548,47.3683697 C4.59118548,47.3683697 10.381078,47.0189479 16.5149651,46.6305073 L16.812078,45.8938097 C19.7380833,36.4105022 10.8282124,27.8712159 8.1395457,25.5615378"
                                    id="app-dl-asset-4"
                                    fill="#DDAE7C"
                                />
                                <path
                                    d="M31.8508548,29.3768161 C31.8496828,31.0738413 30.6588871,32.4488161 29.1920753,32.4476514 C27.7246774,32.4464866 26.5368118,31.0697647 26.5379839,29.3721572 C26.5397419,27.675132 27.7299516,26.3001572 29.1967634,26.301322 C30.6641613,26.3024867 31.8520269,27.679791 31.8508548,29.3768161"
                                    id="app-dl-asset-3"
                                    fill="#DDAE7C"
                                />
                                <path
                                    d="M31.855836,23.4095654 C31.854664,25.1065906 30.6638683,26.4815654 29.1970565,26.4804006 C27.7296586,26.4792359 26.541793,25.102514 26.5429651,23.4049065 C26.5447231,21.7078813 27.7349328,20.3329065 29.2017446,20.3340713 C30.6691425,20.335236 31.8570081,21.7125402 31.855836,23.4095654"
                                    id="app-dl-asset-2"
                                    fill="#DDAE7C"
                                />
                                <path
                                    d="M31.8608758,17.3522221 C31.8597038,19.0492473 30.6689081,20.4242221 29.2020962,20.4230573 C27.7346984,20.4218926 26.5468328,19.0451707 26.5480048,17.3475632 C26.5497629,15.650538 27.7399726,14.2755632 29.2067844,14.2767279 C30.6741823,14.2778927 31.8620478,15.6551969 31.8608758,17.3522221"
                                    id="app-dl-asset-1"
                                    fill="#DDAE7C"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
const Chevron = () => (
    <svg width="8" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M.311 15.707l-.03-.031a1.04 1.04 0 0 1 0-1.423L5.611 8 .282 1.747a1.04 1.04 0 0 1 0-1.422l.03-.032a.94.94 0 0 1 1.365 0L7.72 7.29a1.04 1.04 0 0 1 0 1.422l-6.043 6.996a.94.94 0 0 1-1.365 0"
            fill="#0074A6"
            fillRule="evenodd"
        />
    </svg>
);
/* tslint:enable max-line-length */

export const MobileCTA = ({
    href,
    className,
}: MobileCTAProps): React.ReactElement<any> => (
    <StyledMobileCTAElement
        className={classNames(className)}
        href={href}
        target="_blank"
        rel="noreferrer nofollow"
    >
        <div>
            <div>
                <MobileCTAImage />
            </div>
            <div>
                <div>
                    <Typography tag="p" className="cta-caption">
                        Get Savings on the go!
                    </Typography>
                    <Typography
                        tag="p"
                        className="cta-caption"
                        weight={600}
                        color="accent.dark"
                    >
                        Download the App
                    </Typography>
                </div>
            </div>
            <div>
                <Chevron />
            </div>
        </div>
    </StyledMobileCTAElement>
);
