import * as React from 'react';
import autoBindMethods from 'class-autobind-decorator';

import { FormsyComponent, IFormsyComponentProps, IFormComponentState } from '../FormsyComponent';

export interface ITextAreaProps extends IFormsyComponentProps {
  placeholder?: string;
  rows?: number;
}

/**
 * A Formsy form component that accepts a LayoutComponent
 */
@autoBindMethods()
export class TextArea extends FormsyComponent<string, ITextAreaProps, IFormComponentState> {
  public static contextTypes = FormsyComponent.contextTypes;
  public static defaultProps = FormsyComponent.defaultProps;

  public renderInput() {
    const { name, placeholder, rows } = this.props;
    const inputClass = this.getInputClass();

    return (
      <textarea
        className={inputClass}
        name={name}
        id={name}
        placeholder={placeholder}
        rows={rows}
        onChange={this.handleChange}
        value={this.getValue()}
      />
    );
  }
}
