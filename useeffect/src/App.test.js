import React from 'react';
import * as ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import ViewTasks from './todo/ViewTasks';
import { getTodoItem } from './store/services';

test('renders learn react link', () => {
  const container = document.createElement("div");
  ReactDOM.render(<ViewTasks />, container);

  expect(container.querySelector('h2').textContent).toBe('Task');

  ReactDOM.render(<App />, container);
});
