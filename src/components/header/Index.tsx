import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { LinkStyles, P_LargeStyles } from "@/styles/type";
import { colors, media } from "@/styles/variables";

interface HeaderContainerProps {
    $modalOpen: boolean;
}

const HeaderContainer = styled.nav<HeaderContainerProps>`
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    background-color: ${colors.neutral300};
    position: relative;
    height: 132px;
    overflow: hidden;
    transition: overflow 0.5s;

    ${({ $modalOpen }) => {
        if ($modalOpen) {
            return css`
                overflow: visible;

                .header__link-container {
                    height: 124px !important;
                }

                .header__link {
                    opacity: 1 !important;
                }
            `;
        }
    }}

    .header {
        &__title-container {
        }

        &__title {
            ${P_LargeStyles};
            font-weight: 700;
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        &__link-container {
            display: flex;
            gap: 40px;
            align-items: center;

            @media ${media.tablet} {
                position: absolute;
                right: 0;
                top: 132px;
                height: 0;
                background-color: ${colors.neutral100};
                z-index: 10;
                flex-direction: column;
                gap: 0;
                transition: height 0.5s ease-out;
            }
        }

        &__link {
            ${P_LargeStyles};
            ${LinkStyles};

            @media ${media.tablet} {
                transition: opacity 0.3s 0.3s;
                opacity: 0;
                padding: 15px 40px 15px 20px;
            }
        }

        &__mobile-menu {
            display: none;

            @media ${media.tablet} {
                display: block;
            }
        }
    }
`;

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModalHandler = () => {
        setModalOpen((curr) => !curr);
    };

    return (
        <HeaderContainer $modalOpen={modalOpen}>
            <Link className="header__logo-container" href={"/"}>
                <p className="header__title">
                    Lobos <br />
                    Pharmaceuticals
                </p>
            </Link>
            <button
                className="header__mobile-menu"
                onClick={openModalHandler}
            ></button>
            <div className="header__link-container">
                <Link
                    className="header__link"
                    href={"/projects"}
                    onClick={() => setModalOpen(false)}
                >
                    Projects
                </Link>
                <Link
                    className="header__link"
                    href={"/about"}
                    onClick={() => setModalOpen(false)}
                >
                    About Us
                </Link>
            </div>
        </HeaderContainer>
    );
};

export default Header;
