import styled from 'styled-components';

const ChipContainer = styled.span`
    padding: 4px 8px;
    border-radius: 16px;
    background-color: var(--primary-color);
    color: var(--const-white);
    font-size: 14px;
`;

const Chip = ({ text, color }) => {
    return <ChipContainer color={color}>{text}</ChipContainer>;
};

export default Chip;
