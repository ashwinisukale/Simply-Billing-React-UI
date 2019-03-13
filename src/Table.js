import React, {Component} from 'react';

import './datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Table extends Component { 
    componentDidMount() {
        $(this.refs.main).DataTable({
           data: this.props.data,
           columns: this.props.columns
        });
    }  
    componentWillUnmount(){
       $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
          <div>
              <table ref="main" />
          </div>);
    }
}


export default Table;