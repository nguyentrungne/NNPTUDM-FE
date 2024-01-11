import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: #ee4d2d;
    padding: 10px 120px;
    align-items: center;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled.span`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WrapperAccountHeader = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`
export const WrapperCartHeader = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;