import classNames from 'classnames/bind';
import styles from './index.module.scss';
import TimeSeries from '@components/svgs/mortality-insight/TimeSeriesChart';
import BarChart from '@components/svgs/mortality-insight/BarChart';

const cx = classNames.bind(styles);



const MortalityInsightPage = () => {
    return (
        <div className={cx('container')}>
            <TimeSeries />
            <BarChart />
        </div>
    );
};

export default MortalityInsightPage;
