import * as React from "react";
import { UiButton } from "../UiButton";
import { fireEvent, render } from "@testing-library/react-native";

describe('Test Button component', () => {

  it(`render UiButton`, () => {
    const { getByText,  } = render(
      <UiButton title="Кнопка" />
    );

    let label = getByText('Кнопка');
    expect(label).toBeTruthy();
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const tree = render((<UiButton onPress={mockCallBack} title="Button" />));
    const button = tree.root;

    fireEvent(button, 'press')
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
