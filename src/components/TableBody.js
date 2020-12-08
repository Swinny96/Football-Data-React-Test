import React from 'react'
import styled from 'styled-components'

const TableBody = (props) => {
    return (
        <Table>
            <TableContents>
                <TableHead>
                    <Position>
                        #
                    </Position>
                    <Club>
                        Team
                    </Club>
                    <MatchesPlayed title="Matches played">
                        MP
                    </MatchesPlayed>
                    <Wins title="Wins">
                        W
                    </Wins>
                    <Draws title="Draws">
                        D
                    </Draws>
                    <Loses title="Losses">
                        L
                    </Loses>
                    <GoalsFor title="Goals for">
                        GF
                    </GoalsFor>
                    <GoalsAgainst title="Goals against">
                        GA
                    </GoalsAgainst>
                    <GoalsDifference title="Goals difference">
                        GD
                    </GoalsDifference>
                    <TeamPoints title="Team points">
                        Pts
                    </TeamPoints>
                </TableHead>
                {props.children}
            </TableContents>
        </Table>
    )
}

export default TableBody

const Table = styled.table`
    margin: 0 auto;
    border-collapse: collapse;

    tr:last-child{
        border: none;
    }

    td{
        width: 35px;
    }
`
const TableContents = styled.tbody`
`
const TableHead = styled.tr`
    color: #878787;
    border-bottom: 1px solid #dedede;
    line-height: 2.3em;
`
const Position = styled.td`
    color: #878787;
    text-align: left;
`
const Club = styled.td`
    width: 250px;
    text-align: left;
    display: flex;
    align-items: center;
`
const MatchesPlayed = styled.td`
`
const Wins = styled.td`
`
const Draws = styled.td`
`
const Loses = styled.td`
`
const GoalsFor = styled.td`
`
const GoalsAgainst = styled.td`
`
const GoalsDifference = styled.td`
`
const TeamPoints = styled.td`
`