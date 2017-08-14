import React, {Component} from 'react'

import moment from 'moment'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import { connect } from 'react-redux'
import { setDateFilter } from '../AC'

class DatesRange extends Component {
    handleDayClick = day => {
        const { setDateFilter, dateFilter } = this.props;
        const range = DateUtils.addDayToRange(day, dateFilter);
        setDateFilter(range);
    }

    handleResetClick = e => {
        e.preventDefault()
        const { setDateFilter } = this.props;
        setDateFilter({
            from: null,
            to: null
        })
    }

    getBody() {
        const { from, to } = this.props.dateFilter
        if (!from) {
            return (
                <p>Please select the <strong>first day</strong>.</p>
            )
        }
        if (!to) {
            return (
                <p>Please select the <strong>last day</strong>.</p>
            )
        }

        return (
            <p>
                You chose from {' '}
                {moment(from).format('LL')} {' '}
                to {' '}
                {moment(to).format('LL')}. {' '}
                <a href="." onClick={this.handleResetClick}>Reset</a>
            </p>
        )
    }

    render() {
        const { from, to } = this.props
        return (
            <div className="RangeExample">
                {this.getBody()}
                <DayPicker
                    numberOfMonths={1}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        )
    }
}

export default connect((state) => ({
    dateFilter: state.dateFilter
}), { setDateFilter })(DatesRange)
