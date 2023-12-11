import React from 'react';
import StatisticsLine from './StatisticLine';

export default function Statistics(props) {

    const good = props.good;
    const bad = props.bad;
    const neutral = props.neutral;
    const total = good + bad + neutral;

    return (
        <>
            <h1>Statistics</h1>
            {total > 0 ? (
                <table>
                    <tbody>
                        <StatisticsLine text={"good"} value={good} />
                        <StatisticsLine text={"neutral"} value={neutral} />
                        <StatisticsLine text={"bad"} value={bad} />
                        <StatisticsLine text={"all"} value={total} />
                        <StatisticsLine text={"average"} value={(good - bad) / (total)} />
                        <StatisticsLine text={"positive"} value={((good / (total)) * 100) + " %"} />
                    </tbody>
                </table>

            ) : (
                <div>
                    <p>No feedback given</p>
                </div>
            )}
        </>
    )
}
