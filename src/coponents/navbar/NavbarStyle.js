import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 15px;
`;

export const NavbarUl = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 15px;
    color: black;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 690px) {
        display: none;
    }
`;

export const NavbarLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    gap: 50px;

    &:hover {
        background-color: yellow;
        padding: 10px 15px;
        border-radius: 10px;
    }
`;

export const NavbarLogo = styled.img`
    width: 150px;
    margin-left: 2rem;
    cursor: pointer;

    @media (max-width: 449px) {
        width: 120px;
    }
`;

export const NavimgDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
`;

export const Button = styled.button`
    padding: 10px 15px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 10px;
    width: 80px;
`;

export const ButtonDiv = styled.div`
    margin-right: 25px;
    @media (max-width: 690px) {
        display: none;
    }
`;

export const SideHam = styled.img`
    width: 35px;
    padding-right: 15px;
    display: none;

    @media (max-width: 690px) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    
    ${NavbarLi} {
        margin: 0;
    }
    
    ${Button} {
        width: 100%;
    }
`;
