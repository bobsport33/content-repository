import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { ContactProps } from "@/types";
import { Container } from "@/styles/mixins";
import { LinkStyles, P_MediumStyles } from "@/styles/type";

const ContactContainer = styled.section`
    ${Container};
    display: flex;
    gap: 30px;
    justify-content: center;

    .contact {
        &__map {
            height: 600px;
            width: 800px;
        }
        &__text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
        }

        &__link-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &__link {
            ${P_MediumStyles};
            width: fit-content;
            ${LinkStyles};
        }
    }
`;

const Contact = ({ icon, address, phone, email }: ContactProps) => {
    return (
        <ContactContainer>
            <div className="contact__map">
                <iframe
                    className="contact__map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.917705554868!2d-87.63740792348158!3d41.83007016841936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c1695ad4dcb%3A0xfec52be9d69041ed!2s333%20W%2035th%20St%2C%20Chicago%2C%20IL%2060616!5e0!3m2!1sen!2sus!4v1700363129697!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="contact__text-container">
                <h3 className="contact__heading">Contact Us</h3>
                <div className="contact__link-container">
                    <h6 className="contact__subtitle">Address</h6>
                    <Link
                        href={"https://maps.app.goo.gl/FpeYyE8JQgfcHVdh8"}
                        target="_blank"
                        className="contact__link"
                    >
                        {address}
                    </Link>
                </div>
                <div className="contact__link-container">
                    <h6 className="contact__subtitle">Phone</h6>
                    <Link
                        href={`tel:1${phone.replace(/\D/g, "")}`}
                        className="contact__link"
                    >
                        {phone}
                    </Link>
                </div>
                <div className="contact__link-container">
                    <h6 className="contact__subtitle">Email</h6>
                    <Link href={`mailto:${email}`} className="contact__link">
                        {email}
                    </Link>
                </div>
            </div>
        </ContactContainer>
    );
};

export default Contact;
