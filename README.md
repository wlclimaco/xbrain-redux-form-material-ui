# X-Brain Redux Form Material UI

[![Build Status](https://travis-ci.org/xbrain-dev/xbrain-redux-form-material-ui.svg?branch=master)](https://travis-ci.org/xbrain-dev/xbrain-redux-form-material-ui)
[![gzip size](http://img.badgesize.io/https://unpkg.com/xbrain-redux-form-material-ui/dist/xbrain-redux-form-material-ui.min.js?compression=gzip)](https://unpkg.com/xbrain-redux-form-material-ui/dist/xbrain-redux-form-material-ui.min.js)
[![dependencies Status](https://david-dm.org/xbrain-dev/xbrain-redux-form-material-ui/status.svg)](https://david-dm.org/xbrain-dev/xbrain-redux-form-material-ui)
[![devDependencies Status](https://david-dm.org/xbrain-dev/xbrain-redux-form-material-ui/dev-status.svg)](https://david-dm.org/xbrain-dev/xbrain-redux-form-material-ui?type=dev)
[![peerDependencies Status](https://david-dm.org/xbrain-dev/xbrain-redux-form-material-ui/peer-status.svg)](https://david-dm.org/xbrain-dev/xbrain-redux-form-material-ui?type=peer)
[![npm](https://img.shields.io/npm/v/xbrain-redux-form-material-ui.svg)](https://www.npmjs.com/package/xbrain-redux-form-material-ui)
[![license](https://img.shields.io/github/license/xbrain-dev/xbrain-redux-form-material-ui.svg)](https://github.com/xbrain-dev/xbrain-redux-form-material-ui)

[`xbrain-redux-form-material-ui`](https://github.com/xbrain-dev/xbrain-redux-form-material-ui)
is a set of wrappers to facilitate the use of
[`material-ui v1`](https://github.com/callemall/material-ui) components with
[`redux-form`](https://github.com/erikras/redux-form).

## Installation

Using [yarn](https://yarnpkg.com/):

```bash
  yarn add xbrain-redux-form-material-ui
```

Using [npm](https://www.npmjs.org/):

```bash
  npm install --save xbrain-redux-form-material-ui
```

## Available Components

* [TextField](https://material-ui-next.com/demos/text-fields/)

## Usage

Rather than import your component class from `material-ui`, import it from
`xbrain-redux-form-material-ui` and then pass the component class directly to
the `component` prop of `Field`.

```js
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'xbrain-redux-form-material-ui';

class MyForm extends Component {
  render() {
    return (
      <form>
        <Field name="username" component={TextField} placeholder="Username" />
      </form>
    );
  }
}

// Decorate with redux-form
MyForm = reduxForm({
  form: 'myForm',
})(MyForm);

export default MyForm;
```
