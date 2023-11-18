import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { LinkStyles, P_LargeStyles } from "@/styles/type";

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    background-color: transparent;

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
        }

        &__link {
            ${P_LargeStyles};
            ${LinkStyles};
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link className="header__logo-container" href={"/"}>
                <p className="header__title">
                    BioSynth <br />
                    Pharmaceuticals
                </p>
            </Link>
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
