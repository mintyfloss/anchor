// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../theme';
import { DropDown } from './DropDown.component';

describe('Component: DropDown', () => {
    test('should render in the DOM', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <DropDown overlay={<div>1</div>} />
            </ThemeProvider>
        );
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('should toggle when clicked', () => {
        const subject = <DropDown overlay={<div>1</div>} />;
        const wrapper = mount(subject);

        wrapper.setState({ clicked: true });
        expect(
            wrapper.find('div.anchor-drop-down-container.active')
        ).toBeDefined();

        wrapper.setState({ clicked: false });
        expect(
            wrapper.find('div.anchor-drop-down-container.active').exists()
        ).toBeFalsy();
    });
});
