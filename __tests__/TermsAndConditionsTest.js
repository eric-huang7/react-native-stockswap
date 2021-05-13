import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import TermsAndConditions from '../src/components/LoggedOutScreens/TermsAndConditions';
import renderer from 'react-test-renderer';


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


test('renders correctly', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<TermsAndConditions/>);
//   const tree = renderer.getRenderOutput();
// state={screen:"privacy"}
    const tree = renderer.create(<TermsAndConditions screen={'privacy'} />).toJSON();
  expect(tree).toMatchSnapshot();
});