// Vendor
import * as React from 'react';
import styled, { withTheme } from '@xstyled/styled-components';
import { debounce } from 'ts-debounce';
// COMPONENTS
import { RootTheme } from '../../theme';
// UTILS
import { BreakpointType, getBreakpointKey, sortBreakpoints } from '../utils';

const StyledDebug = styled('div')`
    padding: 1rem 2rem;
    z-index: 1000000;
    background: black;
    color: white;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-family: mono;
`;
StyledDebug.displayName = 'StyledDebug';

interface ResponsiveContextProps {
    innerWidth: number;
    breakpoints: BreakpointType[];
}

export const ResponsiveContext = React.createContext<ResponsiveContextProps>({
    innerWidth: 0,
    breakpoints: [],
});

interface ResponsiveProviderProps {
    breakpoints?: BreakpointType;
    children?: any;
    debug?: boolean;
    theme?: object;
    windowDep?: boolean; // Solely for testing. Forces the component to not recognize the window.
}

class BasicResponsiveProvider extends React.PureComponent<
    ResponsiveProviderProps
> {
    state: ResponsiveContextProps;

    hasWindow: boolean;

    constructor(props: any) {
        super(props);

        const hasWindow =
            props.windowDep === false ? false : typeof window !== 'undefined';
        let breakpoints;

        // Priority is props > ThemeProvider > RootTheme
        if (props.breakpoints !== undefined) {
            breakpoints = props.breakpoints;
        } else if (props.theme !== undefined) {
            breakpoints = props.theme.breakpoints;
        } else {
            breakpoints = RootTheme.breakpoints;
        }

        const sortedBreakpoints = sortBreakpoints(breakpoints);

        this.state = {
            breakpoints: sortedBreakpoints,
            innerWidth: hasWindow ? window.innerWidth : 0,
        };
        this.handleResize = debounce(this.handleResize.bind(this), 100);
        this.hasWindow = hasWindow;
    }

    handleResize() {
        if (this.hasWindow) {
            this.setState({ innerWidth: window.innerWidth });
        }
    }

    componentDidMount() {
        if (this.hasWindow) {
            window.addEventListener('resize', this.handleResize);
        }
    }

    componentWillUnmount() {
        if (this.hasWindow) {
            window.removeEventListener('resize', this.handleResize);
        }
    }

    render() {
        const { breakpoints, innerWidth } = this.state;
        const { debug } = this.props;

        return (
            <ResponsiveContext.Provider value={{ breakpoints, innerWidth }}>
                {debug && (
                    <StyledDebug>
                        {getBreakpointKey(innerWidth, breakpoints)} | w:
                        {innerWidth}px
                    </StyledDebug>
                )}

                {this.props.children}
            </ResponsiveContext.Provider>
        );
    }
}

export const ResponsiveProvider = withTheme(BasicResponsiveProvider);
