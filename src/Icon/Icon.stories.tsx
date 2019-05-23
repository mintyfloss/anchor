// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { color, select } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { Grid, CenteredCell } from '../Grid';
import { Typography } from '../Typography';
import * as Icon from './';
import { DefaultColor } from './utils';

// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;

    div {
        text-align: center;
    }
`;

storiesOf('Components/Icon', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('All Icons', () => (
        <StyledStory>
            <Grid columns={5} minRowHeight="1.5rem" gap="1rem">
                {Object.keys(Icon).map((iconKey: string) => (
                    <CenteredCell key={iconKey}>
                        <div>
                            <Typography tag="p" scale={12}>
                                {iconKey}
                            </Typography>
                            {React.createElement(Icon[iconKey])}
                        </div>
                    </CenteredCell>
                ))}
            </Grid>
        </StyledStory>
    ))
    .add('Size & Color', () => {
        const iconKey = select('Select an Icon', Object.keys(Icon), 'AddEvent');
        console.log(iconKey);
        return(
            <StyledStory>
                {React.createElement(Icon[iconKey], {
                    color: color('color', DefaultColor),
                    scale: select(
                        'scale',
                        ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                        'md'
                    )
                })}
            </StyledStory>
        );
    });
