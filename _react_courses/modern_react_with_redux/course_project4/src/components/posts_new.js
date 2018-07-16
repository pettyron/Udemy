import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type={field.type} {...field.input} className="form-control" />
      </div>
    );
  }

  render() {
    return (
      <div className="col-12 my-4">
        <form>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            type="text"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
