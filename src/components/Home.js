import React, { Component } from "react";
import { Form, Item, Icon } from "semantic-ui-react";
import "./style.css";
import { getRepos } from "../_actions/repos";
import { connect } from "react-redux";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    const username = this.state.name;
    this.props.dispatch(getRepos(username));
  };

  render() {
    const data = this.props.repos.data;
    const { name } = this.state;
    
    console.log(data);
    return (
      <div>
        <div className="navbar">Github Repository Search</div>
        <div className="search">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="Github Username"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Form.Button content="Search" />
            </Form.Group>
          </Form>
        </div>
        <div className="item">
          <Item.Group divided relaxed>
            {data.length !== 0 ? data.map(item => (
              <Item key={item.id}>
                <Item.Content verticalAlign="middle">
                  <Icon name="github" />
                  <Item.Header>{item.name}</Item.Header>
                  <Item.Meta>{item.full_name}</Item.Meta>
                  <Item.Meta as="a" href={item.html_url}>
                    {item.html_url}
                  </Item.Meta>
                </Item.Content>
              </Item>
            )) : <h1>Data not Found</h1>}
          </Item.Group>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos
   
  };
};

export default connect(mapStateToProps)(Home);
