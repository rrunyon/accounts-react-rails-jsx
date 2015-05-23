var Record = React.createClass({
  render: function() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
      </tr>
    );
  }
});
