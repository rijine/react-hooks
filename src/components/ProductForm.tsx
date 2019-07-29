import React from 'react';
import { Form, Field } from 'react-final-form';
import RenderCount from './RenderCount';

/* onSubmit={onSubmit}
    validate={validate}
 */
const ProductForm: React.FC = () => (
  <Form
    subscription={{ submitting: true }}
    onSubmit={er => {
      console.log('object', er);
    }}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field subscription={{ value: true, active: true, error: true }} name="firstName" component="input" placeholder="First Name" />
        </div>

        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
          <label>Interests</label>
          {/* <Field name="interests" component={InterestPicker} /> */}
        </div>
        <h2>Render Function</h2>
        <Field
          name="bio"
          validate={value => (value ? undefined : ' Required')}
          subscription={{ value: true, active: true, error: true }}
          render={({ input, meta }) => (
            <div>
              <RenderCount />
              <label>Bio</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        <h2>Render Function as Children</h2>

        <Field
          name="phone"
          subscription={{ value: true, active: true, error: true }}
        >
          {({ input, meta }) => (
            <div>
              <RenderCount />
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
);

export default ProductForm;
