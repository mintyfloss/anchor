// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { Page } from '../components/Layout';
import { ColorSwatchFamilyList } from '../components/ColorSwatchFamilyList';
// THEME
import { sizes } from '../../../src/theme';

const StyledThemePage = styled.div`
    padding: ${sizes.padding.md} ${sizes.padding.lg};
`;

export const ThemePage = (): React.ReactElement<any> => (
    <Page>
        <StyledThemePage>
            <h1>Theme</h1>
            <h2>Colors</h2>
            <ColorSwatchFamilyList />
        </StyledThemePage>
    </Page>
);

export default ThemePage;
