import styled from 'styled-components/native';

import { theme } from '../../../theme';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.transparency.dark25,
})<{ active: boolean }>`
  border: 3px solid
    ${({ active }) => (active ? theme.colors.main.p1 : theme.colors.main.t1)};
  padding: 10px;
  border-radius: 8px;
  ${theme.typography.Body1}
`;
