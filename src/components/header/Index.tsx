import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { LinkStyles, P_LargeStyles } from "@/styles/type";

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;

    .header {
        &__logo-container {
        }

        &__logo {
        }

        &__link-container {
            display: flex;
            gap: 30px;
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
                <img src="" alt="" className="header__logo" />
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
