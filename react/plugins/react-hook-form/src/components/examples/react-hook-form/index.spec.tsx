<%_ if (testing === 'testing-library') { _%>   
  import { render, fireEvent, screen } from "test";
  import { act } from '@testing-library/react-hooks'
  <%_ } else if (testing === 'enzyme') { _%>
  import mount from "test/mount";  
  <%_ } _%>
  
  import { FormExample } from './index'

  <%_ if (testing === 'testing-library') { _%>
  describe('FormExample component testing with testing-library', () => {
    
      it('check name input', async () => {
        render(<FormExample/>);
  
        await act(async () => {
            await fireEvent.click(screen.getByRole('button'));
        });
  
        screen.getByText('Name field is required!');
  
        await act(async () => {
          await fireEvent.input(screen.getByPlaceholderText(/First Name.../i), {
            target: { name: 'name', value: '123' },
          });
        });
          
        screen.getByText('Name must be at least 4 characters');
  
        await act(async () => {
          await fireEvent.input(screen.getByPlaceholderText(/First Name.../i), {
            target: { name: 'name', value: '12345' },
          });
        });
  
        expect(screen.queryByText('Name must be at least 4 characters')).toBe(null)
      });
  
      it('check email input', async () => {
        render(<FormExample/>);
  
        await act(async () => {
          await fireEvent.click(screen.getByRole('button'));
        });
  
        screen.getByText('Email field is required!');
  
        await act(async () => {
          await fireEvent.input(screen.getByPlaceholderText(/Email.../i), {
            target: { name: 'email', value: '123' },
          });
        });
          
        screen.getByText('Invalid email adress');
  
        await act(async () => {
          await fireEvent.input(screen.getByPlaceholderText(/Email.../i), {
            target: { name: 'email', value: 'test@example.com' },
          });
        });
  
        expect(screen.queryByText('Invalid email adress')).toBe(null)
      });
  });   
  
  <%_ } else if (testing === 'enzyme') { _%>
  describe("FormExample component testing with enzyme", () => {
      const component = mount(<FormExample />);
  
      it("renders correctly", () => {
        expect(component).toBeTruthy();
      });
  });
  <%_ } _%>