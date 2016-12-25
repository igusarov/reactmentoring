import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SaveItem from '../components/SaveItem';
import CategoryList from './CategoryList';
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import './App.css';

class App extends Component {

  saveCategory(newName) {
    let category = this.props.popup.saveCategory.category;
    let parentCategory = this.props.popup.saveCategory.parentCategory;
    let name = newName;
    if(parentCategory){
      this.props.actions.addCategory({name, parentCategory});
    }else{
      let newCategory = {...category};
      newCategory.name = newName;
      this.props.actions.updateCategory({category, newCategory});
    }
    this.props.actions.afterSavingCategory();
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <Header/>
        </div>
        <div className="App__content">
          <div className="Content">
            <div className="Content__col Content__col--left">
              <CategoryList/>
            </div>
            <div className="Content__col Content__col--right">
              {this.props.children}
            </div>
          </div>
        </div>
        {this.props.popup.saveCategory ?
          <div style={{top: this.props.popup.saveCategory.posY, left: this.props.popup.saveCategory.posX}} className="App__save-item">
            <SaveItem value={this.props.popup.saveCategory.initialName} onSave={this.saveCategory.bind(this)} />
          </div> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  popup: state.popup
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

App = connect(mapStateToProps,mapDispatchToProps)(App);

export default App;
