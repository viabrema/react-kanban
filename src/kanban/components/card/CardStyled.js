import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    margin-bottom: 10px;
    cursor: grab;
`

export const Title = styled.h1`
    font-size: 18px;
    color: #222;
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 16px;
`

export const ContentUsers = styled.div`
    margin-top: 5px;
`

export const UserAvatar = styled.div`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    &::after{
        display: none;
        content: attr(aria-label);
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 10px;
        background-color: #222;
        color: #fff;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        transform: translateY(-105%);
    }

    &:hover{
        &::after{
            display: block;
        } 
    }
`