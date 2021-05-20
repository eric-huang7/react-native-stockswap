import React from 'react';
import TopUsersPeople from '../src/components/TopUsersTabScreens/TopUsersPeople';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

jest.mock('@react-native-community/google-signin', () => {});

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
jest.mock('react-redux', () => ({
    connect: () => {
      return (component) => {
        return component
      };
    }
  }));
  

test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render   (<TopUsersPeople userAccount={{id:'test'}} users={[]} />);
    const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});