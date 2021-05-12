import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import PrivacyPolicy from '../src/components/MyProfileTabScreens/PrivacyPolicy';


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<PrivacyPolicy/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});