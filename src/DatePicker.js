import React, { Component } from "react";
import DayPicker from "./DayPicker";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import styled from "styled-components";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Wrapper = styled.div`
  background: white;
  max-width: 300px;
  margin: 1em auto;
  max-height: 300px;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Trigger = styled.button`
  border: none;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  color: #ccc;
  width: 100%;
`;

const TriggerWrapper = styled.div`
  padding: 10px;
`;

const StyledSpan = styled.span`
  color: ${props => (props.active ? "#ff7494" : "#ccc")};
`;

const Dropdown = styled.div`
  border-top: 1px solid #ccc;
`;

class DatePicker extends Component {
  constructor(props) {
    super(props);
    //let today = new Date();
    this.state = {
      showDayPicker: false,
      showMonthPicker: false,
      showYearPicker: false,
      //date: today.getDate(),
      //month: today.getMonth() + 1,
      //year: today.getFullYear()
      date: "DD",
      month: "MM",
      year: "YYYY"
    };

    this.renderDayPicker = this.renderDayPicker.bind(this);
    this.renderMonthPicker = this.renderMonthPicker.bind(this);
    this.renderYearPicker = this.renderYearPicker.bind(this);
    this.onDatePicked = this.onDatePicked.bind(this);
  }

  renderDayPicker() {
    this.setState({
      showDayPicker: true,
      date: "DD"
    });
  }

  renderMonthPicker(d) {
    console.log(d);
    this.setState({
      showDayPicker: false,
      showMonthPicker: true,
      date: d.toString().padStart(2, "0"),
      month: "MM"
    });
  }

  renderYearPicker(m) {
    console.log(m);
    this.setState({
      showMonthPicker: false,
      showYearPicker: true,
      month: (months.indexOf(m) + 1).toString().padStart(2, "0"),
      year: "YYYY"
    });
  }

  onDatePicked(y) {
    console.log(y);
    this.setState({
      showYearPicker: false,
      year: y
    });
  }

  render() {
    const {
      showDayPicker,
      showMonthPicker,
      showYearPicker,
      date,
      month,
      year
    } = this.state;
    return (
      <Wrapper>
        <TriggerWrapper>
          <Trigger onClick={this.renderDayPicker}>
            <StyledSpan active={showDayPicker}>{date}</StyledSpan> /&nbsp;
            <StyledSpan active={showMonthPicker}>{month}</StyledSpan> /&nbsp;
            <StyledSpan active={showYearPicker}>{year}</StyledSpan>
          </Trigger>
        </TriggerWrapper>
        <Dropdown>
          {showDayPicker && <DayPicker onDatePicked={this.renderMonthPicker} />}
          {showMonthPicker && (
            <MonthPicker onMonthPicked={this.renderYearPicker} />
          )}
          {showYearPicker && <YearPicker onYearPicked={this.onDatePicked} />}
        </Dropdown>
      </Wrapper>
    );
  }
}

export default DatePicker;
