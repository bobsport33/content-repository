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
    background-color: transparent;
    position: relative;
    height: 96px;
    overflow: hidden;
    transition: overflow 0.5s;

    ${({ $modalOpen }) => {
        if ($modalOpen) {
            return css`
                overflow: visible;
            `;
        }
    }}

    .header {
        height: 96px;
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
                top: 96px;
                background-color: ${colors.neutral100};
                z-index: 10;
                flex-direction: column;
                gap: 15px;
                padding: 20px 40px 20px 20px;
            }
        }

        &__link {
            ${P_LargeStyles};
            ${LinkStyles};
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
                    {/* BioSynth <br />
                    Pharmaceuticals */}
                    title
                </p>
            </Link>
            <button onClick={openModalHandler}></button>
            <div className="header__link-container">
                <Link className="header__link" href={"/projects"}>
                    Projects
                </Link>
                <Link className="header__link" href={"/about"}>
                    About Us
                </Link>
            </div>
        </HeaderContainer>
    );
};

export default Header;
