// REACT
import * as React from 'react';
// COMPONENTS
import { MobileCTA } from './MobileCTA/MobileCTA.component';
import { CustomAdaptor, StandardBreakpoints } from '../../Grid';
import { FooterSection } from './FooterSection/FooterSection.component';
// VENDOR
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const StyledFooterElement = styled('footer')`
    font-family: base;
    font-size: 0.75rem;
    background-color: neutrals.white.base;
    border-bottom: solid 1rem ${th.color('primary.base')};
    color: text.body;
    font-weight: 500;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
`;

const DesktopContainer = styled('div')`
    max-width: 71.25rem;
    padding: 2rem 1rem 1rem;
    margin: 0 auto;
`;

const MobileFooterContainer = styled('div')`
    padding: 2rem 1rem 0;

    hr {
        border: none;
        border-top: solid thin ${th.color('borders.light')};
    }
`;

const LegalLinksContainer = styled('ul')`
    list-style: none;
    margin: 2rem 1.5rem 1rem;
    padding: 0;
    width: 100%;

    li {
        display: inline-block;
        padding-right: 1rem;
    }

    a {
        text-decoration: none;
        line-height: 1.5rem;
    }
`;

interface ItemChild {
    key: number;
    href: string;
    label: string;
}

interface ItemsType {
    title: string;
    key: number;
    children?: ItemChild[];
}

/* tslint:disable max-line-length */
const FooterLogo = () => (
    <svg
        className="footer-logo"
        width="166px"
        height="52px"
        viewBox="0 0 166 52"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g
            id="Web-Final"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g id="footers" transform="translate(-178.000000, -778.000000)">
                <g id="Footer" transform="translate(0.000000, 746.000000)">
                    <g
                        id="RMN-Logo"
                        transform="translate(178.000000, 32.000000)"
                    >
                        <g id="Stacked-Group">
                            <g>
                                <path
                                    d="M9.406,47.4 L9.406,51 L7.354,51 L7.354,47.4 L4.162,42.504 L6.646,42.504 L8.458,45.648 L10.27,42.504 L12.67,42.504 L9.406,47.4 Z M22.162,46.716 C22.162,47.3880034 22.0460012,48.0019972 21.814,48.558 C21.5819988,49.1140028 21.2600021,49.589998 20.848,49.986 C20.4359979,50.382002 19.9460028,50.6879989 19.378,50.904 C18.8099972,51.1200011 18.1940033,51.228 17.53,51.228 C16.8659967,51.228 16.2520028,51.1200011 15.688,50.904 C15.1239972,50.6879989 14.6360021,50.382002 14.224,49.986 C13.8119979,49.589998 13.4900012,49.1140028 13.258,48.558 C13.0259988,48.0019972 12.91,47.3880034 12.91,46.716 C12.91,46.0359966 13.0259988,45.4220027 13.258,44.874 C13.4900012,44.3259973 13.8119979,43.8600019 14.224,43.476 C14.6360021,43.0919981 15.1239972,42.796001 15.688,42.588 C16.2520028,42.379999 16.8659967,42.276 17.53,42.276 C18.1940033,42.276 18.8099972,42.379999 19.378,42.588 C19.9460028,42.796001 20.4359979,43.0919981 20.848,43.476 C21.2600021,43.8600019 21.5819988,44.3259973 21.814,44.874 C22.0460012,45.4220027 22.162,46.0359966 22.162,46.716 Z M19.966,46.716 C19.966,46.3479982 19.9060006,46.0040016 19.786,45.684 C19.6659994,45.3639984 19.5000011,45.0900011 19.288,44.862 C19.0759989,44.6339989 18.8200015,44.4540007 18.52,44.322 C18.2199985,44.1899993 17.8900018,44.124 17.53,44.124 C17.1699982,44.124 16.8420015,44.1899993 16.546,44.322 C16.2499985,44.4540007 15.9940011,44.6339989 15.778,44.862 C15.5619989,45.0900011 15.3960006,45.3639984 15.28,45.684 C15.1639994,46.0040016 15.106,46.3479982 15.106,46.716 C15.106,47.1000019 15.1659994,47.4539984 15.286,47.778 C15.4060006,48.1020016 15.5719989,48.3799988 15.784,48.612 C15.9960011,48.8440012 16.2499985,49.0259993 16.546,49.158 C16.8420015,49.2900007 17.1699982,49.356 17.53,49.356 C17.8900018,49.356 18.2179985,49.2900007 18.514,49.158 C18.8100015,49.0259993 19.0659989,48.8440012 19.282,48.612 C19.4980011,48.3799988 19.6659994,48.1020016 19.786,47.778 C19.9060006,47.4539984 19.966,47.1000019 19.966,46.716 Z M30.718,47.796 C30.718,48.3080026 30.6320009,48.7739979 30.46,49.194 C30.2879991,49.6140021 30.0420016,49.9739985 29.722,50.274 C29.4019984,50.5740015 29.0160023,50.8079992 28.564,50.976 C28.1119977,51.1440008 27.6100028,51.228 27.058,51.228 C26.4979972,51.228 25.9940022,51.1440008 25.546,50.976 C25.0979978,50.8079992 24.7180016,50.5740015 24.406,50.274 C24.0939984,49.9739985 23.8540008,49.6140021 23.686,49.194 C23.5179992,48.7739979 23.434,48.3080026 23.434,47.796 L23.434,42.504 L25.474,42.504 L25.474,47.628 C25.474,47.8600012 25.5039997,48.079999 25.564,48.288 C25.6240003,48.496001 25.7159994,48.6819992 25.84,48.846 C25.9640006,49.0100008 26.127999,49.1399995 26.332,49.236 C26.536001,49.3320005 26.7819986,49.38 27.07,49.38 C27.3580014,49.38 27.603999,49.3320005 27.808,49.236 C28.012001,49.1399995 28.1779994,49.0100008 28.306,48.846 C28.4340006,48.6819992 28.5259997,48.496001 28.582,48.288 C28.6380003,48.079999 28.666,47.8600012 28.666,47.628 L28.666,42.504 L30.718,42.504 L30.718,47.796 Z M36.922,51 L35.086,47.628 L34.39,47.628 L34.39,51 L32.374,51 L32.374,42.504 L35.614,42.504 C36.022002,42.504 36.4199981,42.5459996 36.808,42.63 C37.1960019,42.7140004 37.5439985,42.855999 37.852,43.056 C38.1600015,43.256001 38.4059991,43.5199984 38.59,43.848 C38.7740009,44.1760016 38.866,44.5839976 38.866,45.072 C38.866,45.6480029 38.7100016,46.131998 38.398,46.524 C38.0859984,46.916002 37.6540028,47.1959992 37.102,47.364 L39.322,51 L36.922,51 Z M36.838,45.108 C36.838,44.907999 36.7960004,44.7460006 36.712,44.622 C36.6279996,44.4979994 36.5200007,44.4020003 36.388,44.334 C36.2559993,44.2659997 36.1080008,44.2200001 35.944,44.196 C35.7799992,44.1719999 35.6220008,44.16 35.47,44.16 L34.378,44.16 L34.378,46.14 L35.35,46.14 C35.5180008,46.14 35.6899991,46.1260001 35.866,46.098 C36.0420009,46.0699999 36.2019993,46.0200004 36.346,45.948 C36.4900007,45.8759996 36.6079995,45.7720007 36.7,45.636 C36.7920005,45.4999993 36.838,45.3240011 36.838,45.108 Z M44.818,44.712 C44.6419991,44.4879989 44.4120014,44.3100007 44.128,44.178 C43.8439986,44.0459993 43.5700013,43.98 43.306,43.98 C43.1699993,43.98 43.0320007,43.9919999 42.892,44.016 C42.7519993,44.0400001 42.6260006,44.0859997 42.514,44.154 C42.4019994,44.2220003 42.3080004,44.3099995 42.232,44.418 C42.1559996,44.5260005 42.118,44.6639992 42.118,44.832 C42.118,44.9760007 42.1479997,45.0959995 42.208,45.192 C42.2680003,45.2880005 42.3559994,45.3719996 42.472,45.444 C42.5880006,45.5160004 42.7259992,45.5819997 42.886,45.642 C43.0460008,45.7020003 43.225999,45.7639997 43.426,45.828 C43.7140014,45.9240005 44.0139984,46.0299994 44.326,46.146 C44.6380016,46.2620006 44.9219987,46.415999 45.178,46.608 C45.4340013,46.800001 45.6459992,47.0379986 45.814,47.322 C45.9820008,47.6060014 46.066,47.9599979 46.066,48.384 C46.066,48.8720024 45.9760009,49.2939982 45.796,49.65 C45.6159991,50.0060018 45.3740015,50.2999988 45.07,50.532 C44.7659985,50.7640012 44.418002,50.9359994 44.026,51.048 C43.633998,51.1600006 43.2300021,51.216 42.814,51.216 C42.205997,51.216 41.6180028,51.1100011 41.05,50.898 C40.4819972,50.6859989 40.0100019,50.384002 39.634,49.992 L40.978,48.624 C41.186001,48.8800013 41.4599983,49.0939991 41.8,49.266 C42.1400017,49.4380009 42.4779983,49.524 42.814,49.524 C42.9660008,49.524 43.1139993,49.5080002 43.258,49.476 C43.4020007,49.4439998 43.5279995,49.3920004 43.636,49.32 C43.7440005,49.2479996 43.8299997,49.1520006 43.894,49.032 C43.9580003,48.9119994 43.99,48.7680008 43.99,48.6 C43.99,48.4399992 43.9500004,48.3040006 43.87,48.192 C43.7899996,48.0799994 43.6760007,47.9780005 43.528,47.886 C43.3799993,47.7939995 43.1960011,47.7100004 42.976,47.634 C42.7559989,47.5579996 42.5060014,47.4760004 42.226,47.388 C41.9539986,47.2999996 41.6880013,47.1960006 41.428,47.076 C41.1679987,46.9559994 40.936001,46.8020009 40.732,46.614 C40.527999,46.4259991 40.3640006,46.1980013 40.24,45.93 C40.1159994,45.6619987 40.054,45.3360019 40.054,44.952 C40.054,44.4799976 40.149999,44.0760017 40.342,43.74 C40.534001,43.4039983 40.7859984,43.1280011 41.098,42.912 C41.4100016,42.6959989 41.761998,42.5380005 42.154,42.438 C42.546002,42.3379995 42.941998,42.288 43.342,42.288 C43.8220024,42.288 44.3119975,42.3759991 44.812,42.552 C45.3120025,42.7280009 45.7499981,42.9879983 46.126,43.332 L44.818,44.712 Z M52.45,44.256 L52.45,46.008 L55.738,46.008 L55.738,47.7 L52.45,47.7 L52.45,51 L50.422,51 L50.422,42.504 L56.014,42.504 L56.014,44.256 L52.45,44.256 Z M66.19,46.716 C66.19,47.3880034 66.0740012,48.0019972 65.842,48.558 C65.6099988,49.1140028 65.2880021,49.589998 64.876,49.986 C64.4639979,50.382002 63.9740028,50.6879989 63.406,50.904 C62.8379972,51.1200011 62.2220033,51.228 61.558,51.228 C60.8939967,51.228 60.2800028,51.1200011 59.716,50.904 C59.1519972,50.6879989 58.6640021,50.382002 58.252,49.986 C57.8399979,49.589998 57.5180012,49.1140028 57.286,48.558 C57.0539988,48.0019972 56.938,47.3880034 56.938,46.716 C56.938,46.0359966 57.0539988,45.4220027 57.286,44.874 C57.5180012,44.3259973 57.8399979,43.8600019 58.252,43.476 C58.6640021,43.0919981 59.1519972,42.796001 59.716,42.588 C60.2800028,42.379999 60.8939967,42.276 61.558,42.276 C62.2220033,42.276 62.8379972,42.379999 63.406,42.588 C63.9740028,42.796001 64.4639979,43.0919981 64.876,43.476 C65.2880021,43.8600019 65.6099988,44.3259973 65.842,44.874 C66.0740012,45.4220027 66.19,46.0359966 66.19,46.716 Z M63.994,46.716 C63.994,46.3479982 63.9340006,46.0040016 63.814,45.684 C63.6939994,45.3639984 63.5280011,45.0900011 63.316,44.862 C63.1039989,44.6339989 62.8480015,44.4540007 62.548,44.322 C62.2479985,44.1899993 61.9180018,44.124 61.558,44.124 C61.1979982,44.124 60.8700015,44.1899993 60.574,44.322 C60.2779985,44.4540007 60.0220011,44.6339989 59.806,44.862 C59.5899989,45.0900011 59.4240006,45.3639984 59.308,45.684 C59.1919994,46.0040016 59.134,46.3479982 59.134,46.716 C59.134,47.1000019 59.1939994,47.4539984 59.314,47.778 C59.4340006,48.1020016 59.5999989,48.3799988 59.812,48.612 C60.0240011,48.8440012 60.2779985,49.0259993 60.574,49.158 C60.8700015,49.2900007 61.1979982,49.356 61.558,49.356 C61.9180018,49.356 62.2459985,49.2900007 62.542,49.158 C62.8380015,49.0259993 63.0939989,48.8440012 63.31,48.612 C63.5260011,48.3799988 63.6939994,48.1020016 63.814,47.778 C63.9340006,47.4539984 63.994,47.1000019 63.994,46.716 Z M72.094,51 L70.258,47.628 L69.562,47.628 L69.562,51 L67.546,51 L67.546,42.504 L70.786,42.504 C71.194002,42.504 71.5919981,42.5459996 71.98,42.63 C72.3680019,42.7140004 72.7159985,42.855999 73.024,43.056 C73.3320015,43.256001 73.5779991,43.5199984 73.762,43.848 C73.9460009,44.1760016 74.038,44.5839976 74.038,45.072 C74.038,45.6480029 73.8820016,46.131998 73.57,46.524 C73.2579984,46.916002 72.8260028,47.1959992 72.274,47.364 L74.494,51 L72.094,51 Z M72.01,45.108 C72.01,44.907999 71.9680004,44.7460006 71.884,44.622 C71.7999996,44.4979994 71.6920007,44.4020003 71.56,44.334 C71.4279993,44.2659997 71.2800008,44.2200001 71.116,44.196 C70.9519992,44.1719999 70.7940008,44.16 70.642,44.16 L69.55,44.16 L69.55,46.14 L70.522,46.14 C70.6900008,46.14 70.8619991,46.1260001 71.038,46.098 C71.2140009,46.0699999 71.3739993,46.0200004 71.518,45.948 C71.6620007,45.8759996 71.7799995,45.7720007 71.872,45.636 C71.9640005,45.4999993 72.01,45.3240011 72.01,45.108 Z M82.138,44.256 L82.138,51 L80.086,51 L80.086,44.256 L77.686,44.256 L77.686,42.504 L84.538,42.504 L84.538,44.256 L82.138,44.256 Z M90.838,51 L90.838,47.448 L87.526,47.448 L87.526,51 L85.474,51 L85.474,42.504 L87.526,42.504 L87.526,45.72 L90.838,45.72 L90.838,42.504 L92.89,42.504 L92.89,51 L90.838,51 Z M94.642,51 L94.642,42.504 L100.354,42.504 L100.354,44.244 L96.622,44.244 L96.622,45.84 L100.15,45.84 L100.15,47.484 L96.622,47.484 L96.622,49.248 L100.57,49.248 L100.57,51 L94.642,51 Z M109.414,44.712 C109.237999,44.4879989 109.008001,44.3100007 108.724,44.178 C108.439999,44.0459993 108.166001,43.98 107.902,43.98 C107.765999,43.98 107.628001,43.9919999 107.488,44.016 C107.347999,44.0400001 107.222001,44.0859997 107.11,44.154 C106.997999,44.2220003 106.904,44.3099995 106.828,44.418 C106.752,44.5260005 106.714,44.6639992 106.714,44.832 C106.714,44.9760007 106.744,45.0959995 106.804,45.192 C106.864,45.2880005 106.951999,45.3719996 107.068,45.444 C107.184001,45.5160004 107.321999,45.5819997 107.482,45.642 C107.642001,45.7020003 107.821999,45.7639997 108.022,45.828 C108.310001,45.9240005 108.609998,46.0299994 108.922,46.146 C109.234002,46.2620006 109.517999,46.415999 109.774,46.608 C110.030001,46.800001 110.241999,47.0379986 110.41,47.322 C110.578001,47.6060014 110.662,47.9599979 110.662,48.384 C110.662,48.8720024 110.572001,49.2939982 110.392,49.65 C110.211999,50.0060018 109.970002,50.2999988 109.666,50.532 C109.361998,50.7640012 109.014002,50.9359994 108.622,51.048 C108.229998,51.1600006 107.826002,51.216 107.41,51.216 C106.801997,51.216 106.214003,51.1100011 105.646,50.898 C105.077997,50.6859989 104.606002,50.384002 104.23,49.992 L105.574,48.624 C105.782001,48.8800013 106.055998,49.0939991 106.396,49.266 C106.736002,49.4380009 107.073998,49.524 107.41,49.524 C107.562001,49.524 107.709999,49.5080002 107.854,49.476 C107.998001,49.4439998 108.123999,49.3920004 108.232,49.32 C108.340001,49.2479996 108.426,49.1520006 108.49,49.032 C108.554,48.9119994 108.586,48.7680008 108.586,48.6 C108.586,48.4399992 108.546,48.3040006 108.466,48.192 C108.386,48.0799994 108.272001,47.9780005 108.124,47.886 C107.975999,47.7939995 107.792001,47.7100004 107.572,47.634 C107.351999,47.5579996 107.102001,47.4760004 106.822,47.388 C106.549999,47.2999996 106.284001,47.1960006 106.024,47.076 C105.763999,46.9559994 105.532001,46.8020009 105.328,46.614 C105.123999,46.4259991 104.960001,46.1980013 104.836,45.93 C104.711999,45.6619987 104.65,45.3360019 104.65,44.952 C104.65,44.4799976 104.745999,44.0760017 104.938,43.74 C105.130001,43.4039983 105.381998,43.1280011 105.694,42.912 C106.006002,42.6959989 106.357998,42.5380005 106.75,42.438 C107.142002,42.3379995 107.537998,42.288 107.938,42.288 C108.418002,42.288 108.907998,42.3759991 109.408,42.552 C109.908003,42.7280009 110.345998,42.9879983 110.722,43.332 L109.414,44.712 Z M117.778,51 L117.118,49.332 L113.83,49.332 L113.206,51 L110.974,51 L114.538,42.504 L116.53,42.504 L120.058,51 L117.778,51 Z M115.498,44.772 L114.418,47.688 L116.554,47.688 L115.498,44.772 Z M124.978,51 L122.926,51 L119.71,42.504 L122.014,42.504 L123.982,48.528 L124.03,48.528 L125.986,42.504 L128.254,42.504 L124.978,51 Z M128.95,51 L128.95,42.504 L131.014,42.504 L131.014,51 L128.95,51 Z M138.166,51 L134.746,45.444 L134.71,45.444 L134.758,51 L132.766,51 L132.766,42.504 L135.106,42.504 L138.514,48.048 L138.55,48.048 L138.502,42.504 L140.494,42.504 L140.494,51 L138.166,51 Z M149.794,50.484 C149.377998,50.7000011 148.892003,50.8759993 148.336,51.012 C147.779997,51.1480007 147.174003,51.216 146.518,51.216 C145.837997,51.216 145.212003,51.1080011 144.64,50.892 C144.067997,50.6759989 143.576002,50.372002 143.164,49.98 C142.751998,49.587998 142.430001,49.1180027 142.198,48.57 C141.965999,48.0219973 141.85,47.4120034 141.85,46.74 C141.85,46.0599966 141.967999,45.4440028 142.204,44.892 C142.440001,44.3399972 142.765998,43.8700019 143.182,43.482 C143.598002,43.0939981 144.085997,42.796001 144.646,42.588 C145.206003,42.379999 145.809997,42.276 146.458,42.276 C147.130003,42.276 147.753997,42.377999 148.33,42.582 C148.906003,42.786001 149.373998,43.0599983 149.734,43.404 L148.438,44.88 C148.237999,44.6479988 147.974002,44.4580007 147.646,44.31 C147.317998,44.1619993 146.946002,44.088 146.53,44.088 C146.169998,44.088 145.838002,44.1539993 145.534,44.286 C145.229998,44.4180007 144.966001,44.6019988 144.742,44.838 C144.517999,45.0740012 144.344001,45.3539984 144.22,45.678 C144.095999,46.0020016 144.034,46.3559981 144.034,46.74 C144.034,47.132002 144.089999,47.4919984 144.202,47.82 C144.314001,48.1480016 144.479999,48.4299988 144.7,48.666 C144.920001,48.9020012 145.191998,49.0859993 145.516,49.218 C145.840002,49.3500007 146.209998,49.416 146.626,49.416 C146.866001,49.416 147.093999,49.3980002 147.31,49.362 C147.526001,49.3259998 147.725999,49.2680004 147.91,49.188 L147.91,47.64 L146.29,47.64 L146.29,45.984 L149.794,45.984 L149.794,50.484 Z M160.702,47.448 L160.702,44.34 L160.678,44.34 L159.514,47.448 L158.566,47.448 L157.414,44.34 L157.39,44.34 L157.39,47.448 L156.13,47.448 L156.13,42.504 L157.93,42.504 L159.07,45.624 L160.174,42.504 L161.974,42.504 L161.974,47.448 L160.702,47.448 Z M153.814,43.644 L153.814,47.448 L152.494,47.448 L152.494,43.644 L151.078,43.644 L151.078,42.504 L155.23,42.504 L155.23,43.644 L153.814,43.644 Z"
                                    id="YOURS-FOR-THE-SAVING"
                                    fill="#602D6C"
                                />
                                <g id="Purple-Logo">
                                    <path
                                        d="M16.9320979,13.8839145 C18.4115061,9.86507328 19.7601214,6.01657027 20.5358687,3.7766361 C23.749991,3.41015082 25.3981468,4.39767789 25.3981468,6.79491003 C25.3981468,9.13291772 23.3947473,11.4456599 19.149572,13.0593906 C18.3517073,13.3625763 17.6038115,13.6394099 16.9320979,13.8839145 M8.73477189,22.1392206 C6.78805497,25.9282578 5.58582114,27.5252059 4.05459669,27.7492874 C3.36116387,27.8507531 2.82201631,27.5458204 2.82201631,26.5857774 C2.82201631,25.5339067 4.00581532,21.6377815 10.3473932,18.511886 C9.70359254,20.064125 9.1377854,21.3545341 8.73477189,22.1392206 M27.3387956,28.9961838 C26.0714734,28.8640826 25.0885314,28.6408287 24.1540185,27.8815975 C23.3022856,27.1893985 22.6397641,26.0548989 22.1005679,24.5866404 C20.9484056,21.4495877 19.8077874,17.5748999 19.248037,15.6088079 C26.640797,13.0150248 30.1015074,9.69706924 30.1015074,5.97355457 C30.1015074,2.55126428 27.2985318,0.297690885 21.0765175,1.08160347 C18.3245052,1.42826392 16.3101921,1.80773932 14.178185,2.2205906 C6.21018863,3.76401491 3.22222519,7.19359742 3.22222519,10.7213443 C3.22222519,13.1098236 5.32466799,14.763192 7.75935701,14.763192 C9.41946185,14.763192 9.57854584,13.844093 9.08749719,13.4772388 C8.05471827,12.7053864 7.43612086,11.9338145 7.43612086,10.6105588 C7.43612086,8.53592502 9.00133843,5.88296289 14.7562371,4.60906987 C15.1281839,4.52689228 15.4457888,4.45621393 15.7290428,4.39310827 C14.7748204,7.07944628 13.0803647,11.8188219 11.5393617,15.9002158 C2.75060449,19.4080493 0,24.2116525 0,27.5458753 C0,30.037287 1.96785493,31.4702063 4.29188907,31.4702063 C7.83312694,31.4702063 10.6194901,29.1064083 12.8500448,23.7903871 C13.6646112,21.8498178 14.5563263,19.5715631 15.4429732,17.2262762 C16.0075102,19.2978248 17.0459204,22.9198094 18.1533139,25.8358521 C18.7933102,27.5214745 19.3736148,28.7314204 20.2436494,29.5963887 C21.2958563,30.6422599 22.7115631,31.1642139 24.3877171,31.1642139 C26.379505,31.1642139 27.578407,30.4843556 27.89207,30.0067158 C28.2538805,29.4553125 28.0367942,29.0688254 27.3387956,28.9961838"
                                        id="Fill-32"
                                        fill="#602D6C"
                                    />
                                    <path
                                        d="M112.176721,12.9583202 C113.85059,12.9583202 112.547744,17.4518987 108.177292,17.5862917 C109.263975,15.1884807 111.054322,12.9583202 112.176721,12.9583202 M112.083731,22.5613761 C111.387592,22.5613761 110.378954,23.6620547 108.578842,23.6620547 C107.354767,23.6620547 106.706727,22.8917217 106.706727,21.2831687 C106.706727,20.8874925 106.760586,20.4588669 106.857936,20.0120624 C106.999641,20.0194476 107.155458,20.0239924 107.330861,20.0239924 C113.139028,20.0239924 116.643341,16.7137192 116.643341,13.4719012 C116.643341,11.1285209 114.819324,9.95342226 113.055215,9.95342226 C108.693762,9.95342226 103.467967,15.0386994 102.570503,20.2384472 C101.335195,22.3503299 100.306107,23.1263438 99.6502905,23.0939625 C98.930246,23.0584568 98.9858335,22.0793499 99.6508666,20.2094745 C100.658353,17.3775349 102.099306,13.5443329 103.368024,10.5911057 C105.882708,4.73833602 107.458165,1.50077868 107.668418,0.81594355 C107.878959,0.131108424 107.507704,0.029419923 106.805517,0.131108424 C104.282481,0.495823605 102.864857,0.387602044 101.786519,2.15266446 C100.094414,4.92211384 92.8098677,16.1229034 92.8098677,16.1229034 C92.8098677,16.1229034 94.9708653,2.30406102 95.306118,0.874457045 C95.4852651,0.109804967 95.0618789,-0.13021398 94.3910854,0.0643575923 C93.574843,0.300967986 92.8579666,0.448387908 91.7658031,0.803445522 C90.8159204,1.11220362 90.6007711,1.43203952 89.9417864,2.93379121 C89.5981811,3.71690628 86.8113209,11.8738579 84.8418551,15.9928103 C82.753726,20.3600189 81.0976237,22.9164337 77.1733811,23.2359856 C76.1143396,23.3223356 76.0529918,23.8526496 76.3453299,24.514193 C76.9573677,25.8989177 78.4815579,26.7155502 79.873548,26.7155502 C82.3216993,26.7155502 84.0593107,25.0078651 85.730102,21.0465583 C87.1137396,17.7652579 89.1557858,12.0956979 90.6724875,7.84210766 C89.4115456,14.4615178 87.9017563,23.306429 87.6886231,25.6179961 C87.5624713,26.9876664 89.418458,27.0194795 90.1696085,25.6858831 C92.1408023,22.1867193 96.3591111,15.0460846 100.159794,8.56812947 C98.6140025,12.2184058 96.7934419,16.5762409 95.9443654,19.0164809 C95.3634335,20.810232 94.8498978,22.123377 94.8498978,23.7640273 C94.8498978,25.6574785 96.1839963,26.7899703 97.635894,26.7899703 C99.1425151,26.7899703 100.858813,26.0383843 102.692623,23.7509611 C103.242161,25.6631594 104.686858,26.8422348 107.138753,26.8422348 C110.331431,26.8422348 112.707578,24.6917218 112.707578,23.318927 C112.707578,22.8218464 112.467659,22.5613761 112.083731,22.5613761"
                                        id="Fill-34"
                                        fill="#602D6C"
                                    />
                                    <path
                                        d="M139.377763,5.45861866 C141.076458,4.27115851 142.38655,4.18957301 142.787298,3.87077489 C143.40172,3.3818207 142.570443,0.925594302 140.189667,0.925594302 C136.390082,0.925594302 134.445329,5.5100287 132.920406,9.5566135 C131.949186,12.1332623 130.866647,15.324317 130.028431,17.8682758 C130.013974,17.9127008 130.005011,17.8816871 130.007613,17.8442472 C130.41877,12.1765697 131.116175,3.19769453 131.16128,2.19436055 C131.18499,1.67048107 131.148269,1.39610793 130.907994,1.27065625 C130.800434,1.19745283 130.546859,1.18152689 130.403734,1.18152689 C129.892536,1.18152689 129.41719,1.20052625 128.943001,1.21589338 C126.709397,1.21505518 123.634396,1.21421697 122.366808,1.21421697 C112.704627,1.21421697 113.427477,9.94777685 119.403126,9.94777685 C120.511399,9.94777685 120.542337,8.90784116 120.005404,8.64855574 C117.836857,7.60079678 117.390136,3.76041094 124.618628,3.76041094 C125.556019,3.76041094 126.125913,3.76348437 126.579862,3.767396 C125.678614,6.75141352 123.980207,11.7912738 121.837104,16.2273455 C119.548274,20.9654513 118.247146,22.7349066 114.680897,23.619774 C113.647801,23.8759859 113.719508,24.4331143 114.006334,25.0866365 C114.34376,25.8549931 115.644889,26.6932002 117.235157,26.6932002 C120.078267,26.6932002 121.572252,24.6907233 123.10209,20.6628585 C124.586533,16.7548573 125.837352,12.9720283 126.763177,10.0427737 C126.766936,10.0313182 126.761731,10.0064514 126.774164,10.0084072 C126.792958,10.0114806 126.772429,10.0452883 126.771851,10.0637288 C126.521167,16.3754288 126.27135,24.4138355 126.229425,25.8798599 C126.197909,26.9913226 126.653882,26.9918814 127.547324,26.6191586 C129.379023,25.8549931 129.994891,25.5909578 130.486718,24.1506385 C132.028699,19.6338195 133.504179,15.8389762 135.233524,11.6054712 C136.317797,8.95114853 137.965605,6.4457473 139.377763,5.45861866"
                                        id="Fill-36"
                                        fill="#602D6C"
                                    />
                                    <path
                                        d="M138.407918,23.1398575 C135.416046,23.1398575 139.371536,12.9583202 142.059139,12.9583202 C144.544099,12.9583202 141.564702,23.1398575 138.407918,23.1398575 M143.581267,10.1815373 C136.240518,10.1815373 132.634767,18.8386638 132.634767,22.5585095 C132.634767,25.2070691 134.286484,26.8422348 137.077962,26.8422348 C143.219212,26.8422348 146.744848,18.3284194 146.744848,14.40283 C146.744848,11.7542704 145.535301,10.1815373 143.581267,10.1815373"
                                        id="Fill-38"
                                        fill="#602D6C"
                                    />
                                    <path
                                        d="M164.270886,5.63541294 C163.640542,5.63541294 161.407893,5.69578885 158.027271,5.8113901 C158.57409,4.49857186 159.017152,3.43355235 159.309636,2.70961378 C159.526398,2.17309805 159.42004,1.8511886 158.839985,1.8511886 C158.322068,1.8511886 157.431031,2.03002718 156.347221,2.31616891 C154.907921,2.69616512 154.735089,2.9511174 153.93885,4.60644729 C153.769775,4.95811548 153.57151,5.41966208 153.343188,5.98049987 C150.060543,6.10439923 146.202178,6.26034647 141.968381,6.44605246 C140.308273,6.5190186 137.99441,8.56836564 139.993535,8.56836564 C143.973864,8.56836564 148.282516,8.7134395 152.227297,8.83419131 C151.612559,10.4371573 150.864008,12.4049539 149.95274,14.7275663 C148.810548,17.6387722 147.17096,21.1299875 147.17096,23.5264244 C147.17096,25.3148102 148.399278,26.8422348 150.566899,26.8422348 C153.276136,26.8422348 154.396073,25.259871 154.107057,24.3656781 C153.939428,23.8469032 153.456482,23.8649301 152.409088,23.8649301 C151.686547,23.8649301 151.433658,23.3762 151.433658,22.8276663 C151.433658,22.0041504 151.824408,21.1528788 152.277007,19.9854206 C153.807348,16.0375231 155.402427,12.1379837 156.720341,8.9555154 C157.820625,8.97869288 158.860794,8.99299997 159.815414,8.99299997 C162.152687,8.99299997 163.066556,8.9260428 163.885628,8.30597368 C164.573197,7.78548188 164.897184,7.49533417 165.282442,7.01833591 C165.684175,6.52130773 165.860475,5.63541294 164.270886,5.63541294"
                                        id="Fill-40"
                                        fill="#602D6C"
                                    />
                                    <path
                                        d="M68.5884087,9.25594302 C69.8506757,9.25594302 71.1208209,8.21995007 71.4251539,6.94182751 C71.7291951,5.66396446 70.9527521,4.62797151 69.6901933,4.62797151 C68.4279263,4.62797151 67.1580729,5.66396446 66.8537399,6.94182751 C66.549407,8.21995007 67.3261417,9.25594302 68.5884087,9.25594302"
                                        id="Fill-42"
                                        fill="#602C6C"
                                    />
                                    <path
                                        d="M49.7228548,23.1398575 C47.0815518,23.1398575 51.5488625,12.9583202 54.0639298,12.9583202 C55.0344012,12.9583202 55.3673548,13.6107812 55.4996542,14.1323568 C53.4415712,19.0557269 51.7464848,23.1398575 49.7228548,23.1398575 M33.0905439,12.9583202 C34.7956823,12.9583202 33.7592256,17.5862917 29.21219,17.5862917 C29.1940019,17.5862917 29.1784884,17.586031 29.1608352,17.586031 C30.2186897,15.1625383 31.9650189,12.9583202 33.0905439,12.9583202 M83.4999097,3.70237721 C84.5762687,3.70237721 81.6316726,11.4538224 76.1944405,15.7351031 C78.5391466,10.0564133 82.2143479,3.70237721 83.4999097,3.70237721 M74.5261432,23.889997 C73.923592,23.7906811 73.7597302,23.4005113 73.7597302,22.7265816 C73.7597302,21.8948814 73.9983359,20.7524641 74.3990784,19.4400747 C84.2670039,14.88431 90.7208561,0.925594302 83.378126,0.925594302 C78.5002212,0.925594302 72.3947908,11.636962 70.4534606,18.8739738 C69.3667987,20.5975312 67.5125739,23.2041494 66.2373272,23.2041494 C65.2311587,23.2041494 65.5031117,21.890625 66.2252532,19.9491399 C67.9141789,15.408982 70.3818789,10.738862 70.3818789,10.738862 C70.3818789,10.738862 69.1359549,10.2187301 67.4591032,10.50249 C66.3534678,10.6894878 65.8653324,11.2456571 65.3498866,12.2169672 C65.2863543,12.2952849 65.215635,12.4121939 65.135429,12.5821661 C61.9372506,19.3569331 59.9309507,23.2041494 58.1161102,23.2041494 C56.8402886,23.2041494 57.5736416,21.819685 58.2957831,19.8782 C59.9847088,15.338042 62.4521214,10.667922 62.4521214,10.667922 C62.4521214,10.667922 61.2064848,10.1477902 59.5296332,10.43155 C58.4751686,10.6097512 57.9824335,11.1253429 57.4917108,12.0152139 C57.1599627,11.0927105 56.439546,10.1628294 54.8819972,10.1628294 C50.1489807,10.1628294 46.5776575,16.1862003 45.5801134,20.4244377 C44.6049924,21.9124745 43.3441195,23.4879093 42.3767604,23.4879093 C41.4186005,23.4879093 41.4329744,22.6706809 42.1850134,20.7402625 C43.3889659,17.6504012 45.7175272,12.2992575 47.5737643,8.10415156 C52.2294496,8.20517008 56.6393423,8.30221595 59.1464267,8.30221595 C61.4712509,8.30221595 62.3802522,8.23581614 63.1949612,7.6209085 C63.8788683,7.10474929 64.2011297,6.81701678 64.5843361,6.34398907 C64.9839288,5.85109817 65.1592896,4.97257761 63.5781677,4.97257761 C62.7120003,4.97257761 56.3288675,5.18142487 48.7460944,5.46660354 C49.3147233,4.19280548 49.7738236,3.17297249 50.0429018,2.5796306 C50.2059011,2.22010684 49.9468846,1.82284302 49.3719312,1.87023092 C48.49139,1.94258969 48.1743032,2.05949875 47.2158558,2.29587073 C45.7784723,2.65057057 45.4205638,3.06713006 44.6285655,4.70896468 C44.5198993,4.93455378 44.3704114,5.2540674 44.1924633,5.64168339 C41.1707956,5.76057877 38.0973821,5.88685192 35.2137033,6.01312506 C33.562437,6.08548383 31.6921136,7.8811163 33.68059,7.8811163 C36.1695633,7.8811163 39.567538,7.93815204 43.127937,8.01022704 C42.5089997,9.41143329 41.8181932,11.0135415 41.2305908,12.4439751 C41.1650461,12.5628704 41.0963391,12.7013453 41.0233201,12.865926 C38.6157026,18.2928335 34.9383006,23.9844891 30.8776921,23.9844891 C29.2965702,23.9844891 28.625887,22.9524544 28.625887,21.640065 C28.625887,21.1335536 28.6980437,20.5844783 28.8242459,20.0166748 C28.977471,20.0254713 29.1496696,20.0308628 29.3445788,20.0308628 C35.1418341,20.0308628 38.567694,16.5111053 38.567694,13.2725539 C38.567694,11.1917427 36.8189732,9.97044024 35.0581784,9.97044024 C30.2788781,9.97044024 24.4574747,16.0936945 24.4574747,21.768892 C24.4574747,24.8193106 26.1222523,26.8422348 28.9492983,26.8422348 C32.747728,26.8422348 35.6914895,24.543496 37.7889196,22.0157631 C37.6762287,22.5943495 37.6095341,23.1547752 37.6095341,23.6854062 C37.6095341,25.4589054 38.6395632,26.7593769 40.3164148,26.7593769 C42.2128987,26.7593769 43.8555406,25.6197972 45.3837668,23.6445447 C45.6905044,25.6169596 46.8447234,26.7593769 48.5575096,26.7593769 C50.5632346,26.7593769 52.2998814,25.2429641 53.6711453,23.4481829 C53.7504889,25.0982466 54.3464281,26.7593769 56.5349883,26.7593769 C58.0979992,26.7593769 59.6946448,25.9342032 61.5948658,23.313397 C61.6477616,25.0281579 62.3681782,26.8303168 64.4405978,26.8303168 C66.4402858,26.8303168 68.2229288,25.4223004 69.8486096,23.2589151 C70.0003973,25.4154901 71.1753146,26.7003548 72.8613655,26.7003548 C74.5980123,26.7003548 76.045745,25.5897187 75.9635267,24.362741 C75.9112059,23.580415 75.1010966,23.9844891 74.5261432,23.889997"
                                        id="Fill-44"
                                        fill="#602D6C"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
/* tslint:enable max-line-length */

const defaultLinks: ItemsType[] = [
    {
        title: 'Find Deals',
        key: 1,
        children: [
            {
                label: 'Black Friday Deals',
                href: '/holidays/black-friday',
                key: 1,
            },
            {
                label: 'Cyber Monday Deals',
                href: '/holidays/cyber-monday',
                key: 2,
            },
            {
                label: "Valentine's Day Deals",
                href: '/holidays/valentines-day',
                key: 3,
            },
            { label: 'Browse Categories', href: '/coupons', key: 4 },
        ],
    },
    {
        title: 'Connect',
        key: 2,
        children: [
            { label: 'Help', href: '/help', key: 1 },
            {
                label: 'Facebook',
                href: 'https://www.facebook.com/RetailMeNot',
                key: 2,
            },
            {
                label: 'Twitter',
                href: 'https://twitter.com/retailmenot',
                key: 3,
            },
            {
                label: 'Instagram',
                href: 'https://www.instagram.com/retailmenot',
                key: 4,
            },
        ],
    },
    {
        title: 'Account',
        key: 3,
        children: [
            { label: 'My Account', href: '/profile', key: 1 },
            { label: 'Community', href: '/community', key: 2 },
            { label: 'Submit a Coupon', href: '/submit', key: 3 },
            {
                label: 'RetailMeNot.ca',
                href: 'https://www.retailmenot.ca/',
                key: 4,
            },
        ],
    },
    {
        title: 'Connect',
        key: 4,
        children: [
            { label: 'About', href: '/corp', key: 1 },
            { label: 'Blog', href: '/blog', key: 2 },
            { label: 'Careers', href: '/corp/careers', key: 3 },
            { label: 'Contact', href: '/help', key: 4 },
        ],
    },
];

const RenderLinks = ({
    items = defaultLinks,
    columns,
}: {
    items?: ItemsType[];
    columns: number;
}) => (
    <div>
        {items.map(({ title, key: sectionKey, children }: any) => (
            <div key={sectionKey}>
                <FooterSection title={title}>
                    <ul>
                        {children.map(({ key, href, label }: any) => (
                            <li key={key}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </FooterSection>
            </div>
        ))}
    </div>
);

const LegalLinks = () => {
    const currentYear = new Date().getFullYear();
    return (
        <LegalLinksContainer>
            <li>
                <a href="/terms">Terms of Use</a>
            </li>
            <li>
                <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
                <a href="/sitemap">Sitemap</a>
            </li>
            <li>
                <a href="/privacy/#ad-choices">Ad Choices</a>
            </li>
            <li>&copy; {currentYear} RetailMeNot, Inc.</li>
        </LegalLinksContainer>
    );
};

const DesktopFooter = () => (
    <DesktopContainer>
        <div>
            <div>
                <FooterLogo />
                {/* TODO: uncomment once functional */}
                {/* <SocialIcons /> */}
            </div>
            <div>
                <RenderLinks columns={4} />
                <LegalLinks />
            </div>
            <div>
                <MobileCTA />
            </div>
        </div>
    </DesktopContainer>
);

const MobileFooter = () => (
    <MobileFooterContainer>
        <div>
            <div>
                <RenderLinks columns={2} />
            </div>
            <div>
                <hr />
            </div>
            <div>
                <FooterLogo />
            </div>
            <div>
                <LegalLinks />
            </div>
        </div>
    </MobileFooterContainer>
);

export const Footer = () => (
    <StyledFooterElement className="anchor-footer">
        <CustomAdaptor maxWidth={StandardBreakpoints.md.max}>
            <MobileFooter />
        </CustomAdaptor>
        <CustomAdaptor minWidth={StandardBreakpoints.lg.min}>
            <DesktopFooter />
        </CustomAdaptor>
    </StyledFooterElement>
);
