import { colors } from "@/styles/variables";
import React, { Ref, forwardRef } from "react";
import styled from "styled-components";

interface MenuProps {
    onClick: () => void;
}

export const MenuCont = styled.div`
    &:hover {
        cursor: pointer;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 49px;
    background-color: ${colors.primary100};

    .menu__hamburger {
        background-color: ${colors.accent400};
        height: 1.5px;
        width: 25.5px;
        border-radius: 20px;
        position: relative;
        transition: transform 0.3s;

        &::before {
            background-color: ${colors.accent400};
            content: "";
            display: inline-block;
            height: 1.5px;
            width: 25.5px;
            border-radius: 20px;
            position: absolute;
            top: -5.5px;
            left: 0;
            transition: transform 0.3s;
        }
        &::after {
            background-color: ${colors.accent400};
            content: "";
            display: inline-block;
            height: 1.5px;
            width: 25.5px;
            border-radius: 20px;
            position: absolute;
            top: 5.5px;
            right: 0;
            transition: transform 0.3s;
        }
    }

    #menu-checkbox2 {
        display: none;

        &:checked {
            ~ .menu__label {
                .menu__hamburger {
                    animation: changeMenu 1s;
                    transform: rotate(45deg);

                    &::before {
                        animation: changeMenuBefore 1s;
                        top: 0;
                        transform: rotate(90deg);
                    }

                    &::after {
                        animation: changeMenuAfter 1s;
                        top: 0;
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }

    @keyframes changeMenu {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(45deg);
        }
    }
    @keyframes changeMenuBefore {
        0% {
            top: -5.5px;
            transform: rotate(0);
        }
        50% {
            top: 0;
            transform: rotate(0);
        }
        100% {
            transform: rotate(90deg);
        }
    }
    @keyframes changeMenuAfter {
        0% {
            top: 5.5px;
            transform: rotate(0);
        }
        50% {
            top: 0;
            transform: rotate(0);
        }
        100% {
            transform: rotate(90deg);
        }
    }
`;

const HamburgerMenu = forwardRef<HTMLInputElement, MenuProps>(
    ({ onClick }, ref) => {
        return (
            <MenuCont>
                <input
                    id="menu-checkbox2"
                    name="menu-checkbox2"
                    type="checkbox"
                    ref={ref}
                />
                <label
                    htmlFor="menu-checkbox2"
                    className="menu__label"
                    onClick={onClick}
                >
                    <div className="menu__hamburger"></div>
                </label>
            </MenuCont>
        );
    }
);

export default HamburgerMenu;
