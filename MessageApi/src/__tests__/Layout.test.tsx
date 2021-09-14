import { fireEvent, render } from '@testing-library/react';
import { getNodeText } from '@testing-library/dom';
import App from '../App';
import { Count } from '../components/Count';

describe("Testing App as Global Component", () => {
  
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <App />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Firing STOP/START button click event', () => {
      const { queryByTestId } = wrapper;
      let btn = queryByTestId("OnStateBtn");
      expect(btn.innerHTML).toBe("STOP");
      fireEvent.click(btn);
      expect(btn.innerHTML).toBe("START");
      fireEvent.click(btn);
      expect(btn.innerHTML).toBe("STOP");
    });

  it('should show the pointer cursor on buttons', () => {
    const { queryAllByRole } = wrapper;
    let buttons = queryAllByRole("button");
    buttons.forEach((button: any) => {
      expect(button).toHaveStyle(`cursor: pointer`);
    });
  });
});

//Testing Count Component as single component
describe('Count component', () => {
  let count:number = 2;
  it('should show the current elementCount', () => {
    const { container } = render(
      <Count elementCount={count} />
    );
    let text = getNodeText(container.querySelector('div') as any)
    expect(text).toBe("Count 2");
  });
});