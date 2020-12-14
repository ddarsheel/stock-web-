import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { Button} from "react-bootstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class DATA extends Component {
  constructor() {
    super();

    this.state = {
      symbolstock:'',
      nameofindustry:'',
      selectindustry: "",
      selectstock: "",
      store: [],
       columns : [
        { headerName: "Symbol", field: "symbol", cellRenderer: function(params) {
          return '<a href="/stock/'+params.value+'" >'+ params.value+'</a>' }},
        { headerName: "Name", field: "name" },
        { headerName: "Industry", field: "industry" }
      ],
      baseURL: "http://131.181.190.87:3001/",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }
  componentDidMount() {
    fetch(this.state.baseURL + "all")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            store: result,
            selectstock: [...new Set(result.map((item) => item.symbol))],
            selectindustry: [
              ...new Set(result.map((item) => item.industry)),
            ],
          });
        },
      );
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHandle(event) {
    event.preventDefault();
    let url= this.state.baseURL;
    if(this.state.symbolstock == "" && this.state.nameofindustry == ""){
      url += "all?symbol="+this.state.symbolstock+"&&industry="+this.state.nameofindustry;
    }else if(this.state.symbolstock == ""){
      url += "industry?industry="+this.state.nameofindustry;
    }else if(this.state.nameofindustry == ""){
      url += "all?symbol="+this.state.symbolstock;
    }else{
      url += "all?symbol="+this.state.symbolstock+"&&industry="+this.state.nameofindustry;
    }
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            store: result,
          });
        },
        
      );
  }
  render() {
    return (
      <div className="container">
        <div className="optionselect">
          <form onSubmit={(e)=>this.submitHandle(e)}>
            <select id="stocksearch" name="symbolstock" className="stockselection" onChange={(e)=>this.handleChange(e)}>
              <option value="">
                 STOCK SEARCH
              </option>
              {this.state.selectstock
                ? this.state.selectstock.map((item, index) => (
                    <option value={item}>{item}</option>
                ))
                : null}
            </select>
            <select id="industrysearch"  name="nameofindustry" className="industryseletion" onChange={(e)=>this.handleChange(e)}>
              <option value=""> INDUSTRY SEARCH</option>
              {this.state.selectindustry
                ? this.state.selectindustry.map((item, index) => (
                    <option value={item}>{item}</option>
                ))
                : null}
            </select>
            <Button type="submit"
              variant="primary"
              size="lg" >  
              SEARCH
            </Button>
          </form>
        </div>
        <div className="table">
          
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "800px"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columns}
          rowData={this.state.store}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
       </div>
      </div>
    );
  }
}
export default DATA;
