// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { text, select, boolean } from '@storybook/addon-knobs';
// COMPONENTS
import { Position } from '../utils/position/position';
import { DropDown, Trigger } from './DropDown.component';
import { Button } from '../Button';
import { List, Item as ListItem } from '../List';
import { Typography } from '../Typography';
import { Cell, Grid } from '../Grid';
// THEME
import { RootTheme } from '../theme';
// README
import * as README from './README.md';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const listItemArray = [
    { key: 1, label: 'List Item 1' },
    { key: 2, label: 'List Item 2' },
    { key: 3, label: 'List Item 3' },
    { key: 4, label: 'List Item 4' },
    { key: 5, label: 'List Item 5' },
];

const MockList = () => (
    <List>
        {listItemArray.map(({ key, label }: any) => (
            <ListItem
                background="transparent"
                key={key}
                onClick={() => {
                    /* tslint:disable no-console */
                    console.log(`${label} has been clicked`);
                    /* tslint:enable no-console */
                }}
            >
                {label}
            </ListItem>
        ))}
    </List>
);

storiesOf('Components/DropDown', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid gap="2rem">
                    <Cell width={3}>
                        <div>
                            <Typography tag="h1">DropDown Default</Typography>
                            <DropDown overlay={<MockList />}>
                                <span>
                                    <span>
                                        <span>
                                            {/* deeply nested item */}
                                            <a>DropDown Link</a>
                                        </span>
                                    </span>
                                </span>
                            </DropDown>
                        </div>
                    </Cell>
                    <Cell width={3} top={2}>
                        <div>
                            <Typography tag="h1">DropDown Right</Typography>
                            <DropDown overlay={<MockList />} position="right">
                                <a>DropDown Link Right</a>
                            </DropDown>
                        </div>
                    </Cell>
                    <Cell width={3} top={3}>
                        <div>
                            <Typography tag="h1">DropDown Left</Typography>
                            <DropDown overlay={<MockList />} position="left">
                                <a>DropDown Link Left</a>
                            </DropDown>
                        </div>
                    </Cell>
                    <Cell width={3} top={4}>
                        <div>
                            <Typography tag="h1">DropDown Top</Typography>
                            <DropDown
                                overlay={<MockList />}
                                position="top"
                                trigger="click"
                            >
                                <a>DropDown Link Top</a>
                            </DropDown>
                        </div>
                    </Cell>
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Knobs Demo', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid>
                    <Cell>
                        <div>
                            <Typography tag="h1">DropDown</Typography>
                            <DropDown
                                overlay={<MockList />}
                                position={select<Position>(
                                    'position',
                                    [
                                        'topStart',
                                        'top',
                                        'topEnd',
                                        'rightStart',
                                        'right',
                                        'rightEnd',
                                        'bottomEnd',
                                        'bottom',
                                        'bottomStart',
                                        'leftEnd',
                                        'left',
                                        'leftStart',
                                    ],
                                    'bottom'
                                )}
                                trigger={select<Trigger>(
                                    'trigger',
                                    ['click', 'hover', 'both'],
                                    'hover'
                                )}
                                showArrow={boolean('showArrow', true)}
                                shadow={text('shadow', '') || undefined}
                                background={text('background', '') || undefined}
                                border={text('border', '') || undefined}
                                borderRadius={
                                    text('borderRadius', '') || undefined
                                }
                                arrowIndent={
                                    text('arrowIndent', '') || undefined
                                }
                                arrowSize={text('arrowSize', '') || undefined}
                                spacing={text('spacing', '') || undefined}
                                debug={boolean('Debug', false)}
                            >
                                <Button>
                                    {/* Not a prop, just for testing various widths */}
                                    {text('Text', 'Dropdown')}
                                </Button>
                            </DropDown>
                        </div>
                    </Cell>
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ));
