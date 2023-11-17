import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Facebook from "@/styles/svg/facebook-icon.svg";
import Instagram from "@/styles/svg/instagram-icon.svg";
import LinkedIn from "@/styles/svg/linkedin-icon.svg";
import { LinkStyles, P_MediumStyles } from "@/styles/type";
import { colors } from "@/styles/variables";

const FooterContainer = styled.footer`
    background-color: ${colors.neutral1000};
    padding: 80px 20px 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;

    .footer {
        &__logo {
        }
        &__link-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &__link {
            ${P_MediumStyles};
            ${LinkStyles};
            color: ${colors.neutral100};
        }
        &__social-container {
            display: flex;
            gap: 10px;
        }

        &__social-icon {
            height: 30px;
            width: 30px;
            svg {
                height: 100%;
                width: 100%;
                fill: ${colors.neutral100};
                path {
                    fill: ${colors.neutral100};
                }
            }
        }

        &__copyright {
            grid-column: 1 / 3;
            color: ${colors.neutral100};
            text-align: center;
        }
    }
`;

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <FooterContainer>
            <Image
                src=""
                alt=""
                height={100}
                width={300}
                className="footer__logo"
            />
            <div className="footer__link-container">
                <Link className="footer__link" href={"/projects"}>
                    Projects
                </Link>
                <Link className="footer__link" href={"/about"}>
                    About Us
                </Link>
            </div>
            <div className="footer__social-container">
                <Link
                    className="footer__social-icon"
                    href={"http://www.facebook.com"}
                >
                    <Facebook />
                </Link>
                <Link
                    className="footer__social-icon"
                    href={"http://www.instagram.com"}
                >
                    <Instagram />
                </Link>
                <Link
                    className="footer__social-icon"
                    href={"http://www.linkedin.com"}
                >
                    <LinkedIn />
                </Link>
            </div>
            <p className="footer__copyright">© {year}</p>
        </FooterContainer>
    );
};

export default Footer;
