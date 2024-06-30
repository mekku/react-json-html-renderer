
# react-json-html-renderer

`react-json-html-renderer` is a React component that renders JSON data into an HTML table. This component is useful for visualizing JSON structures in a readable and organized table format.

## Installation

To install the `react-json-html-renderer` component, you can use npm or yarn:

```bash
npm install react-json-html-renderer
```

or

```bash
yarn add react-json-html-renderer
```

## Usage

Here is an example of how to use the `react-json-html-renderer` component in your React application.

```jsx
import React from 'react';
import JsonRenderer from 'react-json-html-renderer';

const jsonData = {
  hello: 'world',
  str: 'string',
  number: 1,
  "null": null,
  table: [{
    "undefined": undefined,
    "boolean": true,
    object: {
      foo: "foo1",
      bar: {
        hello: 'world',
        str: 'string',
      }
    },
    listMixed: [
      "str",
      {
        foo: "foo1",
        bar: [{
          hello: 'world',
          str: 'string',
        }]
      },
      "str",
    ],
    list: [
      {
        foo: "foo1",
        bar: [{
          hello: 'world',
          str: 'string',
        }]
      },
      {
        foo: "foo2",
        bar: "bar2",
      },
      {
        foo: "foo3",
        bar: "bar3",
      },
      {
        foo: "foo4",
        bar: "bar4",
      }
    ]
  }]
};

const App = () => {
  return (
    <div>
      <h1>JSON Data Renderer</h1>
      <JsonRenderer data={jsonData} />
    </div>
  );
};

export default App;
```

## Props

The `JsonRenderer` component accepts the following props:

- `data` (object): The JSON data to be rendered as an HTML table.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## Acknowledgements

Thanks to the community for their support and contributions to this project.
