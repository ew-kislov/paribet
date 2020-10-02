import React from 'react';
import { TitledPanel, PrimaryButton } from '../basic';
import { MatchProposal } from './MatchProposal';

export const SessionPanel = ({ title, matches, participateHandler, style }) =>
    <TitledPanel title={title} isCenter={false} style={style}>
        {
            matches.map((match) => <MatchProposal match={match} key={match.id} />)
        }
        <PrimaryButton style={{ marginVertical: 12 }} onPress={participateHandler}>Принять участие</PrimaryButton>
    </TitledPanel>