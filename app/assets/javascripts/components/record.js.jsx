var Record = React.createClass({

  handleDelete: function(e) {
    $.ajax({
      method: 'DELETE',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteRecord(this.props.record)
      }.bind(this)
    });
  },
  
  render: function() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <a className='btn btn-danger' onClick={this.handleDelete}>
            Delete
          </a>
        </td>
      </tr>
    );
  }
});
